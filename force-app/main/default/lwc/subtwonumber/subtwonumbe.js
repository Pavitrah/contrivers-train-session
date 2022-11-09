import { LightningElement,api,track } from 'lwc';
export default class subtwonumber extends LightningElement {
 

@track firstNumber;
@track secondNumber;
@ track result;

@api
handleSub(){
    this.result= parseInt(this.firstNumber) - parseInt(this.secondNumber );
    console.log(this.result);

}

handlefirstNumber(Event){
    this.firstNumber = Event.target.value;
}

handlesecondNumber(Event){
    this.secondNumber = Event.target.value;
}

}