import { Component, OnInit } from "@angular/core";
import { ChartService, UniqueOffices } from "../../services/chart/chart.service";

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.scss"],
})
export class ChartsComponent implements OnInit {
  charts = this.chart;
  uniqueOffices?: Map<number | string, UniqueOffices>;

  constructor(private chart: ChartService) {}

  ngOnInit(): void {
    this.uniqueOffices = this.chart.getUniqueOffices();
  }
}
