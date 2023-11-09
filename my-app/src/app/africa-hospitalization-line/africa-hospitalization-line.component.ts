import { Component } from '@angular/core';

// AFRICA
@Component({
  selector: 'app-africa-hospitalization-line',
  template: `<ejs-chart id="chart-container-africa" [tooltip]='tooltip' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [legendSettings]='legendSettings' [title]='title'>
      <e-series-collection>
      <e-series [dataSource]='chartData1' [marker] = 'marker' type='Line' xName='Time' yName='SumOfHospitalized' name='Hospitalizations' width=3 fill = 'red'></e-series>
      <e-series [dataSource]='chartData2' [marker] = 'marker' type='Line' xName='Time' yName='SumOfVaccinated' name='Vaccinations' width=3 fill = 'blue'></e-series>
      </e-series-collection>
  </ejs-chart>`
})
export class AfricaHospitalizationLineComponent {
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
      {
        "Time": "2020-Qtr1",
        "SumOfHospitalized": 0
      },
      {
        "Time": "2020-Qtr2",
        "SumOfHospitalized": 1744.397
      },
      {
        "Time": "2020-Qtr3",
        "SumOfHospitalized": 11170.955
      },
      {
        "Time": "2020-Qtr4",
        "SumOfHospitalized": 8733.713
      },
      {
        "Time": "2021-Qtr1",
        "SumOfHospitalized": 15407.864
      },
      {
        "Time": "2021-Qtr2",
        "SumOfHospitalized": 8570.138
      },
      {
        "Time": "2021-Qtr3",
        "SumOfHospitalized": 20480.773
      },
      {
        "Time": "2021-Qtr4",
        "SumOfHospitalized": 7657.339
      },
      {
        "Time": "2022-Qtr1",
        "SumOfHospitalized": 7205.449
      },
      {
        "Time": "2022-Qtr2",
        "SumOfHospitalized": 3668.234
      },
      {
        "Time": "2022-Qtr3",
        "SumOfHospitalized": 630.998
      },
      {
        "Time": "2022-Qtr4",
        "SumOfHospitalized": 0
      }
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
        "SumOfVaccinated": 650.23
      },
      {
        "Time": "2021-Qtr2",
        "SumOfVaccinated": 2691.2
      },
      {
        "Time": "2021-Qtr3",
        "SumOfVaccinated": 6746.53
      },
      {
        "Time": "2021-Qtr4",
        "SumOfVaccinated": 13604.03
      },
      {
        "Time": "2022-Qtr1",
        "SumOfVaccinated": 14763.19
      },
      {
        "Time": "2022-Qtr2",
        "SumOfVaccinated": 11563.93
      },
      {
        "Time": "2022-Qtr3",
        "SumOfVaccinated": 12642.97
      },
      {
        "Time": "2022-Qtr4",
        "SumOfVaccinated": 10583.93
      }
    ]
    this.primaryXAxis = {
      valueType: 'Category'
    };
    this.primaryYAxis = {
      labelFormat: '{value}'
    };
    this.marker = {
      dataLabel: {
        visible: true
      }, visible: true, width: 10, height: 10
    };
    this.legendSettings = {
      visible: true
    };
    this.title = 'Africa';
  }
}
