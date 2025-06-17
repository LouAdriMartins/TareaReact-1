import React from "react"
import CardColorPalette from "./Components/CardColorPalette/CardColorPalette"

function App() {
  
  return (
    <div>
      <CardColorPalette 
        likes={9} 
        time={'58 min.'}
        colors={['#3674B5', '#578FCA', '#F5F0CD', '#FADA7A']} 
      />
    </div>
  ) 
}

export default App
