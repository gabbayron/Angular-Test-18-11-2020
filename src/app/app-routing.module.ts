import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ActionsComponent } from './components/actions/actions.component';
import { Error404Component } from './components/error404/error404.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "", pathMatch: "full", redirectTo: "main" },
  { path: "actions", component: ActionsComponent },
  { path: "**", component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
