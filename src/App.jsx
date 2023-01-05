import React from 'react'

const apiLey = "";
const url = "https://catfact.ninja/fact?max_length=100";

const App = () => {

  const getFact = () => {
    console.log("Hello World");

    fetch(url)
      .then((res) => res.json())
      .then((cats) => {
        console.log('Cats: ', cats);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }

  return (
    <div>        
        <h1>Factual Cat</h1>
        <button onClick={getFact}>Get the Faxs</button>
    </div>
  )
}

export default App;