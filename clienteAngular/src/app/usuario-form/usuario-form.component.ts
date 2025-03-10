import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario: Usuario = new Usuario(0, '', '');

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.usuarioService.obtenerUsuario(+id).subscribe((data: Usuario) => {
        this.usuario = data;
      });
    }
  }

  guardarUsuario(): void {
    if (this.usuario.id === 0) {
      this.usuarioService.crearUsuario(this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    } else {
      this.usuarioService.actualizarUsuario(this.usuario.id, this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    }
  }
}
