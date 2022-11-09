import { LightningElement,api,track } from 'lwc';
export default class multwonumber extends LightningElement {
 

@track firstNumber;
@track secondNumber;
 @ track result;

handlefirstNumber(Event){
    this.firstNumber = Event.target.value;
}

handlesecondNumber(Event){
    this.firstNumber = Event.target.value;
}
@api
handleMul(){
    this.result= parseInt(this.firstNumber) * parseInt(this.secondNumber);
}

}
