<template>
  <span :class="className">
    <div v-if="source === 'placeholder'" class="Polaris-Icon--Placeholder"/>
    <img
      class="Polaris-Icon--Img"
      :src="`data:image/svg+xml;utf8,${encodedSource}`"
      alt=""
      aria-hidden="true"
    />
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { classNames, variationName } from '@/utilities/css';
import { encode as encodeSVG } from '@/utilities/svg';

type Color =
  | 'white'
  | 'black'
  | 'skyLighter'
  | 'skyLight'
  | 'sky'
  | 'skyDark'
  | 'inkLightest'
  | 'inkLighter'
  | 'inkLight'
  | 'ink'
  | 'blueLighter'
  | 'blueLight'
  | 'blue'
  | 'blueDark'
  | 'blueDarker'
  | 'indigoLighter'
  | 'indigoLight'
  | 'indigo'
  | 'indigoDark'
  | 'indigoDarker'
  | 'tealLighter'
  | 'tealLight'
  | 'teal'
  | 'tealDark'
  | 'tealDarker'
  | 'greenLighter'
  | 'green'
  | 'greenDark'
  | 'yellowLighter'
  | 'yellow'
  | 'yellowDark'
  | 'orange'
  | 'redLighter'
  | 'red'
  | 'redDark'
  | 'purple';

const COLORS_WITH_BACKDROPS = [
  'teal',
  'tealDark',
  'greenDark',
  'redDark',
  'yellowDark',
  'ink',
  'inkLighter',
];

@Component
export default class PIcon extends Vue {
  @Prop(String) public source!: 'placeholder' | string;
  @Prop(String) public color!: Color;
  @Prop(Boolean) public backdrop!: boolean;

  public encodedSource = encodeSVG(this.source);

  public get className() {
    return classNames(
      'Polaris-Icon',
      this.color && `Polaris-Icon--${variationName('color', this.color)}`,
      this.color && this.color !== 'white' && 'Polaris-Icon--isColored',
      this.backdrop && 'Polaris-Icon--hasBackdrop',
    );
  }
}
</script>
