<template>
  <div style="--top-bar-background:#00848e; --top-bar-background-lighter:#1d9ba4; --top-bar-color:#f9fafb;">
    <component :is="element" :class="className">
      <slot/>
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

type HeadingTagName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

@Component
export default class PHeading extends Vue {
  @Prop({ type: String, default: 'h2' }) public element!: HeadingTagName;

  public get className() {
    return 'Polaris-Heading';
  }
}
</script>
