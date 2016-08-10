import { observable, computed, action } from 'mobx';
import PolicyStore from './policyStore';
import PersonalDetailsStore from './personalDetailsStore';

const store = {
  @observable policiesStore: new PolicyStore(),
  @observable personalDetailsStore: new PersonalDetailsStore()
};

export default store;
