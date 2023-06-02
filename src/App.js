import './App.css';
import CharactersComponent from './components/CharactersComponent';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <div className='banner'>
          <div className='banner-image'>
            <img src='https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-png-lalingla-deviantart-21.png' alt='rick and morty'/>
          </div>
          <h1>The Rick and Morty</h1>
      </div>
     <QueryClientProvider client={queryClient}>
         <CharactersComponent/>
     </QueryClientProvider>
    </div>
  );
}

export default App;
