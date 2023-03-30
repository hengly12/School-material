import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {


  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
  openBottomSheetCss(): void {
    this._bottomSheet.open(BottomSheetOverviewCSS);
  }
  openBottomSheetJava(): void {
    this._bottomSheet.open(BottomSheetOverviewJava);
  }
  openBottomSheetPhp(): void {
    this._bottomSheet.open(BottomSheetOverviewPhp);
  }
  ngOnInit(): void {
  }

}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',

})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

@Component({
  selector: 'BottomSheetOverviewCSS',
  templateUrl: 'BottomSheetOverviewCSS.html',

})
export class BottomSheetOverviewCSS {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewCSS>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

@Component({
  selector: 'BottomSheetOverviewJava',
  templateUrl: 'BottomSheetOverviewJava.html',

})
export class BottomSheetOverviewJava {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewJava>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

@Component({
  selector: 'BottomSheetOverviewPhp',
  templateUrl: 'BottomSheetOverviewPhp.html',

})
export class BottomSheetOverviewPhp {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewPhp>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
