import { Component } from '@angular/core';

// ASIA
@Component({
  selector: 'app-asia-hospitalization-line',
  template: `<ejs-chart id="chart-container-asia" [tooltip]='tooltip' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [legendSettings]='legendSettings' [title]='title'>
      <e-series-collection>
      <e-series [dataSource]='chartData1' [marker] = 'marker' type='Line' xName='Time' yName='SumOfHospitalized' name='Hospitalizations' width=3 fill = 'red'></e-series>
      <e-series [dataSource]='chartData2' [marker] = 'marker' type='Line' xName='Time' yName='SumOfVaccinated' name='Vaccinations' width=3 fill = 'blue'></e-series>

      </e-series-collection>
  </ejs-chart>`
})
export class AsiaHospitalizationLineComponent {
  public primaryXAxis?: Object;
  public chartData1?: Object[];
  public chartData2?: Object[];

  public primaryYAxis?: Object;
  public legendSettings?: Object;
  public tooltip?: Object;
  public title?: string;
  public marker?: Object;
  ngOnInit(): void {
    // Tooltip for chart
    this.tooltip = {
      enable: true
    }
    this.chartData1 = [
      { Time: "2020-Qtr1", SumOfHospitalized: 1154.385 },
      { Time: "2020-Qtr2", SumOfHospitalized: 5284.576 },
      { Time: "2020-Qtr3", SumOfHospitalized: 10676.639 },
      { Time: "2020-Qtr4", SumOfHospitalized: 16428.39 },
      { Time: "2021-Qtr1", SumOfHospitalized: 24725.773 },
      { Time: "2021-Qtr2", SumOfHospitalized: 16218.807 },
      { Time: "2021-Qtr3", SumOfHospitalized: 41115.622 },
      { Time: "2021-Qtr4", SumOfHospitalized: 16479.596 },
      { Time: "2022-Qtr1", SumOfHospitalized: 35135.023 },
      { Time: "2022-Qtr2", SumOfHospitalized: 12096.648 },
      { Time: "2022-Qtr3", SumOfHospitalized: 18373.628 },
      { Time: "2022-Qtr4", SumOfHospitalized: 11691.692 }
    ];;

    this.chartData2 = [
      {
        "Time": "2020-Qtr1",
        "SumOfVaccinated": 0
      },
      {
        "Time": "2020-Qtr2",
        "SumOfVaccinated": 0
      },
      {
        "Time": "2020-Qtr3",
        "SumOfVaccinated": 0
      },
      {
        "Time": "2020-Qtr4",
        "SumOfVaccinated": 0
      },
      {
        "Time": "2021-Qtr1",
        "SumOfVaccinated": 3268.66
      },
      {
        "Time": "2021-Qtr2",
        "SumOfVaccinated": 24698.52
      },
      {
        "Time": "2021-Qtr3",
        "SumOfVaccinated": 78972.54
      },
      {
        "Time": "2021-Qtr4",
        "SumOfVaccinated": 125697.63
      },
      {
        "Time": "2022-Qtr1",
        "SumOfVaccinated": 139547.83
      },
      {
        "Time": "2022-Qtr2",
        "SumOfVaccinated": 122894.13
      },
      {
        "Time": "2022-Qtr3",
        "SumOfVaccinated": 103991.59
      },
      {
        "Time": "2022-Qtr4",
        "SumOfVaccinated": 79377.69
      }
    ];;
    this.primaryXAxis = {
      valueType: 'Category'
    };
    this.primaryYAxis = {
      labelFormat: '{value}'
    };
    this.marker = {
      dataLabel: {
        visible: true
      }
    };
    this.legendSettings = {
      visible: true
    };
    this.title = 'Asia';
    this.marker = {
      dataLabel: {
        visible: true
      }, visible: true, width: 10, height: 10
    };
  }

}
