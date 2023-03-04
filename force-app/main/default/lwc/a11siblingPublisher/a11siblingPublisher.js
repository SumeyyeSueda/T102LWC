import { api, LightningElement , wire} from 'lwc';
import {fireEvent}  from 'c/pubsub'
import { CurrentPageReference } from 'lightning/navigation';
export default class A11siblingPublisher extends LightningElement {
    @wire(CurrentPageReference)
    pageRef;

    @api recordId

    handleClick( ){
      
var isim = { 'isim':'resul' ,'yas':'49' }
fireEvent(this.pageRef, 'siblingEvent', isim)
    } 
}