import React from 'react'
import Card from './components/Card'
import './style.css'

// 🔎 Example: The "children" prop

export default function App() {
  return (
    <main>
      <Card>
        <p>I am a p element inside a Card.</p>
      </Card>

      <Card>
        <h3>I am an h3 element inside a Card.</h3>
      </Card>

      <Card>
        <ul>
          <li>Hello!</li>
          <li>I am a list.</li>
          <li>And I am inside a Card.</li>
        </ul>
      </Card>
    </main>
  )
}
