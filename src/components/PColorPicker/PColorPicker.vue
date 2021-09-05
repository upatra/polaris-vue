<template>
  <div class="">
    <div class="Polaris-Labelled__LabelWrapper">
      <div class="Polaris-Label">
        <label class="Polaris-Label__Text">
          {{label}}
        </label>
      </div>
    </div>
    <div class="Polaris-Connected">
      <div
        class="Polaris-Connected__Item Polaris-Connected__Item--primary"
      >
        <div class="Polaris-TextField">
          <input
            class="Polaris-TextField__Input"
            style="width: 50px; flex: none;"
            type="color"
            :value="selected"
            @input="onInput"
          />
          <input
            class="Polaris-TextField__Input"
            type="text"
            :value="selected"
            @input="onInput"
          />
          <div class="Polaris-TextField__Backdrop"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class ColorPicker extends Vue {
  @Prop(String) public label!: string;
  @Prop(String) public value!: string;

  public selected = this.value !== null ? this.value : '';

  public get computedValue() {
    return this.selected;
  }

  public set computedValue(value: string) {
    this.selected = value;
    this.$emit('input', value);
  }

  @Watch('value')
  public onValueChanged(value: any) {
    this.selected = value;
  }

  public onInput(event: any) {
    this.$nextTick(() => {
      if (event.target) {
        this.computedValue = event.target.value;
      }
    });
  }
}
</script>
