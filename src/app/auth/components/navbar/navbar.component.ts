import { Component, OnInit, Inject, Renderer2, Injectable} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {FlatTreeControl} from '@angular/cdk/tree';
import { AuthService } from '../../shared/auth.service';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, Observable} from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

const LOAD_MORE = 'LOAD_MORE';


export class LoadmoreNode {
  childrenChange = new BehaviorSubject<LoadmoreNode[]>([]);

  get children(): LoadmoreNode[] {
    return this.childrenChange.value;
  }

  constructor(
    public item: string,
    public hasChildren = false,
    public loadMoreParentItem: string | null = null,
  ) {}
}

/** Flat node with expandable and level information */
export class LoadmoreFlatNode {
  constructor(
    public item: string,
    public level = 1,
    public expandable = false,
    public loadMoreParentItem: string | null = null,

  ) {}
}

/**
 * A database that only load part of the data initially. After user clicks on the `Load more`
 * button, more data will be loaded.
 */
@Injectable()
export class LoadmoreDatabase {
  batchNumber = 5;
  dataChange = new BehaviorSubject<LoadmoreNode[]>([]);
  nodeMap = new Map<string, LoadmoreNode>();

  /** The data */
  rootLevelNodes: string[] = ['Vegetables', 'Fruits'];
  dataMap = new Map<string, string[]>([
    ['Fruits', ['Apple', 'Orange', 'Banana']],
    ['Vegetables', ['Tomato', 'Potato', 'Onion']],
    ['Apple', ['Fuji', 'Macintosh']],
    ['Onion', ['Yellow', 'White', 'Purple', 'Green', 'Shallot', 'Sweet', 'Red', 'Leek']],
  ]);

  initialize() {
    const data = this.rootLevelNodes.map(name => this._generateNode(name));
    this.dataChange.next(data);
  }

  /** Expand a node whose children are not loaded */
  loadMore(item: string, onlyFirstTime = false) {
    if (!this.nodeMap.has(item) || !this.dataMap.has(item)) {
      return;
    }
    const parent = this.nodeMap.get(item)!;
    const children = this.dataMap.get(item)!;
    if (onlyFirstTime && parent.children!.length > 0) {
      return;
    }
    const newChildrenNumber = parent.children!.length + this.batchNumber;
    const nodes = children.slice(0, newChildrenNumber).map(name => this._generateNode(name));
    if (newChildrenNumber < children.length) {
      // Need a new load more node
      nodes.push(new LoadmoreNode(LOAD_MORE, false, item));
    }

    parent.childrenChange.next(nodes);
    this.dataChange.next(this.dataChange.value);
  }

  private _generateNode(item: string): LoadmoreNode {
    if (this.nodeMap.has(item)) {
      return this.nodeMap.get(item)!;
    }
    const result = new LoadmoreNode(item, this.dataMap.has(item));
    this.nodeMap.set(item, result);
    return result;
  }
}



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [LoadmoreDatabase],
})
export class NavbarComponent implements OnInit {

  dataUser: any ;
  uid: string = '';

  theme: Theme = 'light-theme';
  loading:boolean= true;
  inOut:string='';

  nodeMap = new Map<string, LoadmoreFlatNode>();
  treeControl: FlatTreeControl<LoadmoreFlatNode>;
  treeFlattener: MatTreeFlattener<LoadmoreNode, LoadmoreFlatNode>;
  // Flat tree data source
  dataSource: MatTreeFlatDataSource<LoadmoreNode, LoadmoreFlatNode>;
  auth: any;

  constructor(
    private fireauth : AngularFireAuth,
    private afs: AngularFirestore,
    private _database: LoadmoreDatabase,
    private router : Router,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
    ) { this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren,

    );this.treeControl = new FlatTreeControl<LoadmoreFlatNode>(this.getLevel, this.isExpandable);

    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    _database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });

    _database.initialize();}
    getChildren = (node: LoadmoreNode): Observable<LoadmoreNode[]> => node.childrenChange;

  transformer = (node: LoadmoreNode, level: number) => {
    const existingNode = this.nodeMap.get(node.item);

    if (existingNode) {
      return existingNode;
    }

    const newNode = new LoadmoreFlatNode(
      node.item,
      level,
      node.hasChildren,
      node.loadMoreParentItem,
    );
    this.nodeMap.set(node.item, newNode);
    return newNode;
  };

  getLevel = (node: LoadmoreFlatNode) => node.level;

  isExpandable = (node: LoadmoreFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.expandable;

  isLoadMore = (_: number, _nodeData: LoadmoreFlatNode) => _nodeData.item === LOAD_MORE;

  /** Load more nodes from data source */
  loadMore(item: string) {
    this._database.loadMore(item);
  }

  loadChildren(node: LoadmoreFlatNode) {
    this._database.loadMore(node.item, true);
  }

  ngOnInit(): void {
    this.loading=true;
    this.fireauth.authState.subscribe( user => {
      console.log('user', user);
      if(user){
        this.uid = user?.uid;
      }

      this.afs.collection("user").doc(this.uid).valueChanges().subscribe(res => {
        console.log('userID', res);
        this.dataUser = res;
      })

      this.loading=false;
    })


    this.fireauth.authState.subscribe( user => {
      if(user){
        this.uid = user?.uid;
        this.inOut='Sign out'
      }else{
        this.router.navigate(['/auth/login'])
        this.inOut='Sign in'
      }

      this.afs.collection("user").doc(this.uid).valueChanges().subscribe(res => {
        console.log('res', res);
        this.dataUser = res;
      })
    })

    this.initializeTheme();
  }
  // signOut(){
  //   if(this.dataUser != ''){
  //     this.loading = true;
  //     this.auth.signOut();
  //     this.loading = false;
  //   }else{
  //     this.router.navigate(['/auth/login'])
  //   }
  // }

  signOut(){
    this.fireauth.signOut().then( () =>{
      // '/auth/login' ||
      this.router.navigate(['../../../'])

    }).catch(err => {
      alert("!System error." + err)
    })
  }
//////////////////////////////////////////////////////////////////////
panelOpenState = false;
  // isMenuOpen = false;
  // toggleMenu(): void{
  //   this.isMenuOpen = !this.isMenuOpen;
  // }

  isMenu:boolean = false;
  menuo= true;
  menuc= false;

  toggleMenu(){
    this.isMenu = !this.isMenu;
    this.menuo = !this.menuo;
    this.menuc = !this.menuc;
  }


  // isdarkMode:boolean = false;
  dark= true;
  night= false;

  toggleDark(){
    // this.isMenu = !this.isMenu;
    this.dark = !this.dark;
    this.night = !this.night;
  }

  switchTheme() {
    this.document.body.classList.replace(
      this.theme,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
  }

  initializeTheme = (): void =>
    this.renderer.addClass(this.document.body, this.theme);

}

export type Theme = 'light-theme' | 'dark-theme';

