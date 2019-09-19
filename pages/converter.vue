<template>
    <div class="page-wrapper">
        <main class="converter-wrapper">
            <h3>Measurement Converter</h3>
            <div>
              <input type="text" ref="unitNumber" placeholder="Quantity">
              <select ref="fromUnit">
                <option value="cups">Cups</option>
                <option value="quarts">Quarts</option>
                <option value="teaspoons">Teaspoons</option>
                <option value="tablespoons">Tablespoons</option>
              </select>
              <p>to:</p>
              <select ref="toUnit">
                <option value="cups">Cups</option>
                <option value="quarts">Quarts</option>
                <option value="teaspoons">Teaspoons</option>
                <option value="tablespoons">Tablespoons</option>
              </select>
              <button @click="convertUnits(this.$refs.fromUnit.value, this.$refs.toUnit.value)">Convert Units</button>
              <h6 class="output" ref="output">Conversion goes here</h6>
            </div>
        </main>
    </div>
</template>

<script>
// 1 cup = 0.25 quarts, 8 ounces, 16 tablespoons, 48 teaspoons
const conversionConstants = [
  {"cups": [
    {"quarts": 0.25},
    {"teaspoons": 48},
    {"tablespoons": 16}
  ]},
  {"quarts": [
    {"cups": 4},
    {"tablespoons": 64},
    {"teaspoons": 192}
  ]},
  {"tablespoons": [
    {"cups": 0},
    {"quarts": 0},
    {"teaspoons": 0}
  ]},
  {"teaspoons": [
    {"cups": 0},
    {"quarts": 0},
    {"tablespoons": 0}
  ]},
]
export default {
  methods: {
    convertUnits(from, to) {
      console.log(from, to)
    }
  }
}
</script>

<style scoped>
  .converter-wrapper {
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 18vh auto;
    min-width: 60vw;
    max-width: 80vw;
    border: 2px solid black;
    border-radius: 10px;
  }
  .page-wrapper {
    background: url(../assets/bg.png);
    background-attachment: fixed;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

</style>

