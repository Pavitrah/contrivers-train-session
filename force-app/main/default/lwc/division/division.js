import { LightningElement ,track} from 'lwc';
export default class division extends LightningElement {
    @track result;
    @track operation="";
    @track Result=false;
    handleClick(Event) {
    this.operation=Event.target.title
    this.result=parseInt(this.template.querySelectorAll(".operand")[0].value)/parseInt(this.template.querySelectorAll(".operand")[1].value)
    this.Result=true
    }
  }