import { LightningElement } from 'lwc';

export default class AErcanHoca1 extends LightningElement {

name = 'sumeyye';

handleFName(event){
  this.name = event.target.value;
}
newName;
get manipulateFName(){
  this.newName = this.name;
  return this.newName;
}

lastName ;

handleLName(event){
  this.lname
}


}