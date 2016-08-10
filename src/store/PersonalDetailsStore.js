import { observable, computed, action } from 'mobx';


export default class PersonalDetailsStore {

  id; // for react
   @observable name = '';

   constructor(name, x, y, id) {
       this.name = 'test';
       this.address = '1 test street'
       this.id = 1;
   }
}
