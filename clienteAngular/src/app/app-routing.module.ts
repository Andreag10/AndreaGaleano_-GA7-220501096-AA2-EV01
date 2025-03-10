import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

const routes: Routes = [
  { path: '', component: UsuariosListaComponent },
  { path: 'usuarios', component: UsuariosListaComponent },
  { path: 'agregar-usuario', component: UsuarioFormComponent },
  { path: 'editar-usuario/:id', component: UsuarioFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
