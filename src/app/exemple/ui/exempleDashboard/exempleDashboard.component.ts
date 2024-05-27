import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExempleService } from '../../services/exemple.service';
import { ExempleModel } from '../../datas/model/exemple.model';

@Component({
  selector: 'exemple',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './exempleDashboard.component.html',
  styleUrl: './exempleDashboard.component.scss'
})
export class ExempleDashboardComponent {
  title = 'AMAC';
  exemple!: ExempleModel;

  constructor( private exempleService: ExempleService ){}

  ngOnInit() {
    this.exempleService.exemple.subscribe( (exemple: ExempleModel) => {
      this.exemple = exemple;
    })
  }

}
