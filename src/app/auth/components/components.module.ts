import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { PhpComponent } from './php/php.component';
import { JavaComponent } from './java/java.component';




@NgModule({
  declarations: [



    HtmlComponent,
         CssComponent,
         PhpComponent,
         JavaComponent,

  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,

    // RouterModule
  ]
})
export class ComponentsModule { }
