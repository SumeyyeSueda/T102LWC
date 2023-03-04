import { LightningElement, track } from 'lwc';

export default class A08trackList extends LightningElement {


name = 'xxx'
age= 99
memberId=3


  @track familyMemberList = [
    {
        id:1,
        name:'Sumeyye',
        age:32,
    },
    {
      id:2,
      name:'Musa',
      age: 35,
    }
   
    ]
handleName(event){
  this.name = event.target.value
}
handleAge(event){
  this.age = event.target.value
}
handleClick(){

 const member = {
            id:this.memberId,
            name:this.name,
            age:this.age
  
  }

  this.familyMemberList.push(member)
  this.memberId++
}



}