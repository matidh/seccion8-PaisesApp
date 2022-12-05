import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  
  public termino: string = '';
  public resultado: Observable<any> | undefined;
  public hayError: boolean = false;
  public paises: Pais[] = [];

  public placeholder: string = 'Buscar por capital';

  constructor( private paiservice:PaisService ) { }

  public buscar(termino:string): void {
    //cada vez que ejecuto la función se vuelve a poner a false
    this.hayError = false;

    this.termino = termino;
    
    this.paiservice.buscarCapital(termino)
    // tengo que estar suscrito ¿qué voy a recibir? vamos a ponerle respuesta 'resp'
      .subscribe({
        //con next indicamos la devolución de la llamada
        next: (
          (resp) => {            
            this.paises = resp;
            console.log(this.paises);
            let flat = this.paises[0].flag
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
    //creamos una variable sugerencias que será igual al término recibido
    let sugerencia = termino;
    // console.log('termino: ', termino);
    //llamamos a la función buscar y le pasamos esa "sugerencia"
    this.buscar(sugerencia);

  
  }

}
