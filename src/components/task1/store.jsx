import { makeAutoObservable, observable } from "mobx";

class InputStore {

  constructor() {
    makeAutoObservable(this); 
  }
  
//   @observable
  text = "";
  cardid=[];

  setText(newText) {
    //debugger
    this.text = newText; 
  }
  setCardID(id) {
    //debugger
    this.cardid = id; 
  }
}

const inputStore = new InputStore();
export default inputStore;