import { add } from './add'
import { subtract } from './subtract'

export function doMath(operation, numberA, numberB) {
  switch (operation) {
    case 'add':
      return add(numberA, numberB)

    case 'subtract':
      return subtract(numberA, numberB)

    default:
      return null
  }
}
