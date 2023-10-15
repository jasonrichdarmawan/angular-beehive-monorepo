import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages/beehive-green-happy',
    loadChildren: () => import("./pages/bee-green-happy/bee-green-happy.module").then(m => m.BeeGreenHappyModule),
  },
  {
    path: 'pages/beehive-green-cry',
    loadChildren: () => import("./pages/bee-green-cry/bee-green-cry.module").then(m => m.BeeGreenCryModule),
  },
  {
    path: '',
    redirectTo: 'pages/beehive-green-happy',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: 'pages/beehive-green-happy', 
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
