import { LightningElement } from 'lwc';

export default class A02DataBinding extends LightningElement {
//one way data binding

  name = 'SUMEYYE' ;

  // two way data binding
  firstName = "john";

  handleInput(event){
this.firstName = event.target.value  ;
  }

  // to manipulate the data  ( GET )
  fName='Guzel'  ;
  handleFName(event){
   this.fName = event.target.value   ;
  }
  
newFirstName ;
get manipulateFName(){
this.newFirstName = this.fName.toUpperCase()  ;
  return  this.newFirstName;
}
 

// GET example 


newName = 'leyla' ;
handleFirstName(event){
  this.newName = event.target.value ;
}


lastName = 'Olcan' ;
handleLastName (event){
this.lastName = event.target.value;
}

container ;
get manipulateFullName (){
  this.container = (this.newName  + ' ' + this.lastName ).toUpperCase();
  return this.container ;
}

// multiplication example 

firstNumber = '5' ;
handleFirstNumber (event){
 this.firstNumber = event.target.value ;
}

secondNumber= '6';
handleSecondNumber (event){
this.secondNumber = event.target.value ;
}

result ;
get manipulateMultiply (){
  this.result = this.firstNumber * this.secondNumber  ;
  return this.result ;
}








}