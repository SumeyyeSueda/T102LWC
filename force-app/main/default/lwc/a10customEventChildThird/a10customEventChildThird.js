import { LightningElement, track } from 'lwc';

export default class A10customEventChildThird extends LightningElement {

  @track customerFromChild = {
    name:'Mahmut',
    age: 63
  }
handleClick(){

  const cstEvent = new CustomEvent('cherry',{detail:this.customerFromChild})
  this.dispatchEvent(cstEvent)

}

handleIsim(event){
  this.customerFromChild.name = event.target.value

}

handleYas(event){
  this.customerFromChild.age = event.target.value

}
}