import { LightningElement } from 'lwc';
import createAccount from '@salesforce/apex/LWCaccountCreation.createAccount'
import{ShowToastEvent} from 'lightning/platformShowToastEvent'



export default class A08LWCAccountCreation extends LightningElement {

  accountName

handleInput(event){
this.accountName = event.target.value

}
//uyari
handleClick(){
  
    createAccount({ accName:this.accountName})
    .then ( response => {
      if(response == 'Congrats' ){
       // this.uyari= 'Basarilisin'
      this.dispatchEvent(new ShowToastEvent({
          title : 'Account is created',
          message :'******* Account Created Successfully ******',
          variant: 'success'
        }))
      }else{
        this.dispatchEvent(new ShowToastEvent({
          title: 'Error',
          message:'Something Went Wrong',
          variant : 'error'
        }

        ))

      }
    }
    )
    .catch ( error =>  {
      console.log('error' + console.error)
    }    )

}

}