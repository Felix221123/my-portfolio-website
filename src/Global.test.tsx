// @ts-expect-error ignore the next line
import React from 'react'
import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import App from './App'

describe('App Component', () => {
  it('it should display hello world', () => {
    render(<App />)
  })
})
