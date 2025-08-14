import { describe, expect, test } from 'vitest'

import { add } from './add'

describe('add', () => {
  test('1 + 2 = 3', () => {
    const result = add(1, 2)

    expect(result).toBe(3)
  })
})
