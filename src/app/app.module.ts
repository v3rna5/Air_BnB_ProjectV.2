import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';
import { EditPropertyComponent } from './edit-property/edit-property.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    AdminComponent,
    EditPropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule }  from '@angular/forms';
// import { CompletenessPipe } from './completeness.pipe';
//
//
// import { AppComponent } from './app.component';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { PropertyListComponent } from './property-list/property-list.component';
// import { EditPropertyComponent } from './edit-property/edit-property.component';
// import { NewPropertyComponent } from './new-property/new-property.component';
// import { AboutComponent } from './about/about.component';
// import { AdminComponent } from './admin/admin.component';
// import { PropertyDetailComponent } from './property-detail/property-detail.component';
//
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     WelcomeComponent,
//     PropertyListComponent,
//     EditPropertyComponent,
//     NewPropertyComponent,
//     CompletenessPipe,
//     AboutComponent,
//     AdminComponent,
//     PropertyDetailComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
