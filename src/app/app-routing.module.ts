import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SampleComponent} from './sample/sample.component'
import {HomeComponent} from './home/home.component'
import { SignupComponent } from './signup/signup.component'
import { StudentComponent } from './student/student.component'
import { TeacherComponent } from './teacher/teacher.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { StudentListComponent } from './student-list/student-list.component'
import { TeacherListComponent } from './teacher-list/teacher-list.component'
import { EmptyComponent } from './empty/empty.component';
import { CurrencyHeaderComponent } from './currency-header/currency-header.component';
import { CurrencyCreateComponent } from './currency-create/currency-create.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';

const routes: Routes = [
  { path: 'login', component: SampleComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'teacher/:id', component: TeacherComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'teacher-list', component: TeacherListComponent },
  { path: 'empty', component: EmptyComponent },
  { path: 'currency', component: CurrencyHeaderComponent },
  { path: 'currencyCreate/:id', component: CurrencyCreateComponent },
  { path: 'currencyCreate', component: CurrencyCreateComponent },
  { path: 'currencyList', component: CurrencyListComponent },
  { path: '', component: SampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
