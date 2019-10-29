<template>
  <p-wrapper>
    <img :src="spinnerSVG" :class="className">
  </p-wrapper>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { classNames, variationName } from '@/utilities/css';
import { spinnerLarge, spinnerSmall } from './images';

import PWrapper from '@/components/PWrapper.vue';

type Color = 'white' | 'teal' | 'inkLightest';
type Size = 'small' | 'large';

const COLORS_FOR_LARGE_SPINNER = ['teal', 'inkLightest'];

@Component({
  components: {
    PWrapper,
  },
})
export default class PSpinner extends Vue {
  @Prop({ type: String, default: 'teal' }) public color!: Color;
  @Prop({ type: String, default: 'large' }) public size!: Size;

  public type: string = '';

  public get className() {
    return classNames(
      'Polaris-Spinner',
      this.color && `Polaris-Spinner--${variationName('color', this.color)}`,
      this.size && `Polaris-Spinner--${variationName('size', this.size)}`,
    );
  }

  public get spinnerSVG() {
    return this.size === 'large' ? spinnerLarge : spinnerSmall;
  }
}
</script>
