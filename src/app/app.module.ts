//Browser import
import { BrowserModule } from '@angular/platform-browser';

//NgModule import
import { NgModule } from '@angular/core';

//App routing import
import { AppRoutingModule } from './app-routing.module';

//-----------App components imports-----------
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
//-----------End of App component imports-----------

//HttpClient import
import { HttpClientModule } from '@angular/common/http';

//Router import
import { RouterModule } from '@angular/router';

//Forms import
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Browser animations import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Toastr import
import { ToastrModule } from 'ngx-toastr';

//Alert dialog import
import { AlertDialogComponent } from './alert-dialog/alert-dialog/alert-dialog.component';

//--------------Angular material imports--------------------
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
//-------------End of Angular material imports-----------

//---------------------------Material declarations---------------------------
@NgModule({
  exports: [   
    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  
})
export class MaterialModule {}
//---------------------------End of Material declarations---------------------------

//---------------------------App module declarations---------------------------
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AlertDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path: 'main', component: MainComponent},
    ]),
    
  ],
  entryComponents: [AlertDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//---------------------------End of App module declarations---------------------------
