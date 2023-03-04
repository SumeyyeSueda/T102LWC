import { LightningElement } from 'lwc';

export default class A09getter extends LightningElement {

num1 = 9
num2 = 3
sum = this.num1 + this.num2

get total(){
  return this.num1 + this.num2
}

names =['ali','veli' ,'john','resul','angel','husnu']
 nameToDisplay = this.names[1]


get nameForDisplay(){
  return this.names[1]
 }

 num3 = 0
 handleInput(event){
  this.num3 = event.target.value
 }

 message = ''
userSelectName = this.names[this.num3].toUpperCase()

get userSelectNameByGet(){
  if(this.num3 < this.names.length){

  return this.names[this.num3].toUpperCase()

 }else{
  window.alert('The  number you entered should be less than 6')

 }
 }
}