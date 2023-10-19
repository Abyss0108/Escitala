<template>
  <div>
    <h1>Decoder</h1>
    <input v-model="message" placeholder="Enter the message" />
    <input v-model.number="turns" type="number" placeholder="Number of columns" />
    <button @click="decode">Decode</button>
    <p>{{ decodedMessage }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Decode extends Vue {
  message: string = "";
  turns: number = 0;
  decodedMessage: string = "";

  decode() {
  }
}
</script>
