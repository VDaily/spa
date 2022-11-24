import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {ChartService} from "../../../../services/chart/chart.service";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss']
})
export class FullScreenComponent implements OnInit, AfterViewInit {
  constructor(
    private chart: ChartService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.chart.createChart(this.data.id + '1', this.data.value);
  }
}
