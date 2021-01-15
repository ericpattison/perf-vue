import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  performance.mark(`start_${to.name}_load`);
  return next();
})

export default router;
