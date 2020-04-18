import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { EmployeesComponent } from './employees/employees.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    SearchFilterComponent,
    EmployeesComponent,
    EmployeeCardComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,  
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
