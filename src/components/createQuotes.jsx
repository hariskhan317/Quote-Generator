import React from 'react';
import '../App.css';
export default function CreateQuotes() {

  return (
    <div className='formModal'>
      <input className='authorInput' type='text' placeholder='Autor' />
      <input className='quoteInput' type='text' placeholder='Quote' />
      <button className='quoteButton'>Save</button>
    </div>
  )
}
