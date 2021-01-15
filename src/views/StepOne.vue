<template>
  <div class="step-one">
    <button
      class="submit-button"
      @click="submitForm"
    >
    Begin
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store';
import tracking from '@/tracking';

@Component({
  components: {
  },
})
export default class StepOne extends Vue {
  async mounted(): Promise<boolean> {
    this.$nextTick(() => {
      performance.mark(`end_${store.state.route?.name}_load`);
      tracking.trackPerformanceMeasure(`${store.state.route?.name}_load`, `start_${store.state.route?.name}_load`, `end_${store.state.route?.name}_load`);
    });
    return true;
  }

  async submitForm(): Promise<void> {
    performance.mark('submit_step-one_click');
    await store.dispatch.deterministic.delay(3000);
    this.$router.push({name: 'step-two'})
  }
}
</script>

<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display block
  margin 0 10px

a
  color #42b983
</style>
