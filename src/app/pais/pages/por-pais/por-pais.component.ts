import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  public termino: string = '';
  public resultado: Observable<any> | undefined;
  public hayError: boolean = false;
  public paises: Pais[] = [];
  public paisesSugeridos: Pais[] = [];
  public mostrarSugerencias: boolean = false;

  public placeholder: string = 'Buscar pais...';

  constructor( private paiservice:PaisService ) { }

  public buscar(termino:string): void {
    //cada vez que ejecuto la función se vuelve a poner a false
    this.hayError = false;
    this.termino = termino;

    this.paiservice.buscarPais(termino)
    // tengo que estar suscrito ¿qué voy a recibir? vamos a ponerle respuesta 'resp'
      .subscribe({
        //con next indicamos la devolución de la llamada
        next: (
          (resp) => {
            this.paises = resp;
            console.log(this.paises);
            let flag = this.paises[0].flag
          }
        ),
        // con error, qué hacer en caso de error en la llamada
        error: ((error) => {
          //en caso de error se pone true
          this.hayError = true;
          console.log('Error');
          console.log(error)
        })
      })
  }

  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paiservice.buscarPais( termino ).subscribe({
      next:(
        (paises) => {
          // console.log(paises)
          this.paisesSugeridos = paises.splice(0,3);
        }
      ),
      error:(
        (error) => {
          // vaciamos el array de paisesSugeridos
          this.paisesSugeridos = [];
          console.log('error')
        }
      )
    })
  }



}
