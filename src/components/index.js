import Vue from "vue";
import PButton from "./PButton/PButton.vue";
import PSpinner from "./PSpinner/PSpinner.vue";
import '@/scss/main.scss';

const Components = {
  PButton,
  PSpinner
};

const Polaris = {
  install(Vue, options = {}) {
    for (let componentKey in Components) {
      Vue.component(componentKey, Components[componentKey]);
    }
  }
}

export default Polaris
