import { LightningElement ,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountSearchEngineImperative.getAllAccountRecords'
export default class A08ImperativeSearchEngine extends LightningElement {


  filterWord


  handleInput (event){
    this.filterWord = event.target.value
  
  
  }
 // @wire(getAccounts ,  {accName :'$filterWord'}  ) accountsForHtml
  
  accountList
  hata

  handleClick(){

      getAccounts({ accName:this.filterWord })
      .then (  (result)=> { this.accountList = result ;
                            this.hata = undefined      } )
      
      .catch((error)=>{ this.hata = error ;
                        this.accountList = undefined     })



  }

}