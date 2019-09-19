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
              <button @click="convertUnits($refs.fromUnit.value, $refs.toUnit.value)">Convert Units</button>
              <h6 class="output" ref="output">{{this.conversion}}</h6>
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
    {"cups": 0.0625},
    {"quarts": .015625},
    {"teaspoons": 3}
  ]},
  {"teaspoons": [
    {"cups": .025},
    {"quarts": 0.00520833}, //192 teaspoons in a quart
    {"tablespoons": 0.333} //64 tablespoons in a quart
  ]},
]
const roundingRules = [
  {.250: "1/4"},
  {.750: "3/4"},
  {.333: "1/3"},
  {.667: "2/3"},
  {.125: "1/8"},
  {.375: "3/8"},
  {.625: "5/8"},
  {.875: "7/8"},
  {.500: "1/2"},
]
export default {
  data: function() {
    conversion: 0
  },
  methods: {
    convertUnits(from, to) {
      const conversionValue = ((conversionConstants.from * $refs.unitNumber) * conversionConstants.to).toFixed(3)
      const remainder = conversionValue % 1
      console.log(remainder)
      if (remainder == "000") this.conversion = conversionValue
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

