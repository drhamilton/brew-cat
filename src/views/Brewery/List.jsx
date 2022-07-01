import { Link } from 'react-router-dom';
import { useState } from 'react';

const BrewItem = ({ name, city, state, id }) => {
  const link = `/breweries/${id}`
  return (
    <li>
      <Link to={link}>{name}</Link> - {city}, {state}
    </li>
  )
}

const SEARCH_ENDPOINT = (search, perPage = 10) => `https://api.openbrewerydb.org/breweries/search?query=${search}&per_page=${perPage}`

export default function BreweryList() {
  const [brewlist, setBrewList] = useState([]);
  const [search, setSearch] = useState('')
  const [isAscending, setIsAscending] = useState(true)

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(SEARCH_ENDPOINT(search))
      .then(res => res.json())
      .then(res => setBrewList(res))
      .catch(e => console.error('searching failed', e))
  }

  const handleSortOrderChange = () => {
    setIsAscending(!isAscending)
  }

  return (
    <main>
      <h1>Brewery Catalog</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='search' placeholder='Find a brewery' value={search} onChange={handleSearch}/>
        <button type='submit'>Search</button>
        <button type='reset'>Reset</button>
      </form>
      <button onClick={handleSortOrderChange}>{isAscending ? 'Ascending' : 'Descending'}</button>
      <ul>
        {brewlist.sort((a, b) => isAscending ? a.name > b.name : a.name < b.name).map(({ id, name, city, state}) => <BrewItem key={id} name={name} city={city} state={state} id={id} />)}
      </ul>
    </main>
  );
}
