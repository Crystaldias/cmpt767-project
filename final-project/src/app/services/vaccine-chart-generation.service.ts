import { Injectable } from '@angular/core';
import * as css from '../../assets/css/css1';

@Injectable({
  providedIn: 'root',
})
export class VaccineChartGenerationService {

  constructor() { }

  getDataURL(pointer:any){

    return css[pointer];
  }

  createVaccineChart(canvas:any){
    let returnText = "";
    for(let element of css.css){
        console.log(element, returnText)
        if(element.includes("src")){
            returnText = returnText + ' '+  element.replace("url", this.getDataURL('vaccineChart'));
        }else{
            returnText = returnText + ' ' + element;
        }
    }
    return returnText

  }

  createCovidVaccineAgeChart(canvas:any){
    let returnText = "";
    for(let element of css.css){
        console.log(element, returnText)
        if(element.includes("src")){
            returnText = returnText + ' '+  element.replace("url", this.getDataURL('covidVaccineAge'));
        }else{
            returnText = returnText + ' ' + element;
        }
    }
    return returnText
  }

  createyoungestAgeCovidVaccinationChart(canvas: any){
    let returnText = "";
    for(let element of css.css){
        console.log(element, returnText)
        if(element.includes("src")){
            returnText = returnText + ' '+  element.replace("url", this.getDataURL('youngestAgeCovidVaccination'));
        }else{
            returnText = returnText + ' ' + element;
        }
    }
    return returnText
  }

}