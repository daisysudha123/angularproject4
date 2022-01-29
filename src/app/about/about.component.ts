import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // registerForm:any;
  // id:any
  // name: any;
  // brand: any;
  // price: any;
  // products: any;
  // isLoading: boolean | undefined;
  // message: any;
  // error: string | undefined;
  
  constructor(
    private daisy:UserService,
    private route:Router) { }

  ngOnInit(): void {
  }

  // getAllProduct(){
  //   this.daisy.getProducts().subscribe((res)=>{
  //     this.products=res;
  //   })
  // }

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
  
// }

}
 