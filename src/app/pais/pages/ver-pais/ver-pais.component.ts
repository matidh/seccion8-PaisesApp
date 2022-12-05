import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  public pais!: Pais;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params => {
        // console.log(params['id']);
        let id = params['id'];

        this.paisService.getPaisPorId(id).subscribe(
          pais => {
            console.log('resp: ',pais);
            this.pais= pais[0];
            console.log('pais:', this.pais)
          }
        )
      })
    )
  }

}
