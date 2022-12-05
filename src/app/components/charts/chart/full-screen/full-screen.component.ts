import { AfterViewInit, Component, Inject, OnInit } from "@angular/core";
import { ChartService, Data } from "../../../../services/chart.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-full-screen",
  templateUrl: "./full-screen.component.html",
  styleUrls: ["./full-screen.component.scss"],
})
export class FullScreenComponent implements OnInit, AfterViewInit {
  id = "fullScreenChart";

  constructor(private chart: ChartService, @Inject(MAT_DIALOG_DATA) public data: Data) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.chart.createChart(this.id, this.data.value);
  }
}
