<template>
  <button
    :type="type"
    @click="onClick"
    @focus="onFocus"
    @blur="onBlur"
    :class="className"
    :disabled="isDisabled || loading"
    :role="loading ? 'alert' : undefined"
    :aria-busy="loading ? true : undefined">
    <span class="Polaris-Button__Content">
      <span v-if="loading" class="Polaris-Button__Spinner">
        <p-spinner size="small" :color="spinnerColor"></p-spinner>
        <span role="status">
          <span class="Polaris-VisuallyHidden">Loading</span>
        </span>
      </span>
      <span class="Polaris-Button__Text">
        <slot/>
      </span>
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { classNames, variationName } from '@/utilities/css';

import { PSpinner } from '@/components/PSpinner';

type Size = 'slim' | 'medium' | 'large';
type TextAlign = 'left' | 'right' | 'center';

const DEFAULT_SIZE = 'medium';

@Component({
  components: { PSpinner },
})
export default class PButton extends Vue {
  @Prop(Boolean) public submit!: boolean;
  @Prop(Boolean) public primary!: boolean;
  @Prop(Boolean) public outline!: boolean;
  @Prop(Boolean) public destructive!: boolean;
  @Prop(Boolean) public disabled!: boolean;
  @Prop(Boolean) public loading!: boolean;
  @Prop(Boolean) public plain!: boolean;
  @Prop(Boolean) public monochrome!: boolean;
  @Prop(Boolean) public fullWidth!: boolean;
  @Prop(String) public size!: Size;
  @Prop(String) public textAlign!: TextAlign;
  @Prop({ type: Function, default: () => undefined }) public onClick!: () => void;
  @Prop({ type: Function, default: () => undefined }) public onFocus!: () => void;
  @Prop({ type: Function, default: () => undefined }) public onBlur!: () => void;

  public type: string = '';

  public mounted() {
    this.type = this.submit ? 'submit' : 'button';
  }

  public get className() {
    return classNames(
      'Polaris-Button',
      this.primary && 'Polaris-Button--primary',
      this.outline && 'Polaris-Button--outline',
      this.destructive && 'Polaris-Button--destructive',
      this.isDisabled && 'Polaris-Button--disabled',
      this.loading && 'Polaris-Button--loading',
      this.plain && 'Polaris-Button--plain',
      this.monochrome && 'Polaris-Button--monochrome',
      this.fullWidth && 'Polaris-Button--fullWidth',
      this.size && this.size !== DEFAULT_SIZE && `Polaris-Button--${variationName('size', this.size)}`,
      this.textAlign && `Polaris-Button--${variationName('textAlign', this.textAlign)}`,
    );
  }

  public get isDisabled() {
    return this.disabled || this.loading;
  }

  public get spinnerColor() {
    return this.primary || this.destructive ? 'white' : 'inkLightest';
  }
}
</script>
