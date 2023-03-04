import { LightningElement } from 'lwc';

export default class A10eventExample extends LightningElement {

  xCoordinate
  yCoordinate
  handleMove(event){
   this.xCoordinate= event.clientX
   this.yCoordinate= event.pageY
  }
}