import React, { useState, useEffect } from 'react';

function App() {
  const [a, setA] = useState([]); 

  useEffect(() => {
    fetch("words.json")
      .then(res => res.json())
      .then(data => setA(data)) 
      .catch(err => console.log(err));
  }, []);

  let str="I am ragul"


  return (
    <>
     {
        str.split(" ").map((word, index) => {
          return (
            <div key={index}>
              {word}={a.find((item) => item.name === word)?.partsOfSpeech ||"others"}
            </div>
          )
        })
      
     }
          
    </>
  );
}

export default App;


