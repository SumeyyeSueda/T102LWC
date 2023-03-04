import { LightningElement } from 'lwc';

export default class A06vehicleCOMPOSITION extends LightningElement {

  vehichleModel = 'HONDA'
  engineModelParent = 'Cylinder'
  engineVolumeGrandParent = 5.0
  fuelTypeGrandparent = 'Petrol'
  horsePowerGrandParent = 240

  handleEngineVolume(event){
    this.engineVolumeGrandParent = event.target.value
  }

handleFuelType(event){
  this.fuelTypeGrandparent = event.target.value
}

handleHorsePower (event){
  this.horsePowerGrandParent = event.target.value
}
handleEngineModel(event){
  this.engineModelParent = event.target.value
}

}