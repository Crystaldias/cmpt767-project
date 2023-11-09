import { Component } from '@angular/core';

@Component({
  selector: 'app-europe-vaccination-spline',
  template: `<ejs-chart id="chart-container-vaccination-europe" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip'>
  <e-series-collection>
  <e-series [marker] = 'marker' [dataSource]='chartData1' type='SplineRangeArea' xName='Time' high='Min' low='Max' name='Vaccinations' opacity=0.4 [border]='border'></e-series>
  <e-series [marker] = 'marker' [dataSource]='chartData2' type='SplineRangeArea' xName='Time' high='Min' low='Max' name='ICU Admissions' opacity=0.4 [border]='border' ></e-series>
</e-series-collection>
    </ejs-chart>`,
})
export class EuropeVaccinationSplineComponent {
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
        "Max": 87.3
      },
      {
        "Time": "2020-Qtr2",
        "Min": 0,
        "Max": 118.9
      },
      {
        "Time": "2020-Qtr3",
        "Min": 1.93,
        "Max": 121.23
      },
      {
        "Time": "2020-Qtr4",
        "Min": 14.49,
        "Max": 122.61
      },
      {
        "Time": "2021-Qtr1",
        "Min": 26.07,
        "Max": 126.42
      },
      {
        "Time": "2021-Qtr2",
        "Min": 30.24,
        "Max": 126.76
      },
      {
        "Time": "2021-Qtr3",
        "Min": 30.4,
        "Max": 88.29
      },
      {
        "Time": "2021-Qtr4",
        "Min": 30.55,
        "Max": 126.89
      },
      {
        "Time": "2022-Qtr1",
        "Min": 30.59,
        "Max": 88.41
      },
      {
        "Time": "2022-Qtr2",
        "Min": 30.62,
        "Max": 88.42
      },
      {
        "Time": "2022-Qtr3",
        "Min": 30.64,
        "Max": 88.42
      },
      {
        "Time": "2022-Qtr4",
        "Min": 30.64,
        "Max": 88.42
      }
    ];
    this.chartData2 = [
      {
        "Time": "2020-Qtr1",
        "Min": 0,
        "Max": 93.343
      },
      {
        "Time": "2020-Qtr2",
        "Min": 0,
        "Max": 110.33
      },
      {
        "Time": "2020-Qtr3",
        "Min": 0,
        "Max": 32.823
      },
      {
        "Time": "2020-Qtr4",
        "Min": 0.722,
        "Max": 126.459
      },
      {
        "Time": "2021-Qtr1",
        "Min": 2.707,
        "Max": 180.675
      },
      {
        "Time": "2021-Qtr2",
        "Min": 0,
        "Max": 143.511
      },
      {
        "Time": "2021-Qtr3",
        "Min": 0,
        "Max": 63.616
      },
      {
        "Time": "2021-Qtr4",
        "Min": 0,
        "Max": 136.331
      },
      {
        "Time": "2022-Qtr1",
        "Min": 0,
        "Max": 92.156
      },
      {
        "Time": "2022-Qtr2",
        "Min": 0,
        "Max": 31.997
      },
      {
        "Time": "2022-Qtr3",
        "Min": 0,
        "Max": 19.51
      },
      {
        "Time": "2022-Qtr4",
        "Min": 0,
        "Max": 22.094
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
      maximum: 190,
      majorTickLines: { width: 0 },
    };
    this.title = 'Europe';
  }
}


