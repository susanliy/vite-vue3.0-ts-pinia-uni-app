import { defineStore } from 'pinia';
import { pinia } from '..';

export const systemStore = defineStore('system', {
  state: () => ({
    isLoading: false,
	  loadNumber:0
  }),
  actions: {
	addLoadNumber(){
	  this.loadNumber++  
	},
    showLoading() {
      this.isLoading = true;
    },
    hideLoading() {
      this.isLoading = false;
    },
  },
});

export const systemStoreWithOut = () => {
  return systemStore(pinia);
};
