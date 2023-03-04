import { LightningElement } from 'lwc';

export default class A03ConditionalRendering extends LightningElement {

  flag=true

  handleFlag(event){
    this.flag= event.target.checked
  }
   
  pattern= true
  pattern = '.{6,}';
  


}