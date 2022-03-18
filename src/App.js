import  React, {  useState } from 'react';
import './App.css';
import SelectBreed from './components/selectBreed';

function App() {
  
  const [dogImg, setDogImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateDog = (message) => {
    setLoading(true);
    dogImg(message)
      .then((newDog) => {
        setDogImg(newDog);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Error al cargar un perro")
        setLoading(false);
      })
  }


  return (
    <div className="App">

      <SelectBreed updateDog={updateDog}/>
     
    </div>
  );
}

export default App;
