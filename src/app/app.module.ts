import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Compiler, COMPILER_OPTIONS, CompilerFactory} from '@angular/core';
import {JitCompilerFactory} from '@angular/platform-browser-dynamic';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { EmptyComponent } from './empty/empty.component';
import { CurrencyHeaderComponent } from './currency-header/currency-header.component';
import { CurrencyCreateComponent } from './currency-create/currency-create.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    HomeComponent,
    SignupComponent,
    StudentComponent,
    TeacherComponent,
    DashboardComponent,
    StudentListComponent,
    TeacherListComponent,
    EmptyComponent,
    CurrencyHeaderComponent,
    CurrencyCreateComponent,
    CurrencyListComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ], 
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi: true},
    {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
