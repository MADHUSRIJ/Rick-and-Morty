import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterComponent from './CharacterComponent';

function CharactersComponent(){
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

    return(
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
    );
}

export default CharactersComponent;