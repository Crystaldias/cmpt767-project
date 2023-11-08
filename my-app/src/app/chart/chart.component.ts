import { Component } from '@angular/core';

// ASIA
@Component({
  selector: 'app-chart',
  template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [legendSettings]='legendSettings' [title]='title'=>
      <e-series-collection>
          <e-series [dataSource]='chartData' type='StepLine' xName='Time' yName='SumOfHospitalized' name='Hospitalizations' width=3></e-series>
      </e-series-collection>
  </ejs-chart>`
})
export class ChartComponent {
  public primaryXAxis?: Object;
  public chartData?: Object[];
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
    this.chartData = [
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
  }
}
