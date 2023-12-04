import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { HttpClientModule } from '@angular/common/http';
import { NewsFeedApiService } from './news-feed-api.service';
import { NewsListComponent } from './news-list/news-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
 
 

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
   
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule
    
     
  ],
  providers: [NewsFeedApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
