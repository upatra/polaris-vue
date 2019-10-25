<template>
  <div id="app">
    <h1>Test</h1>
    <br>
    <p-button plain destructive>
      Add product
    </p-button>
    <br>
    <p-button destructive loading>
      Add product
    </p-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PButton from '@/components/PButton/PButton.vue';

@Component({
  components: {
    PButton,
  },
})
export default class App extends Vue {
  public test() {
    /* tslint:disable-next-line */
    console.log('asd');
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
