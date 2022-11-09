import { LightningElement } from 'lwc';

export default class accountparent extends LightningElement {
    
    contactName;
  showFeatures = true;
  contactCreatedParent(event){
     this.contactName= event.detail
 }
}