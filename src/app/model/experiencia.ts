import { NumberFormatStyle } from "@angular/common"

export class Experiencia {
  id?:number;
  nombreE:string;
  descripcionE:string

  
  constructor(nombreE:string,descripcionE:string){
    this.nombreE=nombreE;
    this.descripcionE=descripcionE;
  }
}


