import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectAddComponent } from './components/project-add/project-add.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { PerformersComponent } from './components/performers/performers.component';
import { PerformerAddComponent } from './components/performer-add/performer-add.component';
import { PerformerDetailsComponent } from './components/performer-details/performer-details.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HeaderComponent,
    ProjectsComponent,
    ProjectAddComponent,
    ProjectDetailsComponent,
    PerformersComponent,
    PerformerAddComponent,
    PerformerDetailsComponent,
    CustomerComponent,
    CustomerAddComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
