import { LightningElement , wire} from 'lwc';
import {registerListener , unregisterAllListeners}  from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
export default class A11siblingReciever extends LightningElement {
    @wire(CurrentPageReference)
    pageRef;
    connectedCallback(){
        registerListener('siblingEvent',this.handleCallback,this)
        
    }
    name
    yas
    handleCallback(detail){
      let container ={...detail}
      container.isim = container.isim.toUpperCase()
this.name = container.isim
this.yas= container.yas

      //  alert('Bu alert ' + detail.isim + ' kisisi tarafindan tetiklendi')
    }
    disconnectedCallback(){
        unregisterAllListeners(this)
    }
}