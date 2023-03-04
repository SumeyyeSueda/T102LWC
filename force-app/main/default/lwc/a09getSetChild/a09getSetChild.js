import { api, LightningElement } from 'lwc';

export default class A09getSetChild extends LightningElement {


container
@api get year(){
return this.container

} 
set year(data){
  const d = new Date();
let year = d.getFullYear();
this.container = year - data
}
}