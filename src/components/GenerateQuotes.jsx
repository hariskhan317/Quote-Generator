import React from 'react'

export default function GenerateQuotes({handleGenerateQuote}) {

  return (
    <div>
        <button onClick={handleGenerateQuote}>Generate Quotes</button>
    </div>
  )
}
