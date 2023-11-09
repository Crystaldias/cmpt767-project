import { Component } from '@angular/core';

@Component({
  selector: 'app-africa-vaccination-spline',
  template: `<ejs-chart id="chart-container-vaccination" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip'>
        <e-series-collection>
            <e-series [marker] = 'marker' [dataSource]='chartData1' type='SplineRangeArea' xName='Time' high='Min' low='Max' name='Vaccinations' opacity=0.4 [border]='border'></e-series>
            <e-series [marker] = 'marker' [dataSource]='chartData2' type='SplineRangeArea' xName='Time' high='Min' low='Max' name='ICU Admissions' opacity=0.4 [border]='border' ></e-series>
        </e-series-collection>
    </ejs-chart>`,
})
export class AfricaVaccinationSplineComponent {
  public primaryXAxis?: Object;
  public border?: Object;
  public chartData1?: Object[];
  public chartData2?: Object[];
  public title?: string;
  public primaryYAxis?: Object;
  public tooltip?: Object;
  public marker?: Object;


  ngOnInit(): void {
    this.marker = { visible: true, width: 10, height: 10 };
    this.tooltip = { enable: true }

    this.chartData1 = [
      {
        "Time": "2020-Qtr1",
        "Min": 0,
        "Max": 34.41
      },
      {
        "Time": "2020-Qtr2",
        "Min": 0,
        "Max": 65.38
      },
      {
        "Time": "2020-Qtr3",
        "Min": 0,
        "Max": 66.36
      },
      {
        "Time": "2020-Qtr4",
        "Min": 0,
        "Max": 73.05
      },
      {
        "Time": "2021-Qtr1",
        "Min": 0.05,
        "Max": 74.81
      },
      {
        "Time": "2021-Qtr2",
        "Min": 0.08,
        "Max": 75.35
      },
      {
        "Time": "2021-Qtr3",
        "Min": 0.12,
        "Max": 75.88
      },
      {
        "Time": "2021-Qtr4",
        "Min": 0.16,
        "Max": 83.74
      },
      {
        "Time": "2022-Qtr1",
        "Min": 0.23,
        "Max": 83.74
      },
      {
        "Time": "2022-Qtr2",
        "Min": 0.26,
        "Max": 83.74
      },
      {
        "Time": "2022-Qtr3",
        "Min": 0.28,
        "Max": 83.74
      },
      {
        "Time": "2022-Qtr4",
        "Min": 11.45,
        "Max": 39.16
      }
    ]
    this.chartData2 = [
      {
        "Time": "2020-Qtr1",
        "Min": 0,
        "Max": 0.117
      },
      {
        "Time": "2020-Qtr2",
        "Min": 0.117,
        "Max": 12.038
      },
      {
        "Time": "2020-Qtr3",
        "Min": 0.49,
        "Max": 44.98
      },
      {
        "Time": "2020-Qtr4",
        "Min": 0.468,
        "Max": 31.105
      },
      {
        "Time": "2021-Qtr1",
        "Min": 0.156,
        "Max": 41.256
      },
      {
        "Time": "2021-Qtr2",
        "Min": 0.267,
        "Max": 34.578
      },
      {
        "Time": "2021-Qtr3",
        "Min": 0.29,
        "Max": 41.657
      },
      {
        "Time": "2021-Qtr4",
        "Min": 0.2,
        "Max": 15.427
      },
      {
        "Time": "2022-Qtr1",
        "Min": 0.111,
        "Max": 12.372
      },
      {
        "Time": "2022-Qtr2",
        "Min": 0,
        "Max": 6.044
      },
      {
        "Time": "2022-Qtr3",
        "Min": 0,
        "Max": 3.89
      },
      {
        "Time": "2022-Qtr4",
        "Min": 0,
        "Max": 0.067
      }
    ]
    this.border = {
      width: 2,
      color: 'brown',
    };
    this.primaryXAxis = {
      valueType: 'Category',
      edgeLabelPlacement: 'Shift',
      majorGridLines: { width: 0 },
    };
    this.primaryYAxis = {
      labelFormat: '{value}',
      lineStyle: { width: 0 },
      minimum: 0,
      maximum: 150,
      majorTickLines: { width: 0 },
    };
    this.title = 'Africa';


  }
}
