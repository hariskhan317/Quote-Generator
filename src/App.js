import { useEffect, useState } from 'react';
import './App.css';
import CreateQuotes from './components/createQuotes'
import bgColor from './colorPallet.js'

function App() {
  const [quotesList, setQuotesList] = useState([]);
  const [index, setIndex] = useState(0);
  // saving the index of the array in the current quote
  const currentQuote = quotesList[index];
  const currentBgColor = bgColor[index];
  console.log(currentBgColor)
  useEffect(() => {
    handleGetQuoteList();
  }, []);

  const handleGetQuoteList = async () => {
    try {
      const response = await fetch('https://type.fit/api/quotes');
      // this await here is very important here to fetch all the data completely
      const data = await response.json();
      setQuotesList(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleGenerateQuote = () => {
    // by clicking the button it will will movie to the next index
    const nextIndex = (index + 1) % quotesList.length;
    setIndex(nextIndex);
  }
  return (
    <div className="App" style={{ backgroundColor: currentBgColor.backgroundColor, height: '100vh' }}>
      <div className="Title">Quotes Generator</div>
      <button className='button' style={{ color: currentBgColor.backgroundColor }} onClick={handleGenerateQuote}>Generate Quotes</button>
      <div>
        <button className='createQuotes'>Create Quotes</button>
      </div>
      <CreateQuotes />
      <div className="card">
        {currentQuote && (
          <>
            <p className="text">{currentQuote.text}</p>
            <p className="author">{currentQuote.author.split(',')[0]}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
