<template>
  <div>
    <h1>Encoder</h1>
    <input v-model="message" placeholder="Enter the message" />
    <input v-model.number="turns" type="number" placeholder="Number of columns" />
    <button @click="encode">Encode</button>
    <p>{{ encodedMessage }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { escitalaEncrypt } from "./escitala"; // Importa las funciones de cifrado y descifrado

@Component
export default class Encode extends Vue {
  message: string = "";
  turns: number = 0;
  encodedMessage: string = "";

  encode() {
    this.encodedMessage = escitalaEncrypt(this.message, this.turns);
  }
}
</script>

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
import { escitalaDecrypt } from "./escitala"; // Importa las funciones de cifrado y descifrado

@Component
export default class Decode extends Vue {
  message: string = "";
  turns: number = 0;
  decodedMessage: string = "";

  decode() {
    this.decodedMessage = escitalaDecrypt(this.message, this.turns);
  }
}
</script>

