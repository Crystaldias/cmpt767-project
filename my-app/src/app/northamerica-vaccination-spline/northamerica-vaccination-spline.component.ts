import { Component } from '@angular/core';

@Component({
  selector: 'app-northamerica-vaccination-spline',
  template: `<ejs-chart id="chart-container-vaccination-northamerica" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip'>
  <e-series-collection>
  <e-series [marker] = 'marker' [dataSource]='chartData1' type='SplineRangeArea' xName='Time' high='Min' low='Max' name='Vaccinations' opacity=0.4 [border]='border'></e-series>
  <e-series [marker] = 'marker' [dataSource]='chartData2' type='SplineRangeArea' xName='Time' high='Min' low='Max' name='ICU Admissions' opacity=0.4 [border]='border' ></e-series>
</e-series-collection>
    </ejs-chart>`,
})
export class NorthamericaVaccinationSplineComponent {
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
        "Max": 27.77
      },
      {
        "Time": "2020-Qtr2",
        "Min": 0,
        "Max": 65.18
      },
      {
        "Time": "2020-Qtr3",
        "Min": 0,
        "Max": 74.91
      },
      {
        "Time": "2020-Qtr4",
        "Min": 0.18,
        "Max": 86.27
      },
      {
        "Time": "2021-Qtr1",
        "Min": 0.65,
        "Max": 88.41
      },
      {
        "Time": "2021-Qtr2",
        "Min": 0.99,
        "Max": 88.96
      },
      {
        "Time": "2021-Qtr3",
        "Min": 1.38,
        "Max": 89.13
      },
      {
        "Time": "2021-Qtr4",
        "Min": 1.94,
        "Max": 89.22
      },
      {
        "Time": "2022-Qtr1",
        "Min": 2.06,
        "Max": 89.29
      },
      {
        "Time": "2022-Qtr2",
        "Min": 2.54,
        "Max": 89.41
      },
      {
        "Time": "2022-Qtr3",
        "Min": 26.86,
        "Max": 89.47
      },
      {
        "Time": "2022-Qtr4",
        "Min": 26.88,
        "Max": 79.23
      }
    ]
    this.chartData2 = [
      {
        "Time": "2020-Qtr1",
        "Min": 2.366,
        "Max": 14.147
      },
      {
        "Time": "2020-Qtr2",
        "Min": 1.092,
        "Max": 43.315
      },
      {
        "Time": "2020-Qtr3",
        "Min": 3.355,
        "Max": 82.125
      },
      {
        "Time": "2020-Qtr4",
        "Min": 0,
        "Max": 0
      },
      {
        "Time": "2021-Qtr1",
        "Min": 13.887,
        "Max": 85.403
      },
      {
        "Time": "2021-Qtr2",
        "Min": 9.362,
        "Max": 36.069
      },
      {
        "Time": "2021-Qtr3",
        "Min": 4.161,
        "Max": 77.15
      },
      {
        "Time": "2021-Qtr4",
        "Min": 10.922,
        "Max": 56.969
      },
      {
        "Time": "2022-Qtr1",
        "Min": 5.761,
        "Max": 78.211
      },
      {
        "Time": "2022-Qtr2",
        "Min": 3.901,
        "Max": 11.91
      },
      {
        "Time": "2022-Qtr3",
        "Min": 4.317,
        "Max": 14.304
      },
      {
        "Time": "2022-Qtr4",
        "Min": 5.851,
        "Max": 14.204
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
    this.title = 'North America';
  }
}



