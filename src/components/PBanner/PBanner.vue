<template>
  <div :class="className">
    <div v-if="isDismissable" class="Polaris-Banner__Dismiss">
      <PButton
        plain
        :icon="CancelSmallMinor"
        @click="onDismiss">
      </PButton>
    </div>
    <div class="Polaris-Banner__Ribbon">
      <PIcon
        :source="colorAndIcon.icon"
        :color="colorAndIcon.color"
        backdrop/>
    </div>
    <div>
      <div v-if="title" class="Polaris-Banner__Heading">
        <PHeading element="p">{{ title }}</PHeading>
      </div>
      <div class="Polaris-Banner__Content">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { classNames, variationName } from '@/utilities/css';

import { PIcon } from '@/components/PIcon';
import { PButton } from '@/components/PButton';
import { PHeading } from '@/components/PHeading';
import {
  CancelSmallMinor,
  CircleTickMajorTwotone,
  FlagMajorTwotone,
  CircleAlertMajorTwotone,
  CircleDisabledMajorTwotone,
  CircleInformationMajorTwotone,
} from '@/assets/shopify-polaris-icons';


type BannerStatus = 'success' | 'info' | 'warning' | 'critical';

@Component({
  components: {
    PIcon, PButton, PHeading,
  },
  mixins: [
    {
      data() {
        return {
          CancelSmallMinor,
          CircleTickMajorTwotone,
          FlagMajorTwotone,
          CircleAlertMajorTwotone,
          CircleDisabledMajorTwotone,
          CircleInformationMajorTwotone,
        };
      },
    },
  ],
})
export default class PBanner extends Vue {
  @Prop(String) public title!: string;
  @Prop(String) public status!: string;
  @Prop(Function) public onDismiss!: void;

  public get className() {
    return classNames(
      'Polaris-Banner',
      'Polaris-Banner--withinPage',
      this.isDismissable && 'Polaris-Banner--hasDismiss',
      this.status && `Polaris-Banner--${variationName('status', this.status)}`,
    );
  }

  public get isDismissable() {
    return this.onDismiss !== null && this.onDismiss !== undefined;
  }

  public get colorAndIcon() {
    let color;
    let icon;

    switch (this.status) {
      case 'success':
        color = 'greenDark';
        icon = CircleTickMajorTwotone;
        break;
      case 'info':
        color = 'tealDark';
        icon = CircleInformationMajorTwotone;
        break;
      case 'warning':
        color = 'yellowDark';
        icon = CircleAlertMajorTwotone;
        break;
      case 'critical':
        color = 'redDark';
        icon = CircleDisabledMajorTwotone;
        break;
      default:
        color = 'inkLighter';
        icon = FlagMajorTwotone;
    }

    return { color, icon };
  }
}
</script>
