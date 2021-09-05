<template>
  <ExampleContainer title="Form">
    <ExampleContent :code="example1">
      <PFormLayout>
        <PTextField label="Store name"/>
        <PTextField type="email" label="Account email"/>
        <PTextField v-model="textareaValue" type="text" label="Multiple lines" :multiline="4" />
        <PSelect
          label="Date range"
          :options="[{label: 'Today', value: 'today'},{label: 'Yesterday', value: 'yesterday'},{label: 'Last 7 days', value: 'lastWeek'}]"
          v-model="selectedValue1"
        />
        <PCheckbox label="Checkbox 1" indeterminate/>
        <PCheckbox v-model="checkboxValue" label="Checkbox 2"/>
        <PColorPicker v-model="colorPickerValue" label="Color picker"/>
      </PFormLayout>
    </ExampleContent>
  </ExampleContainer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { ExampleContainer, ExampleContent } from '@/examples/components';
import { PSelect } from '@/components/PSelect';
import { PTextField } from '@/components/PTextField';
import { PCheckbox } from '@/components/PCheckbox';
import { PColorPicker } from '@/components/PColorPicker';
import { PFormLayout, PFormLayoutItem } from '@/components/PFormLayout';

@Component({
  components: {
    ExampleContainer, ExampleContent,
    PFormLayout, PFormLayoutItem,
    PSelect, PTextField, PCheckbox,
    PColorPicker,
  },
})
export default class FormExample extends Vue {
  public selectedValue1 = 'today';
  public checkboxValue = true;
  public colorPickerValue = '#ff0000';
  public textareaValue = '1776 Barnes Street\n Orlando, FL 32801';

  public example1 = `
  <PFormLayout>
    <PTextField label="Store name"/>
    <PTextField type="email" label="Account email"/>
    <PTextField type="text" label="Multiple lines" :multiline="4" />
    <PSelect
      label="Date range"
      :options="[{label: 'Today', value: 'today'},{label: 'Yesterday', value: 'yesterday'},{label: 'Last 7 days', value: 'lastWeek'}]"
      v-model="selectedValue1"
    />
    <PCheckbox label="Checkbox 1" indeterminate/>
    <PCheckbox v-model="cbVal" label="Checkbox 2"/>
    <PColorPicker v-model="cpVal" label="Color picker"/>
  </PFormLayout>
  `;
}
</script>

<style lang="scss" scoped>

</style>
