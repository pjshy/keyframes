import { serializeStyle } from '../css'

test('hello', () => {
  const serialized = serializeStyle({
    width: '10px',
    height: '20px',
  })

  expect(serialized).toBe('{width: 10px;height: 20px;}')
})