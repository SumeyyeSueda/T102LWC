import { LightningElement, track } from 'lwc';

export default class A08trackDecorator extends LightningElement {

@track  member = {
  name:' Sumeyye' , 
  age: 30

}


  handleName(event){
this.member.name = event.target.value  ;
  }

  handleAge(event){
this.member.age = event.target.value  ;
  }





}