<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import PFormLayoutItem from '@/components/PFormLayout/PFormLayoutItem.vue';

@Component({
  components: { PFormLayoutItem },
})
export default class PFormLayout extends Vue {
  public render(h: any) {
    const items = (this.$slots.default || []).map((item: any) => h(PFormLayoutItem, { class: { } }, [item]));
    return h('div', { class: { 'Polaris-FormLayout': true } }, items);
  }
}
</script>
