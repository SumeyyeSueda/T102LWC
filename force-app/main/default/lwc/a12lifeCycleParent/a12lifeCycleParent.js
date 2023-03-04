import { LightningElement , track } from 'lwc';
import getContactList  from '@salesforce/apex/ContactController.getContactList'
export default class A12lifecycleParent extends LightningElement {
@track contactList
@track error2
isim='Ali'
sayi =3
gorunsunmu = false
handleGoster(){
   this.gorunsunmu= true 
}
handleGizle(){
    this.gorunsunmu= false  
}
constructor(){
    super()
    alert('PARENT CONSTRUCTOR alert')
   getContactList().then(result=>{ this.contactList =result ;
            this.error2 = undefined   })
        .catch(error =>{ this.contactList =undefined ;
            this.error2 = error   }  )
  
}
handleChange(event){
    this.isim=event.target.value
}
connectedCallback(){
  alert('PARENT connectedCallback() alert')
    /*   getContactList().then(result=>{ this.contactList =result ;
            this.error2 = undefined   })
        .catch(error =>{ this.contactList =undefined ;
            this.error2 = error   }  )
    */
    
}
renderedCallback(){
    //   alert('PARENT renderedCallback() alert')
    if( this.sayi<789){
        this.sayi= this.sayi +1
    }
}
errorCallback(error,stack){
 alert(error.message)
 console.log('Bak burasi STACK' + stack)
}
}