import { Injectable } from '@angular/core'; // Módulo que nos permitirá ( importar el servicio como una dependencia en el componente)
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class UserService {
  apiURL = 'http://localhost:3000/api';
  constructor(
    private http: HttpClient
  ) { }

  /**
   * @param userParams: Parametro que recibe todos los valores que vienen desde nuestro componente.
   * Método encargado de enviar los datos ingresados en el formulario hasta la API creada en express.
   */
  signUp(userParams) {
    const params = JSON.stringify(userParams); // Creamos una nueva variable la cual contendrá los parametros del usuario.
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; // Enviaremos los datos en un JSON.
    return this.http.post(
      this.apiURL + '/createUser', // Esta es la ruta que tenemos configurado en la API.
      params,
      options
    ).pipe(res => res);
  }

  login(userParams) {
    const params = JSON.stringify(userParams);
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(
      this.apiURL + '/loginUser',
      params,
      options
    ).pipe(res => res);
  }

  updateUser(userParams) {
    const params = JSON.stringify(userParams);
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(
      `${this.apiURL}/updateUser/${userParams._id}`,
      params,
      options
    ).pipe(res => res);
  }

  getAllUsers() {
    const options = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
    return this.http.get(
      `${this.apiURL}/getUsers`,
      options
    ).pipe(res => res);
  }

  removeUser(idUser) {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete(
      `${this.apiURL}/removeUser/${idUser}`,
      options
    ).pipe(res => res);
  }

  loadImage(file: File, idUser) {
    const formData = new FormData();
    formData.append('imagen', file);
    return this.http.post(
      `${this.apiURL}/loadImage/${idUser}`,
      formData
    ).pipe(res => res);
  }
}
