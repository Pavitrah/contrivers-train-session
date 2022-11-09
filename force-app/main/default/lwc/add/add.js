import { LightningElement } from 'lwc';
export default class DisplayIncrement extends LightningElement {
    add=0;
    handleClick(event) {
        console.log("Button Clicked")
        this.add= this.add+2;
    }
}