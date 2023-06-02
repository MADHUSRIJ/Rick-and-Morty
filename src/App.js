import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CharacterComponent from './components/CharacterContainer';

function App() {
  const baseURL = 'https://rickandmortyapi.com/api/character/';
  const [data, setData] = useState(null); 

  async function fetchData() {
    try {
      const response = await axios.get(baseURL);
      return response.data.results; 
    } catch (error) {
      throw new Error('Error fetching data: ' + error);
    }
  }

  useEffect(() => {
    const fetchDataAsync = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };

    fetchDataAsync();
  }, []);

  return (
    <div className="App">
      <div className='banner'>
          <div className='banner-image'>
            <img src='https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-png-lalingla-deviantart-21.png' alt='rick and morty'/>
          </div>
          <h1>The Rick and Morty</h1>
      </div>
      <div className='content'>
        {data === null ? ( 
          <p>Loading...</p>
        ) : (
          data.map((character, index) => (
            <CharacterComponent key={index} 
            characterImage = {character.image}
            characterName = {character.name}
            characterStatusColour={character.status === "Dead" ? 'red' : 'green'}
            characterStatus = {character.status}
            speciesName = {character.species}
            lastSeenLocation = {character.location?.name}
            characterOrigin = {character.origin?.name}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
