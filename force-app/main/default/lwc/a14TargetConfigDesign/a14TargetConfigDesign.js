import { api, LightningElement } from 'lwc';

export default class A14TargetConfigDesign extends LightningElement {


  @api subject //since it is primitive data(string,number),, if list then @track
  @api greeting
  @api name
}