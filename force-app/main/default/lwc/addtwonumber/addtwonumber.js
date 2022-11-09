import { LightningElement,api,track } from 'lwc';
export default class addtwonumber extends LightningElement {
 

@track firstNumber;
@track secondNumber;
 @ track result;

 handlefirstNumber(Event){
    this.firstNumber = Event.target.value;
}

handlesecondNumber(Event){
    this.secondNumber = Event.target.value;
}
@api
handleAdd(){
    this.result= parseInt(this.firstNumber) + parseInt(this.secondNumber);
}

}