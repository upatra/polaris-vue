<template>
  <div class="Polaris-Card__Header">
    <PHeading>{{ title }}</PHeading>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { classNames, variationName } from '@/utilities/css';

import PHeading from '@/components/PHeading/PHeading.vue';

@Component({
  components: { PHeading },
})
export default class PCardHeader extends Vue {
  @Prop(String) public title!: string;
}
</script>
