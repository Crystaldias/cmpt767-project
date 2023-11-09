import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeatmapGenerationService } from 'app/services/heatmap.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private heatmapGenerationService: HeatmapGenerationService) { }

  @ViewChild('canvas1') canvas1: ElementRef;
  @ViewChild('canvas2') canvas2: ElementRef;


  ngOnInit() {
  }

  ngAfterViewInit(){
    // this.canvas.nativeElement.insertAdjacentHTML("beforeEnd", '<iframe src="../../assets/owid-covid-data.html" loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>')
    this.canvas1.nativeElement.insertAdjacentHTML("beforeEnd", this.heatmapGenerationService.createInternalMovements(this.canvas1));
    this.canvas2.nativeElement.insertAdjacentHTML("beforeEnd", this.heatmapGenerationService.createPublicTransportHeatmap(this.canvas2));


  }

}
