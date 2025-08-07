import React, { useState } from 'react'
import { Button } from '@mm/pg'

function App() {
  const [count, setCount] = useState(0)
  const [variant, setVariant] = useState<'primary' | 'secondary' | 'outline'>('primary')

  const variants: Array<'primary' | 'secondary' | 'outline'> = ['primary', 'secondary', 'outline']

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Project A - Vite + React + PG Components</h1>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Counter Example</h2>
        <p>Count: {count}</p>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <Button onClick={() => setCount(count + 1)}>
            Increment
          </Button>
          <Button
            variant="secondary"
            onClick={() => setCount(count - 1)}
            disabled={count <= 0}
          >
            Decrement
          </Button>
          <Button
            variant="outline"
            onClick={() => setCount(0)}
          >
            Reset
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Button Variants</h2>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          {variants.map((v) => (
            <Button
              key={v}
              variant={v}
              onClick={() => setVariant(v)}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </Button>
          ))}
        </div>
        <p>Current variant: <strong>{variant}</strong></p>
      </div>

      <div>
        <h2>Button Sizes</h2>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button size="small" variant={variant}>
            Small
          </Button>
          <Button size="medium" variant={variant}>
            Medium
          </Button>
          <Button size="large" variant={variant}>
            Large
          </Button>
        </div>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>🚀 Hot Reloading Test</h3>
        <p>Try editing the Button component in <code>packages/pg/src/components/button/Button.tsx</code></p>
        <p>Changes should reflect instantly here without manual rebuild!</p>
      </div>
    </div>
  )
}

export default App
