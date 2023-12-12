import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent  {
  constructor( private router: Router  ) {  }

  underweight(){this.router.navigate(['/underweight']); }
  overweight(){ this.router.navigate(['/overweight']);} 

  
  
 }


