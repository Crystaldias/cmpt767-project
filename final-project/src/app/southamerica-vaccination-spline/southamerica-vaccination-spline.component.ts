import { Component } from '@angular/core';

@Component({
  selector: 'app-southamerica-vaccination-spline',
  template: `<ejs-chart id="chart-container-vaccination-southamerica" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip'>
  <e-series-collection>
  <e-series [marker] = 'marker' [dataSource]='chartData1' type='SplineRangeArea' xName='Time' high='Min' low='Max' name='Vaccinations' opacity=0.4 [border]='border'></e-series>
  <e-series [marker] = 'marker' [dataSource]='chartData2' type='SplineRangeArea' xName='Time' high='Min' low='Max' name='ICU Admissions' opacity=0.4 [border]='border' ></e-series>
</e-series-collection>
    </ejs-chart>`,
})

export class SouthamericaVaccinationSplineComponent {
  public primaryXAxis?: Object;
  public border?: Object;
  public chartData1?: Object[];
  public chartData2?: Object[];
  public title?: string;
  public primaryYAxis?: Object;
  public marker?: Object;
  public tooltip?: Object;

  ngOnInit(): void {
    this.marker = { visible: true, width: 10, height: 10 };
    this.tooltip = { enable: true }
    this.chartData1 = [
      {
        "Time": "2020-Qtr1",
        "Min": 0,
        "Max": 18.8
      },
      {
        "Time": "2020-Qtr2",
        "Min": 0.01,
        "Max": 55.04
      },
      {
        "Time": "2020-Qtr3",
        "Min": 0.79,
        "Max": 75.72
      },
      {
        "Time": "2020-Qtr4",
        "Min": 21.87,
        "Max": 84.41
      },
      {
        "Time": "2021-Qtr1",
        "Min": 36.52,
        "Max": 88.73
      },
      {
        "Time": "2021-Qtr2",
        "Min": 38.42,
        "Max": 89.68
      },
      {
        "Time": "2021-Qtr3",
        "Min": 49.29,
        "Max": 90.19
      },
      {
        "Time": "2021-Qtr4",
        "Min": 47,
        "Max": 90.27
      },
      {
        "Time": "2022-Qtr1",
        "Min": 47.23,
        "Max": 90.29
      },
      {
        "Time": "2022-Qtr2",
        "Min": 52.28,
        "Max": 84.21
      },
      {
        "Time": "2022-Qtr3",
        "Min": 76.66,
        "Max": 84.81
      },
      {
        "Time": "2022-Qtr4",
        "Min": 76.68,
        "Max": 84.82
      }
    ];
    this.chartData2 = [
      {
        "Time": "2020-Qtr1",
        "Min": 39.839,
        "Max": 136.862
      },
      {
        "Time": "2020-Qtr2",
        "Min": 9.08,
        "Max": 175.103
      },
      {
        "Time": "2020-Qtr3",
        "Min": 4.499,
        "Max": 150.124
      },
      {
        "Time": "2020-Qtr4",
        "Min": 4.581,
        "Max": 36.014
      },
      {
        "Time": "2021-Qtr1",
        "Min": 2.781,
        "Max": 64.711
      },
      {
        "Time": "2021-Qtr2",
        "Min": 1.309,
        "Max": 29.229
      },
      {
        "Time": "2021-Qtr3",
        "Min": 0.818,
        "Max": 10.202
      },
      {
        "Time": "2021-Qtr4",
        "Min": 0.818,
        "Max": 8.111
      },
      {
        "Time": "2022-Qtr1",
        "Min": 3.163,
        "Max": 6.631
      },
      {
        "Time": "2022-Qtr2",
        "Min": 0.408,
        "Max": 4.285
      },
      {
        "Time": "2022-Qtr3",
        "Min": 0.255,
        "Max": 0.663
      },
      {
        "Time": "2022-Qtr4",
        "Min": 0,
        "Max": 0
      }
    ];
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
      maximum: 180,
      majorTickLines: { width: 0 },
    };
    this.title = 'South America';
  }
}

