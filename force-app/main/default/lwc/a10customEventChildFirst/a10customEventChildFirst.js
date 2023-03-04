import { LightningElement } from 'lwc';

export default class A10customEventChildFirst extends LightningElement {

info
handleClick(){

  const cstEvent = new CustomEvent('apple')
  this.dispatchEvent(cstEvent)


}

}