import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'ricardo'
  public nameUpper: string = 'RICARDO'
  public fullName: string = 'RiCarDo soLiS'

  public customDate:Date = new Date()
}
