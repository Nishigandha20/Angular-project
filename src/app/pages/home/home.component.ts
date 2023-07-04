import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:OrderDetailsService){  }
  foodMenuDisplay:any =[];
  ngOnInit():void{
    this.service.foodMenu().subscribe((data :any)=>{
     this.foodMenuDisplay = data;


    });

}
}
