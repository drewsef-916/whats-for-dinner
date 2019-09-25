<template>
    <div class="page-wrapper">
        <main class="converter-wrapper">
            <h3>Measurement Converter</h3>
            <div>
              <input type="number" step="0.25" ref="unitNumber">
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
              <h6 class="output" ref="output"></h6>
            </div>
        </main>
    </div>
</template>

<script>
const conversionConstants = {
  "cups": {
    "quarts": 0.25,
    "teaspoons": 48,
    "tablespoons": 16
  },
  "quarts": {
    "cups": 4,
    "tablespoons": 64,
    "teaspoons": 192
  },
  "tablespoons": {
    "cups": 0.0625,
    "quarts": .015625,
    "teaspoons": 3
  },
  "teaspoons": {
    "cups": .025,
    "quarts": 0.00520833, //192 teaspoons in a quart
    "tablespoons": 0.333 //64 tablespoons in a quart
  },
}
const roundingRules = {
  0.125: "1/8",
  0.250: "1/4",
  0.333: "1/3",
  0.375: "3/8",
  0.500: "1/2",
  0.625: "5/8",
  0.666: "2/3",
  0.750: "3/4",
  0.875: "7/8",
}
export default {
  methods: {
    numberRounder(num) {
      console.log(num)
      const keys = Object.keys(roundingRules)
      let returnFraction = 0;
      keys.forEach((value, index) => {
        if (num === value) {
          returnFraction = roundingRules[value]
          return
        } else if (num < 0.0625) {
          returnFraction = 0
          return
        } else if (num > 0.9375) {
          returnFraction = 1
          return
        } else if (num < value){
          const halfwayPoint = (keys[index] - keys[index - 1]) / 2
          num >= halfwayPoint ? returnFraction = roundingRules[keys[index]] :
          returnFraction = roundingRules[keys[index - 1]]
        }
      })
      return returnFraction
    },
    convertUnits(from, to) {
      const conversionNumber = this.$refs.unitNumber.value
      const conversionValue = (conversionNumber * conversionConstants[from][to]).toFixed(3)
      const remainder = (conversionValue % 1).toFixed(3)
      if (remainder == '0') {
        const roundedValue = Math.round(conversionValue)
        this.$refs.output.innerHTML = `${conversionNumber} ${from} equals ${roundedValue} ${to}`
      } else {
        this.$refs.output.innerHTML = `${conversionNumber} ${from} equals ${conversionValue} ${to}`
      }
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
  .output {
    font-size: 2rem;
  }

</style>

