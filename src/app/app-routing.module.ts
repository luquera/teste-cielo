import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LancamentosComponent } from './pages/lancamentos/lancamentos.component';
import { TesteComponent } from './teste/teste.component';


const routes: Routes = [
  { path: '', redirectTo: 'teste', pathMatch: 'full' },
  // { path: 'lancamentos', loadChildren: () => import('./pages/lancamentos/lancamentos.module').then(m => m.LancamentosModule) },
  { path: 'lancamentos', loadChildren: './pages/lancamentos/lancamentos.module#LancamentosModule' },
  { path: 'teste', component: TesteComponent }
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
