<template>
    <div class="page-wrapper">
        <main>
            <h3>Measurement Converter</h3>
            <div>
              <input type="text" ref="unitNumber">
              <select ref="fromUnit">
                <option value="cups"></option>
                <option value="quarts"></option>
                <option value="teaspoons"></option>
                <option value="tablespoons"></option>
              </select>
              <p>to:</p>
              <select ref="toUnit">
                <option value="cups"></option>
                <option value="quarts"></option>
                <option value="teaspoons"></option>
                <option value="tablespoons"></option>
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

    }
  }
}
</script>

<style scoped>

</style>

