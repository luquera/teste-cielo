import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'lancamentos', loadChildren: () => import('./pages/lancamentos/lancamentos.module').then(m => m.LancamentosModule) },
  { path: 'lancamentos', loadChildren: './pages/lancamentos/lancamentos.module#LancamentosModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
