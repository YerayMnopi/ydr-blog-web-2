import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

export function getWindowRef() {
  return (typeof window !== "undefined") ? window : null;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [
    { provide: 'WINDOWREF', useFactory: getWindowRef },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
