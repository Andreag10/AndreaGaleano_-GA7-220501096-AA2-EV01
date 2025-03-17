import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  //lista para almacenar los usuario obtenidos del servicio
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }


  //Metodo que se ejecuta al inicializar el componente.
  //Obtiene la lista de usuarios desde el servicio.
  ngOnInit(): void {
    this.obtenerUsuarios();
  }


  // Obtiene la lista de usuarios desde el backend.
  obtenerUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }

  //Elimina un usuario y actualiza la lista
  eliminarUsuario(id: number): void {
    this.usuarioService.eliminarUsuario(id).subscribe(() => {
      this.obtenerUsuarios();  // Refrescar la lista después de eliminar
    });
  }
}
