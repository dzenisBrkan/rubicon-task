import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { ShowsComponent } from './component/shows/shows.component';
import { TabSwitchComponent } from './component/tab-switch/tab-switch.component';

@NgModule({
  declarations: [	
    AppComponent,
    SearchBarComponent,
    ShowsComponent,
    TabSwitchComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
