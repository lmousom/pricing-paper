# ⌗ pricing-paper

A react pricing component to easily integrate in your application. ✨

## Features

- Create pricing page in 10 line of code 🥳
- Lightweight ⚡
- Easy to use 🐥
- fully customizable style ⚒️

## Install

Via package managers:

```bash
npm i pricing-paper
```

## Example Usage

```bash
import Pricing from 'pricing-paper'

const firstPlan = {
  'title': 'Demo 1',
  'price': 'FREE'
}
const popularPlan = {
  'title': 'Demo 2',
  'price': '$54'
}

const lastPlan = {
  'title': 'Demo 3',
  'price': '$99'
}

const firstFeatures = [
  {
    'name': 'First Features',
    'applicable': true
  },
  {
    'name': 'First Features',
    'applicable': true
  },
  {
    'name': 'First Features',
    'applicable': false
  },
  {
    'name': 'First Features',
    'applicable': true
  },
  {
    'name': 'First Features',
    'applicable': false
  },


]

const popularFeatures = [
  {
    'name': 'Popular Features',
    'applicable': true
  },
  {
    'name': 'Popular Features',
    'applicable': true
  },
  {
    'name': 'Popular Features',
    'applicable': true
  },
  {
    'name': 'Popular Features',
    'applicable': true
  },
  {
    'name': 'Popular Features',
    'applicable': true
  },


]

const lastFeatures = [
  {
    'name': 'Last Features',
    'applicable': true
  },
  {
    'name': 'Last Features',
    'applicable': true
  },
  {
    'name': 'Last Features',
    'applicable': true
  },
  {
    'name': 'Last Features',
    'applicable': true
  },
  {
    'name': 'last Features',
    'applicable': true
  },


]

const styles = {
  'planCard': {
    backgroundColor: '#ffebb3'

  },
  'planHeroCard': {

  },
  'planCardTitle': {

  },
  'planCardPrice': {

  },
  'planButton': {

  },
  'badge': {
    
  }
}

const alertMe = () => {
  alert("Hi")
}

 <Pricing firstPlan={firstPlan}
      popularPlan={popularPlan}
      lastPlan={lastPlan}
      firstFeatures={firstFeatures}
      popularFeatures={popularFeatures}
      lastFeatures={lastFeatures}
      styles={styles}  
      buttonValue={"Buy Now"}
      handleClick={alertMe}
  />
```

## Props

| Prop      | Type      | Requirement  |Description                                         |
| --------- | --------- | ------------ | --------------------------------------------------- |
| firstPlan     | `object`  | `required` | object of `name and price` |
| popularPlan| `object`  | `required` | object of `name and price`   |
| lastPlan| `object`  | `required` | object of `name and price`   |
| firstFeatures| `Array`  | `required` | Array of `Features`   |
| popularFeatures| `Array`  | `required` | Array of `Features`   |
| lastFeatures| `Array`  | `required` | Array of `Features`   |
| styles| `object`  | `optional` | object of `React style`   |
| buttonValue| `string`  | `required` | Button Text   |
| handleClick| `function`  | `optional` | Button click event   |
| buttonDisabled| `boolean`  | `optional` | `true` or `false`   |

## Contributing

Feel free to submit any issues or pull request 🙂
