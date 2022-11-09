import { LightningElement } from 'lwc';
export default class parentcomponent extends LightningElement {


handleAdd() {
this.template.querySelector('c-addtwonumber').handleAdd();
}
handleSub() {
    this.template.querySelector('c-subtwonumber').handleSub();
    }
    handleMul() {
        this.template.querySelector('c-multwonumber').handleMul();
        }
        handleDiv() {
            this.template.querySelector('c-divtwonumber').handleDiv();
            }
}