import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
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
    FormsModule,
    ReactiveFormsModule,
    NgxStarRatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
