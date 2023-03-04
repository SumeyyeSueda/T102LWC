import { api, LightningElement, track } from 'lwc';

export default class A09getSetChildObject extends LightningElement {

  container 

  get customerInfo(){
    return this.container
  }
@api set customerInfo(data){
  
 // let temCustomer ={name: data.name , lastAge: data.age}
  
  
  
  //let temCustomer = object.assign({}, data)
  
  
let temCustomer= {...data, name:data.name + ' uncle ',age: (data.age) *2}
  
 /*  let temCustomer= {...data}
 temCustomer.name = temCustomer.name + ' uncle '
  temCustomer.age = temCustomer.age *2
  */
  
  
  this.container = temCustomer

}



}