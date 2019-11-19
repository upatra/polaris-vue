<template>
  <PChoice
    :id="id"
    :label="label"
    :labelHidden="labelHidden"
    :disabled="disabled">
    <span :class="wrapperClassName">
      <input
        :id="id"
        type="checkbox"
        :checked="isChecked"
        :disabled="disabled"
        :class="inputClassName"
        role="checkbox"/>
      <span class="Polaris-Checkbox__Backdrop"></span>
      <span class="Polaris-Checkbox__Icon">
        <PIcon :source="iconSource"></PIcon>
      </span>
    </span>
  </PChoice>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { classNames, variationName } from '@/utilities/css';

import { PIcon } from '@/components/PIcon';
import { PChoice } from '@/components/PChoice';
import { MinusMinor, TickSmallMinor } from '@/assets/shopify-polaris-icons';

@Component({
  components: {
    PIcon, PChoice,
  },
})
export default class PCheckbox extends Vue {
  @Prop(String) public label!: string;
  @Prop(Boolean) public labelHidden!: boolean;
  @Prop() public checked!: boolean | 'indeterminate';
  @Prop(Boolean) public disabled!: boolean;

  public id = `PolarisCheckbox${new Date().getUTCMilliseconds()}`;

  public get wrapperClassName() {
    return classNames(
      'Polaris-Checkbox',
    );
  }

  public get inputClassName() {
    return classNames(
      'Polaris-Checkbox__Input',
      this.isIndeterminate && 'Polaris-Checkbox__Input--indeterminate',
    );
  }

  public get isIndeterminate() {
    return this.checked === 'indeterminate';
  }

  public get isChecked() {
    return !this.isIndeterminate && Boolean(this.checked);
  }

  public get iconSource() {
    return this.isIndeterminate ? MinusMinor : TickSmallMinor;
  }
}
</script>
