import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }

  eliminarUsuario(id: number): void {
    this.usuarioService.eliminarUsuario(id).subscribe(() => {
      this.obtenerUsuarios();  // Refrescar la lista después de eliminar
    });
  }
}
