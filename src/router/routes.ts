import { AsyncComponent } from 'vue';
import {RouteConfig} from 'vue-router';

import Home from '../views/Home.vue';

const StepOne: AsyncComponent = () => import('../views/StepOne.vue');
const StepTwo: AsyncComponent = () => import('../views/StepTwo.vue');

const routes: RouteConfig[] = [
    {
        name: 'home',
        path: '/',
        component: Home,
    },
    {
        name: 'step-one',
        path: '/step/one',
        component: StepOne,
    },
    {
        name: 'step-two',
        path: '/step/two',
        component: StepTwo,
    },
];

export default routes;
