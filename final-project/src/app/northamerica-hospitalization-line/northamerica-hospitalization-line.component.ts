import { Component } from '@angular/core';

// NorthAmerica
@Component({
  selector: 'app-northamerica-hospitalization-line',
  template: `<ejs-chart id="chart-container-northamerica" [tooltip]='tooltip' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [legendSettings]='legendSettings' [title]='title'>
      <e-series-collection>
      <e-series [dataSource]='chartData1' [marker] = 'marker' type='Line' xName='Time' yName='SumOfHospitalized' name='Hospitalizations' width=3 fill = 'red'></e-series>
      <e-series [dataSource]='chartData2' [marker] = 'marker' type='Line' xName='Time' yName='SumOfVaccinated' name='Vaccinations' width=3 fill = 'blue'></e-series>

      </e-series-collection>
  </ejs-chart>`
})
export class NorthamericaHospitalizationLineComponent {
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
        "SumOfHospitalized": 4829.599
      },
      {
        "Time": "2020-Qtr3",
        "SumOfHospitalized": 9130.046
      },
      {
        "Time": "2020-Qtr4",
        "SumOfHospitalized": 24559.794
      },
      {
        "Time": "2021-Qtr1",
        "SumOfHospitalized": 26893.305
      },
      {
        "Time": "2021-Qtr2",
        "SumOfHospitalized": 14075.646
      },
      {
        "Time": "2021-Qtr3",
        "SumOfHospitalized": 19926.598
      },
      {
        "Time": "2021-Qtr4",
        "SumOfHospitalized": 19557.645
      },
      {
        "Time": "2022-Qtr1",
        "SumOfHospitalized": 36171.057
      },
      {
        "Time": "2022-Qtr2",
        "SumOfHospitalized": 17266.963
      },
      {
        "Time": "2022-Qtr3",
        "SumOfHospitalized": 20624.517
      },
      {
        "Time": "2022-Qtr4",
        "SumOfHospitalized": 20898.488
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
        "SumOfVaccinated": 0.1
      },
      {
        "Time": "2021-Qtr1",
        "SumOfVaccinated": 1185.66
      },
      {
        "Time": "2021-Qtr2",
        "SumOfVaccinated": 16917.91
      },
      {
        "Time": "2021-Qtr3",
        "SumOfVaccinated": 45061.78
      },
      {
        "Time": "2021-Qtr4",
        "SumOfVaccinated": 58253.8
      },
      {
        "Time": "2022-Qtr1",
        "SumOfVaccinated": 63072.67
      },
      {
        "Time": "2022-Qtr2",
        "SumOfVaccinated": 52267.31
      },
      {
        "Time": "2022-Qtr3",
        "SumOfVaccinated": 50975.82
      },
      {
        "Time": "2022-Qtr4",
        "SumOfVaccinated": 35172.71
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
    this.title = 'North America';
    this.marker = {
      dataLabel: {
        visible: true
      }, visible: true, width: 10, height: 10
    };
  }
}