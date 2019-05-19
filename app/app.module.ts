import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { Section1Component } from './section1/section1.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe} from './search/filter.pipe';
import { HighlightPipe} from './search/highlight.pipe';
import { Pipe, PipeTransform } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 

import { FileDetector } from 'selenium-webdriver/remote';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
// import { ContactComponent } from './contact/contact.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    SearchComponent,
    FilterPipe,
    HighlightPipe,
    PricingComponent,
    ContactComponent
    // ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // AngularFontAwesomeModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path:'search',component:SearchComponent},
      { path:'section1',component:Section1Component},
      { path:'pricing',component:PricingComponent},
       { path:'contact',component:ContactComponent},
      { path: '',   redirectTo: '/section1', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
