import _ from 'lodash';
import { observable, computed, action } from 'mobx';


export default class PolicyStore {

  id; // for react
   @observable policies = [];

   @computed get verifiedPolicies() {
       return _.filter(this.policies, policy => {return policy.verified;}).length;
   };

   @action verifyPolicy(policyId) {
    this.policies[policyId - 1].verified = true;
   };

   constructor() {
       this.policies = [
            {id:1, name:'Policy 1', verified:true},
            {id:2, name:'Policy 2', verified:true},
            {id:3, name:'Policy 3', verified:false},
            {id:4, name:'Policy 4', verified:false}];
       this.id = 2;
   };
}
