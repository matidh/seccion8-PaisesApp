import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  // regiones: string[] = ['EU ', 'EFTA ', 'CARICOM', 'PA', 'AU','USAN', 'EFTA ', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC' ];
  regionActiva: string = '';
  paises: Pais[] = [];
  public hayError: boolean = false;

  constructor( private paisService: PaisService ) { }

  public getClaseCss(region:string):string {
    return (region === this.regionActiva) ? 'btn btn-primary me-2' : 'btn btn-outline-primary me-2';
  }

  public activarRegion(region:string) {
    //decimos que esta variable regionActiva, será igual a la recibida por parámetro
    this.regionActiva = region; 
    // console.log(region)
  }

      
  // TODO: hacer llamada al servicio para traer los paises por region
  public buscarPaises(region: string) {
    //incluimos en el método el que habíamos creado para activar el botón 
    this.activarRegion(region);
    this.paisService.buscarPaisPorRegion(region).subscribe({
      next: (
        (resp) => {
          this.paises = resp;
        }
      ),
      error: (
        (error) => {
          //tenemos que crear en este componente la variable 'hayError'
          this.hayError = true;
          console.log('error')
        }
      )
    })
  }

}
