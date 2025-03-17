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

  //objeto para almacenar los datos del usuario
  usuario: Usuario = new Usuario(0, '', '');

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  //Metodo que se ejecuta al inicializar el componente.
  //verifica si existe un ID en la ruta para editar un usuario
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.usuarioService.obtenerUsuario(+id).subscribe((data: Usuario) => {
        this.usuario = data;
      });
    }
  }


  //Guarda o actualiza un usuario segun si tiene ID o no.
  guardarUsuario(): void {
    if (this.usuario.id === 0) {
      //llama al servicio para crear un nuevo usuario
      this.usuarioService.crearUsuario(this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    } else {
      //llama al servicio para actualizar un usuario existente
      this.usuarioService.actualizarUsuario(this.usuario.id, this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    }
  }
}
