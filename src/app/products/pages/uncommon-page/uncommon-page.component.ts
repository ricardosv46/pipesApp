import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
//i18nSelect Pipe
public name:string = 'Ricardo'
public gender:'male'|'female' = 'male'

public invitationMap = {
  male:'invitarlo',
  female:'invitarla'
}

changeClient(){
  this.name='Melissa'
  this.gender='female'
}

//i18nPLural Pipe
public clients:string[] = ['Fernando', 'Ricardo','Juan','Eduardo','Melissa','Natalia','Pedro']
public clientsMap = {
  '=0':'no tenemos ningún cliente esperando',
  '=1':'tenemos un cliente esperando',
  '=2':'tenemos 2 clientes esperando',
  'other':'tenemos # cliente esperando',

}

deleteClient(){
  this.clients.shift()
}

//keyValue Pipe
public Person = {
  name : 'Ricardo',
  age:36,
  address:'Ottawa, Canada'
}

//Async Pipe
public myObservableTimer:Observable<number> = interval(2000).pipe(
  tap(value=> console.log('tap:',value))
)

public promiseValue:Promise<string> = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Tenemos data en lap promesa')
  })
})
}
