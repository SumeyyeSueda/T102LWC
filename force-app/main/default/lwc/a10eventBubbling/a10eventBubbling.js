import { LightningElement } from 'lwc';

export default class A10eventBubbling extends LightningElement {

  outerClick = 0
  handleOuterClick(event){
    this.outerClick++

  }

  middleClick =0
  handleMiddleClick(event){
    this.middleClick++
  }

  innerClick= 0
  handleInnerClick (event){
    this.innerClick++
  }




}