import { api,LightningElement } from 'lwc';

export default class A06EngineFeaturesComposition extends LightningElement {
 
  @api engineVolume = 1.8

  @api fuelType = 'DIESEL' 

  @api horsePower = 140
}