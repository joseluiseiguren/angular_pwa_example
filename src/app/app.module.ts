import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, 
         MatCardModule, 
         MatButtonModule, 
         MatButtonToggleModule, 
         MatBadgeModule, 
         MatProgressSpinnerModule,
         MatFormFieldModule,
         MatNativeDateModule,
         MatInputModule,
         MatSelectModule,
         MatSlideToggleModule,
         MatSidenavModule,
         MatExpansionModule,
         MatGridListModule,
         MatTabsModule,
         MatDialogModule,
         MatSnackBarModule,
         MatTableModule,
         MatDatepickerModule } from  '@angular/material';

import { MatStepperModule  } from '@angular/material/stepper';
import { MatIconModule  } from '@angular/material/icon';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MydialogComponent } from './mydialog/mydialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MydialogComponent
  ],
  entryComponents: [ MydialogComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatExpansionModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
