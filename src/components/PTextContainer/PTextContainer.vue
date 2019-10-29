<template>
  <p-wrapper>
    <div :class="className">
      <slot/>
    </div>
  </p-wrapper>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { classNames, variationName } from '@/utilities/css';

import PWrapper from '@/components/PWrapper.vue';

type Spacing = 'tight' | 'loose';

@Component({
  components: { PWrapper },
})
export default class PTextContainer extends Vue {
  @Prop(String) public spacing!: Spacing;

  public get className() {
    return classNames(
      'Polaris-TextContainer',
      this.spacing && `Polaris-TextContainer--${variationName('spacing', this.spacing)}`,
    )
  }
}
</script>
