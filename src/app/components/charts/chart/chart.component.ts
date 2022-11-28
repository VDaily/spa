import {AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import Chart from 'chart.js/auto';
import {ChartService, UniqueOffices} from "../../../services/chart/chart.service";

import {ModalWindowService} from "../../../services/modalWindow/modal-window.service";
import {FullScreenComponent} from "./full-screen/full-screen.component";
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit {
  @Input() index?: string;
  @Input() office?: UniqueOffices;
  constructor(
    private chart: ChartService,
    private modal: ModalWindowService
  ) {
  }

  ngOnInit(): void {  }

  ngAfterViewInit(): void {
    if(!(this.index && this.office)) return;
    this.chart.createChart(this.index, this.office);
  }

  fullChart():void {
    this.modal.open(FullScreenComponent,  {
      enterAnimationDuration: "0ms",
      exitAnimationDuration: "0ms",
      width: "100%",
      data: {
        id: this.index,
        value: this.office
      },
    });
  }

}
