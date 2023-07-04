import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css'],
})
export class MenupageComponent {
  constructor(
    private param: ActivatedRoute,
    private _service: OrderDetailsService,
    private router: Router
  ) {}
  
 
  getMenuId:any
  menuData:any;
  p:any;
  menuD:any;
  foodData:any;
  specData:any;
  

  porderForm = new FormGroup({
    pusername: new FormControl('', [Validators.required]),
    pusermob: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    puseradd: new FormControl('', [Validators.required],),
    
  });

  
  
  ngOnInit(): void {
    
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    this._service.foodMenu().subscribe((result)=>{
    this.menuData = result;
    },
    err => console.log(err),
    ()=>{
      this.specData = this.menuData.find((x:any) => x.id == this.getMenuId);
      console.log(this.specData);
    }
    )

    console.log(this.getMenuId);

    setTimeout(()=>{
      console.log(this.menuData);
    },5000);
    

    this.specData = this.menuData.find((x:any) => x.id == this.getMenuId);
    console.log(this.specData);
  }

  
  get pusername() {
    return this.porderForm.get('pusername');
  }


  get pusermob() {
    return this.porderForm.get('pusermob');
  }

  get puseradd(){
    return this.porderForm.get('puseradd');
  }

  onSubmit(){
    
    this.router.navigate(['/successpage']);
    this.porderForm.reset();

  }

  
}
