import { add } from './add'
import { subtract } from './subtract'
import { doMath } from './do-math'

/**
 * Usually you'll be testing a certain output when providing a certain input. The "doMath"
 * function's job though is to call other functions. Then how do we test the output? And what
 * happens if e.g. the "add" function changes? That's not "doMath"'s fault.
 *
 * We can make sure we're only testing "doMath"'s responsibilities
 * by mocking the other functions it is calling:
 */

jest.mock('./add', () => ({
  add: jest.fn(),
}))

jest.mock('./subtract', () => ({
  subtract: jest.fn(),
}))

describe('doMath', () => {
  it('should call "add" function when "add" is supplied as first parameter', () => {
    // execute "parent" function, which calls add/subtract
    doMath('add', 3, 1)

    // check if our mocked version of "add" was called
    expect(add).toHaveBeenCalled()
  })

  it('should call "subtract" function with correct arguments when "subtract" is supplied as first parameter', () => {
    doMath('subtract', 14, 7)

    // you can also check if a mock function was called with the correct parameters
    expect(subtract).toHaveBeenCalledWith(14, 7)

    // or how many times
    expect(subtract).toHaveBeenCalledTimes(1)

    // or that something was *not* called
    expect(add).not.toHaveBeenCalled()
  })
})
