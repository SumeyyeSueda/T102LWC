import { api, LightningElement } from 'lwc';

export default class A06engineComposition extends LightningElement {
  @api engineModel = 'V-Tech'

  @api engineVolumeParent = 2

  @api fuelTypeParent = 'Electricity'

  @api horsePowerParent = 220
  
}