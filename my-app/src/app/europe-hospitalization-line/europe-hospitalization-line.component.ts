
import { Component } from '@angular/core';

// EUROPE
@Component({
  selector: 'app-europe-hospitalization-line',
  template: `<ejs-chart id="chart-container-europe" [tooltip]='tooltip' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [legendSettings]='legendSettings' [title]='title'>
      <e-series-collection>
      <e-series [dataSource]='chartData1' [marker] = 'marker' type='Line' xName='Time' yName='SumOfHospitalized' name='Hospitalizations' width=3 fill = 'red'></e-series>
      <e-series [dataSource]='chartData2' [marker] = 'marker' type='Line' xName='Time' yName='SumOfVaccinated' name='Vaccinations' width=3 fill = 'blue'></e-series>
      </e-series-collection>
  </ejs-chart>`
})
export class EuropeHospitalizationLineComponent {
  public primaryXAxis?: Object;
  public chartData1?: Object[];
  public chartData2?: Object[]; public primaryYAxis?: Object;
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
        "SumOfHospitalized": 22278.723
      },
      {
        "Time": "2020-Qtr2",
        "SumOfHospitalized": 220305.487
      },
      {
        "Time": "2020-Qtr3",
        "SumOfHospitalized": 90890.27
      },
      {
        "Time": "2020-Qtr4",
        "SumOfHospitalized": 634916.899
      },
      {
        "Time": "2021-Qtr1",
        "SumOfHospitalized": 740584.114
      },
      {
        "Time": "2021-Qtr2",
        "SumOfHospitalized": 398070.714
      },
      {
        "Time": "2021-Qtr3",
        "SumOfHospitalized": 197101.266
      },
      {
        "Time": "2021-Qtr4",
        "SumOfHospitalized": 549797.837
      },
      {
        "Time": "2022-Qtr1",
        "SumOfHospitalized": 599397.547
      },
      {
        "Time": "2022-Qtr2",
        "SumOfHospitalized": 244744.352
      },
      {
        "Time": "2022-Qtr3",
        "SumOfHospitalized": 236907.103
      },
      {
        "Time": "2022-Qtr4",
        "SumOfHospitalized": 228024.528
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
        "SumOfVaccinated": 0.01
      },
      {
        "Time": "2021-Qtr1",
        "SumOfVaccinated": 7880.95
      },
      {
        "Time": "2021-Qtr2",
        "SumOfVaccinated": 54627.29
      },
      {
        "Time": "2021-Qtr3",
        "SumOfVaccinated": 140954.2
      },
      {
        "Time": "2021-Qtr4",
        "SumOfVaccinated": 171867.67
      },
      {
        "Time": "2022-Qtr1",
        "SumOfVaccinated": 180486.55
      },
      {
        "Time": "2022-Qtr2",
        "SumOfVaccinated": 157168.32
      },
      {
        "Time": "2022-Qtr3",
        "SumOfVaccinated": 135922.28
      },
      {
        "Time": "2022-Qtr4",
        "SumOfVaccinated": 114910.68
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
    this.title = 'Europe';

  }
}
