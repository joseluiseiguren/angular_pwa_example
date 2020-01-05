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

import { MatListModule } from '@angular/material/list';
import { MatStepperModule  } from '@angular/material/stepper';
import { MatIconModule  } from '@angular/material/icon';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MydialogComponent } from './mydialog/mydialog.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Page2Component } from './page2/page2.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [    
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main',
    component: MainpageComponent,
    children: [
      { path: 'page1', component: Page1Component },
      { path: 'page2', component: Page2Component },
    ]  
  }  
];  

@NgModule({
  declarations: [
    AppComponent,
    MydialogComponent,
    Page2Component,
    MainpageComponent,
    Page1Component
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
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

