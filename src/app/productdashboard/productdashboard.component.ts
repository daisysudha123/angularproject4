import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdetailsService } from '../productdetails.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrls: ['./productdashboard.component.css']
})
export class ProductdashboardComponent implements OnInit {
  // id: any;
  // name: any;
  // brand: any;
  // price: any;
  // isLoading:false|any

  constructor( private daisy:ProductdetailsService,
    private route:Router) { }


  ngOnInit(): void {
    // this.isLoading=true;
  }
//   addTheProduct(){
//     let newObj ={
//       id:this.id,
//       productName:this.name,
//       productBrand:this.brand,
//       productPrice:this.price
//     }
//     console.log(newObj);
    
//     this.daisy.getAllProducts(newObj).subscribe((res:any)=>{
//       console.log(res);
      
//     })
//   }

//   updateTheProduct(){
//     let newObj ={
//       id:this.id,
//       productName:this.name,
//       productBrand:this.brand,
//       productPrice:this.price
//     }
//     console.log(newObj);
    
//     this.daisy.putProducts(this.id,newObj).subscribe((res:any)=>{
//       console.log(res);
      
//     })
//   }
//   deleteTheProduct(){
//     this.daisy.deleteProducts(this.id).subscribe((res:any)=>{
//       console.log(res);
      

//     })
//   }
//   onSubmit(form:NgForm){
//     // this.isLoading = true; 
//     this.daisy.onRegister(form.value).subscribe((res:any) => {
//       console.log(res);
      
//     //   this.isLoading = false;
//     //   this.message = res.message;
//     //   form.reset();
//     // },(err: any) => {
//     //   console.log(err);
      
//     //   this.isLoading = false;     
//     //   this.error = "Something went wrong"
//     this.route.navigate(['home'])
//     form.reset();
//     })
   
  
// }

}
