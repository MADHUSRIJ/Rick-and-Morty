import React from "react";
import {useQuery} from 'react-query';
import axios from 'axios';
import CharacterComponent from './CharacterComponent';

function CharactersComponent(){
  const baseURL = 'https://rickandmortyapi.com/api/character/';

  const fetchData = async() => {
    try {
      const response = await axios.get(baseURL);
      console.log(response.data)
      return response.data.results; 
    } catch (error) {
      throw new Error('Error fetching data: ' + error);
    }
  }

  const {data, status} = useQuery('characters',fetchData); 

  if(status === "loading"){
    return <div>Loading..</div>
  }
  if(status === "error"){
    return <div>Error!..</div>
  }

  
 

    return(
        <div className='content'>
        {
          data.map((character) => (
            <CharacterComponent 
            characterImage = {character.image}
            characterName = {character.name}
            characterStatusColour={character.status === "Dead" ? 'red' : 'green'}
            characterStatus = {character.status}
            speciesName = {character.species}
            lastSeenLocation = {character.location?.name}
            characterOrigin = {character.origin?.name}
            />
        ))
        }
      </div>
    );
}

export default CharactersComponent;