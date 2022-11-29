import { Injectable } from "@angular/core";
import offices from "../../json/offices.json";
import Chart from "chart.js/auto";

export interface UniqueOffices {
  id: number | string;
  datasets: Sets[];
  dates: string[];
  officeName: string;
}

export interface Sets {
  label: string;
  data: number[];
}

export interface Office {
  src_office_id: number;
  office_name: string;
  dt_date: string;

  [key: string | number]: any;
}

export interface Data {
  id: string;
  value: UniqueOffices;
}

@Injectable({
  providedIn: "root",
})
export class ChartService {
  myOffices = JSON.parse(JSON.stringify(offices));
  mainProperties = ["src_office_id", "office_name", "dt_date"];

  constructor() {}

  // Creates and returns an array of objects for datasets
  createDatasets(): Sets[] {
    let datasets = [];

    for (let key of Object.keys(this.myOffices[0])) {
      if (!this.mainProperties.includes(key)) {
        datasets.push({
          label: key.replace("qty_", ""),
          data: [],
          borderWidth: 1,
          pointRadius: 2,
          tension: 0.4,
        });
      }
    }
    return datasets;
  }

  // Creating and returns an array of property names
  getNameSecondaryProperties(): string[] {
    let nameSecondaryProperties = [];
    for (let key of Object.keys(this.myOffices[0])) {
      if (!this.mainProperties.includes(key)) {
        nameSecondaryProperties.push(key);
      }
    }
    return nameSecondaryProperties;
  }

  createOfficeObj(id: number | string, name: string): UniqueOffices {
    return {
      id: id,
      officeName: name,
      dates: [],
      datasets: this.createDatasets(),
    };
  }

  getUniqueOffices(): Map<number | string, UniqueOffices> {
    const uniqueOfficesMap = new Map<number | string, UniqueOffices>();
    const nameSecondaryProperties = this.getNameSecondaryProperties();
    const uniqueDatesMap = new Map<string, Sets[]>();
    console.log(uniqueDatesMap);
    const indexFullStatistic = "FullStatistic";
    const fullStatistic = this.createOfficeObj(indexFullStatistic, "Statistic of all offices");

    this.myOffices.forEach((office: Office) => {
      // Filling in a unique ID
      if (!uniqueOfficesMap.has(office.src_office_id)) {
        uniqueOfficesMap.set(office.src_office_id, this.createOfficeObj(office.src_office_id, office.office_name));
      }
      // Filling in a unique date
      if (!uniqueDatesMap.has(office.dt_date)) {
        uniqueDatesMap.set(office.dt_date, this.createDatasets());
      }

      let currentObj = uniqueOfficesMap.get(office.src_office_id);
      let datasetsByDate = uniqueDatesMap.get(office.dt_date);
      if (!currentObj || !datasetsByDate) return;

      currentObj.dates.push(office.dt_date);

      //Adding only unique dates to the array of dates
      if (!fullStatistic.dates.includes(office.dt_date)) {
        fullStatistic.dates.push(office.dt_date);
      }

      //Adding values to the Datasets array
      nameSecondaryProperties.forEach((name: string, index) => {
        if (!(currentObj && datasetsByDate)) return;
        currentObj.datasets[index].data.push(office[name]);
        datasetsByDate[index].data.push(office[name]);
      });
    });

    uniqueDatesMap.forEach((currentDataset: Sets[]) => {
      nameSecondaryProperties.forEach((name: string, index) => {
        let sum = currentDataset[index].data.reduce((sum: number, currentValue) => sum + currentValue, 0);
        fullStatistic.datasets[index].data.push(sum);
      });
    });

    uniqueOfficesMap.set(indexFullStatistic, fullStatistic);
    return uniqueOfficesMap;
  }

  createChart(index: string, officeObj: UniqueOffices): Chart {
    const sets = officeObj.datasets.map((sets: Sets) => sets),
      officeName = officeObj.officeName ? officeObj.officeName : `Офис без имени`,
      labelsArr = officeObj.dates.map((date: string) => date);

    return new Chart(`${index}`, {
      type: "line",
      data: {
        labels: labelsArr,
        datasets: sets,
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: officeName,
          },
        },
      },
    });
  }
}
