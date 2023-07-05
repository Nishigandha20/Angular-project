import { Component, HostListener } from '@angular/core';
//import * as XLSX from 'xlsx';
//import readXlsxFile from 'read-excel-file';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})

export class MenuComponent {
  constructor(private _services: OrderDetailsService) {}
  foodMenuDisplay: any = [];
  p:any;
  ngOnInit(): void {
    this._services.foodMenu().subscribe((data: any) => {
      this.foodMenuDisplay = data;
    });
    

  }
  
}

/*
export class MenuComponent {
  constructor() {}
  foodData: any = [];
  convertedJson!:string;
  onFileChange(event: any) {
    console.log(event.target.files);
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event: any) => {
      console.log(event);
      let binaryData = event.target.result;
      let workbook = XLSX.read(binaryData, { type: 'binary' });
      workbook.SheetNames.forEach((sheet) => {
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
        console.log(data);
        this.convertedJson = JSON.stringify(data, undefined,4)
      });
      console.log(workbook);
    };
  }
}
*/
