import { LightningElement } from 'lwc';

export default class A10eventParent extends LightningElement {

  clicked = 0
  handleClick(){
   this.clicked = parseInt(this.clicked)+1
  }

  handleNewClick(){
    alert('Hi guys, I am triggered by the Child Button')
  }
renderedCallback(){

  this.template.querySelector('c-a10event-child-js'),this.addEventListener('click', this.handleNewClick)
}

}