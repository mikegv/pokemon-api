import './App.css';
import Form from './components/form/Form'
import Results from './components/results/Results'
import Header from './components/header/Header'
import useRequest from './hooks/useRequest'

function App() {
  const { fetchData, pokemonData } = useRequest()

  return (
    <div className="App">
      <Header />
      <Form fetchData={fetchData} />
      {Object.entries(pokemonData).length !== 0 ? <Results pokemonData={pokemonData} /> : null}
    </div>
  );
}

export default App;
