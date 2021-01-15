<template>
  <div class="step-two">
    <MessagesList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '@/store';
import tracking from '@/tracking';
import MessagesList from '@/components/MessagesList.vue';

@Component({
  components: {
    MessagesList,
  },

  async mounted(): Promise<boolean> {
    this.$nextTick(() => {
      performance.mark(`end_${store.state.route?.name}_load`);
      tracking.trackPerformanceMeasure(`${store.state.route?.name}_load`, `start_${store.state.route?.name}_load`, `end_${store.state.route?.name}_load`);
      tracking.trackPerformanceMeasure('submit-step-one-to-step-two', 'submit_step-one_click', 'end_step-two_load');
    });
    return true;
  },
})
export default class StepTwo extends Vue {}
</script>
