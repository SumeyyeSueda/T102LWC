import { track ,LightningElement } from 'lwc';
export default class xxxPicklistLWC extends LightningElement {
secilen='';
seceneklerArray= [ {label : 'ENGLAND' , value:'London'},
                          {label : 'TURKEY' , value:'Ankara'},
                          {label: 'FRANCE', value: 'Paris'},
                          {label :'JAPAN', value: 'Tokyo'}


                        ]
get secenekler(){
    return this.seceneklerArray
} 
handlePicklist(event){
    this.secilen = event.detail.value;
}
}