import { LightningElement } from 'lwc';

export default class A10customEventChildSecond extends LightningElement {

childNewInfo = 'Sure weather is very nice!!!==>> This child talking'
handleClick(){

  const cstEvent = new CustomEvent('banana',{detail:this.childNewInfo})
  this.dispatchEvent(cstEvent)


}
}