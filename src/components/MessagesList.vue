<template>
    <section>
        <ul>
            <li v-for="msg in messages" v-bind:key="msg">
                {{msg}}
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { component } from 'vue/types/umd'
import store from "../store"

@Component
export default class MessagesList extends Vue {
    get messages(): string[] {
        return store.state.deterministic.messages.map(val => `${val.timestamp}: [${val.transactionId}]\t${val.message}`);
    }
}
</script>