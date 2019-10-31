<template>
  <div :class="className">
    <PCardHeader v-if="title" :title="title"></PCardHeader>
    <template v-if="sectioned">
      <PCardSection>
        <slot/>
      </PCardSection>
    </template>
    <template v-else>
      <slot/>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { classNames, variationName } from '@/utilities/css';

import PCardHeader from './PCardHeader.vue';
import PCardSection from './PCardSection.vue';
import PCardSubsection from './PCardSubsection.vue';

@Component({
  components: {
    PCardHeader, PCardSection,
  },
})
export default class PCard extends Vue {
  @Prop(String) public title!: string;
  @Prop(Boolean) public subdued!: boolean;
  @Prop(Boolean) public sectioned!: boolean;

  public get className() {
    return classNames(
      'Polaris-Card',
      this.subdued && 'Polaris-Card--subdued',
    );
  }
}
</script>

