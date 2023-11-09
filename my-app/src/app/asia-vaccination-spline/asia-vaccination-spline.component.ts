import { Component } from '@angular/core';

@Component({
  selector: 'app-asia-vaccination-spline',
  template: `<ejs-chart id="chart-container-vaccination-asia" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip'>
  <e-series-collection>
  <e-series [marker] = 'marker' [dataSource]='chartData1' type='SplineRangeArea' xName='Time' high='Min' low='Max' name='Vaccinations' opacity=0.4 [border]='border'></e-series>
  <e-series [marker] = 'marker' [dataSource]='chartData2' type='SplineRangeArea' xName='Time' high='Min' low='Max' name='ICU Admissions' opacity=0.4 [border]='border' ></e-series>
</e-series-collection>
    </ejs-chart>`,
})
export class AsiaVaccinationSplineComponent {
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
        "Max": 50.92
      },
      {
        "Time": "2020-Qtr2",
        "Min": 0,
        "Max": 67.05
      },
      {
        "Time": "2020-Qtr3",
        "Min": 0.03,
        "Max": 87.37
      },
      {
        "Time": "2020-Qtr4",
        "Min": 0.43,
        "Max": 95.96
      },
      {
        "Time": "2021-Qtr1",
        "Min": 0.88,
        "Max": 101.82
      },
      {
        "Time": "2021-Qtr2",
        "Min": 1.22,
        "Max": 103.72
      },
      {
        "Time": "2021-Qtr3",
        "Min": 1.34,
        "Max": 104.11
      },
      {
        "Time": "2021-Qtr4",
        "Min": 1.99,
        "Max": 105.75
      },
      {
        "Time": "2022-Qtr1",
        "Min": 2.26,
        "Max": 105.82
      },
      {
        "Time": "2022-Qtr2",
        "Min": 2.34,
        "Max": 105.83
      },
      {
        "Time": "2022-Qtr3",
        "Min": 2.37,
        "Max": 90.82
      },
      {
        "Time": "2022-Qtr4",
        "Min": 37.07,
        "Max": 83.06
      }
    ]
    this.chartData2 = [
      {
        "Time": "2020-Qtr1",
        "Min": 1.428,
        "Max": 2.858
      },
      {
        "Time": "2020-Qtr2",
        "Min": 0,
        "Max": 2.829
      },
      {
        "Time": "2020-Qtr3",
        "Min": 0,
        "Max": 26.564
      },
      {
        "Time": "2020-Qtr4",
        "Min": 0.471,
        "Max": 30.162
      },
      {
        "Time": "2021-Qtr1",
        "Min": 1.911,
        "Max": 44.449
      },
      {
        "Time": "2021-Qtr2",
        "Min": 1.376,
        "Max": 35.417
      },
      {
        "Time": "2021-Qtr3",
        "Min": 1.482,
        "Max": 46.938
      },
      {
        "Time": "2021-Qtr4",
        "Min": 0.282,
        "Max": 26.987
      },
      {
        "Time": "2022-Qtr1",
        "Min": 1.234,
        "Max": 38.946
      },
      {
        "Time": "2022-Qtr2",
        "Min": 0.648,
        "Max": 25.07
      },
      {
        "Time": "2022-Qtr3",
        "Min": 1.023,
        "Max": 15.619
      },
      {
        "Time": "2022-Qtr4",
        "Min": 0.943,
        "Max": 13.029
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
      maximum: 150,
      majorTickLines: { width: 0 },
    };
    this.title = 'Asia';
  }
}


