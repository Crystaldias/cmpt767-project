import { Injectable } from '@angular/core';
import * as css from '../../assets/css/css1';

@Injectable({
  providedIn: 'root',
})
export class HeatmapGenerationService {

  constructor() { }

  getDataURL(pointer:any){

    return css[pointer];
  }

  createInternalMovements(canvas:any){
    let returnText = "";
    for(let element of css.css){
        console.log(element, returnText)
        if(element.includes("src")){
            returnText = returnText + ' '+  element.replace("url", this.getDataURL('internalMovements'));
        }else{
            returnText = returnText + ' ' + element;
        }
    }
    return returnText

  }

  createPublicTransportHeatmap(canvas:any){
    let returnText = "";
    for(let element of css.css){
        console.log(element, returnText)
        if(element.includes("src")){
            returnText = returnText + ' '+  element.replace("url", this.getDataURL('createPublicTransport'));
        }else{
            returnText = returnText + ' ' + element;
        }
    }
    return returnText
  }


}