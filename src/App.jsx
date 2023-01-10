import React, {useState} from 'react'
import './App.css'
import AnimCursor from './components/AnimCursor'


const facts_url = "https://catfact.ninja/fact?max_length=100";

const App = () => {
  const [fact, setFact] = useState("Domestic cats often recognize their own names.");

  const getFact = () => {
    fetch(facts_url)
      .then((res) => res.json())
      .then((cats) => {
        console.log('Cats: ', cats);
        const fact = cats["fact"];
        setFact(fact);
      })
      .catch((error) => {
        setFact("Can't get any cat facts right now :(((")
        console.log('Error: ', error);
      });
  }

  console.log("Cat fact: ", fact);

  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Sofia&display=swap" rel="stylesheet"/>
      </head>
      <AnimCursor/>
      <header>
          <h1 className="title">Factual Cat</h1>
          <div class="textbox">        
              <h3 class="fact">{fact}</h3>
          </div>
            <button className="btn" onClick={getFact}>Get the Faxs</button>
      </header>
    </html>
  )
}

export default App;