import { LightningElement } from 'lwc';

export default class A09getSetParent extends LightningElement {

  age
  handleAge(event){
  this.age = event.target.value



}
 customer = {
name:'mahmut',
age:45

 }
}