import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';  // Asegúrate de crear este modelo

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //URL base de la API del backend
  private apiUrl = 'http://localhost:8080/api/usuarios';  // Asegúrate de que el puerto sea el correcto

  constructor(private http: HttpClient) { }

  // Obtener todos los usuarios desde el backend.
  obtenerUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  // Obtener un usuario especifico por su ID.
  obtenerUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo usuario en la base de datos
  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  // Actualizar la inforzacion de un usuario existente
  actualizarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, usuario);
  }

  // Eliminar un usuario de la base de datos.
  eliminarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
