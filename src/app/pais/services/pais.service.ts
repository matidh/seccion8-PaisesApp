import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient) { }

  buscarPais(termino:string) : Observable<Pais[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    // ahora podemos hacer la petición get de http y devolver esta información    
    let resultado = this.http.get<Pais[]>(url);
    return resultado;
  }

  buscarCapital(termino:string) : Observable<Pais[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    let resultado = this.http.get<Pais[]>(url);
    return resultado;
  }

  // retorna un array de Paises (con un solo pais)
  getPaisPorId(id:string) : Observable<Pais[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    let resultado = this.http.get<Pais[]>(url);
    return resultado;
  }

  //Retornará un array de Paises (tipo Pais)
  buscarPaisPorRegion(region:string): Observable<Pais[]> {
    const url = `${this.apiUrl}/region/${region}`;
    let resultado = this.http.get<Pais[]>(url)
    return resultado;
  }


}
