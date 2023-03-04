import { LightningElement } from 'lwc';

export default class A10customEventParent extends LightningElement {

  newInfo = 'How is the weather?'
  handleApple(){
    this.newInfo ='Sure weather is very nice!!!'
  }


  childInfo = 'How is the weather?'
  handleBanana(event){
    this.childInfo = event.detail
  }
//catching object
customer ={
  name : 'John',
  age: 36
}
  handleCherry(event){

    let data = event.detail

    let geciciRecord = {...data}
    geciciRecord.name = geciciRecord.name.toUpperCase()
    this.customer = geciciRecord
   
}
}