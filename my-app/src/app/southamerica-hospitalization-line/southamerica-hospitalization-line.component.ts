import { Component } from '@angular/core';

// South America
@Component({
  selector: 'app-southamerica-hospitalization-line',
  template: `<ejs-chart id="chart-container-southamerica" [tooltip]='tooltip' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [legendSettings]='legendSettings' [title]='title'>
      <e-series-collection>
      <e-series [dataSource]='chartData1' [marker] = 'marker' type='Line' xName='Time' yName='SumOfHospitalized' name='Hospitalizations' width=3 fill = 'red'></e-series>
      <e-series [dataSource]='chartData2' [marker] = 'marker' type='Line' xName='Time' yName='SumOfVaccinated' name='Vaccinations' width=3 fill = 'blue'></e-series>
      </e-series-collection>
  </ejs-chart>`
})
export class SouthamericaHospitalizationLineComponent {
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
        "SumOfHospitalized": 0
      },
      {
        "Time": "2020-Qtr3",
        "SumOfHospitalized": 0
      },
      {
        "Time": "2020-Qtr4",
        "SumOfHospitalized": 0
      },
      {
        "Time": "2021-Qtr1",
        "SumOfHospitalized": 0
      },
      {
        "Time": "2021-Qtr2",
        "SumOfHospitalized": 8840.147
      },
      {
        "Time": "2021-Qtr3",
        "SumOfHospitalized": 6765.561
      },
      {
        "Time": "2021-Qtr4",
        "SumOfHospitalized": 4890.984
      },
      {
        "Time": "2022-Qtr1",
        "SumOfHospitalized": 6287.82
      },
      {
        "Time": "2022-Qtr2",
        "SumOfHospitalized": 1338.091
      },
      {
        "Time": "2022-Qtr3",
        "SumOfHospitalized": 1943.699
      },
      {
        "Time": "2022-Qtr4",
        "SumOfHospitalized": 101.03
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
        "SumOfVaccinated": 484.91
      },
      {
        "Time": "2021-Qtr2",
        "SumOfVaccinated": 8516.12
      },
      {
        "Time": "2021-Qtr3",
        "SumOfVaccinated": 27346.27
      },
      {
        "Time": "2021-Qtr4",
        "SumOfVaccinated": 45005.65
      },
      {
        "Time": "2022-Qtr1",
        "SumOfVaccinated": 50715.31
      },
      {
        "Time": "2022-Qtr2",
        "SumOfVaccinated": 49283.63
      },
      {
        "Time": "2022-Qtr3",
        "SumOfVaccinated": 44444.02
      },
      {
        "Time": "2022-Qtr4",
        "SumOfVaccinated": 36474.63
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
      }
    };
    this.legendSettings = {
      visible: true
    };
    this.title = 'South America';
    this.marker = {
      dataLabel: {
        visible: true
      }, visible: true, width: 10, height: 10
    };
  }
}
