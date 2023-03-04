import { LightningElement, wire} from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAllAccountRecords'

export default class A08WireDecorator extends LightningElement {

  @wire( getAccounts ,{}   ) accountsForHtml


}