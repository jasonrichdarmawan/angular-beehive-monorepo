import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages/beehive-red-happy',
    loadChildren: () => import('./pages/bee-red-happy/bee-red-happy.module').then(m => m.BeeRedHappyModule),
  },
  {
    path: "pages/beehive-red-angry",
    loadChildren: ()=>import('./pages/bee-red-angry/bee-red-angry.module').then(mod=>mod.BeeRedAngryModule),
  },
  {
    path: '',
    redirectTo: 'pages/beehive-red-happy',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'pages/beehive-red-happy',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
