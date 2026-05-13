import { describe, it, expect } from 'vitest'

describe('Example Test Suite', () => {
  it('should pass a basic test', () => {
    expect(1 + 1).toBe(2)
  })

  it('should test string operations', () => {
    const greeting = 'Hello, The Nation'
    expect(greeting).toContain('Nation')
  })

  it('should test array operations', () => {
    const items = [1, 2, 3]
    expect(items).toHaveLength(3)
    expect(items).toContain(2)
  })
})
