# OssianApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## Serve in your server

Install node_modules directory and then install the following modules

//--------------Angular material imports--------------------<br>
import { MatAutocompleteModule } from '@angular/material/autocomplete';<br>
import { MatButtonModule } from '@angular/material/button';<br>
import { MatButtonToggleModule } from '@angular/material/button-toggle';<br>
import { MatCardModule } from '@angular/material/card';<br>
import { MatCheckboxModule } from '@angular/material/checkbox';<br>
import { MatChipsModule } from '@angular/material/chips';<br>
import { MatDatepickerModule } from '@angular/material/datepicker';<br>
import { MatDialogModule } from '@angular/material/dialog';<br>
import { MatExpansionModule } from '@angular/material/expansion';<br>
import { MatGridListModule } from '@angular/material/grid-list';<br>
import { MatIconModule } from '@angular/material/icon';<br>
import { MatInputModule } from '@angular/material/input';<br>
import { MatListModule } from '@angular/material/list';<br>
import { MatMenuModule } from '@angular/material/menu';<br>
import { MatProgressBarModule } from '@angular/material/progress-bar';<br>
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';<br>
import { MatRadioModule } from '@angular/material/radio';<br>
import { MatSelectModule } from '@angular/material/select';<br>
import { MatSidenavModule } from '@angular/material/sidenav';<br>
import { MatSlideToggleModule } from '@angular/material/slide-toggle';<br>
import { MatSliderModule } from '@angular/material/slider';<br>
import { MatSnackBarModule } from '@angular/material/snack-bar';<br>
import { MatStepperModule } from '@angular/material/stepper';<br>
import { MatTableModule } from '@angular/material/table';<br>
import { MatTabsModule } from '@angular/material/tabs';<br>
import { MatToolbarModule } from '@angular/material/toolbar';<br>
import { MatTooltipModule } from '@angular/material/tooltip';<br>
//-------------End of Angular material imports-----------


//Forms import<br>
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Browser animations import<br>
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Toastr import<br>
import { ToastrModule } from 'ngx-toastr';

//HttpClient import<br>
import { HttpClientModule } from '@angular/common/http';

One time u have install all of this you have to change the data on connectionData.php to the data of your server

php<br>
    $server="localhost"; --> Don't touch it<br>
    $user="root"; --> the user of your sql<br>
    $pass=""; --> the pass of your sql<br>
    $bd="ossianapp"; --> your database<br>
<br>

once you have changed this you have to change the url of the config.service.ts and image-upload.service.ts<br>
http://localhost:80/ --> into the url of your server

and in the main.component.ts line 115 and 219<br>
http://localhost:80/ --> into the url of ur server 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
