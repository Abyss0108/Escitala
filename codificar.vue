a<template>
  <div>
    <h1>Codificar</h1>
    <input v-model="message" placeholder="Enter the message" />
    <input v-model.number="turns" type="number" placeholder="Number of columns" />
    <button @click="encode">Encode</button>
    <p>{{ encodedMessage }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Encode extends Vue {
  message: string = "";
  turns: number = 0;
  encodedMessage: string = "";

  encode() {
    // Implement the encoding logic here (adapt your existing code)
    // You can use this.message and this.turns to get user input
    // Set this.encodedMessage to the result
  }
}
</script>
