import { LightningElement, wire} from 'lwc';
import getAccounts from '@salesforce/apex/accountSearchEngine.getAllAccountRecords'

export default class A08WireDecorator extends LightningElement {

  filterWord


handleInput (event){
  this.filterWord = event.target.value


}
@wire(getAccounts ,  {accName :'$filterWord'}  ) accountsForHtml
}