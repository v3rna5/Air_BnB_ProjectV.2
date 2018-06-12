import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { CompletenessPipe } from './completeness.pipe';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { NewPropertyComponent } from './new-property/new-property.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PropertyListComponent,
    EditPropertyComponent,
    NewPropertyComponent,
    CompletenessPipe,
    AboutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
