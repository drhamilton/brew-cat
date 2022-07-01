import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const DETAIL_ENDPOINT = (id) => `https://api.openbrewerydb.org/breweries/${id}`;

export default function BreweryDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState()

  useEffect(() => {
    fetch(DETAIL_ENDPOINT(id))
      .then(res => res.json())
      .then(res => setDetail(res))
      .catch(e => console.error('fetching failed', e));
  }, [id])

  console.log(detail)

  if (!detail) {
    return null;
  } 

  return (
    <main>
      <h1>Brewery {id}</h1>
      <p>Brewtown, Oregon 12345</p>
      <p>United States</p>
      <p>8005551234</p>
      <p>
        <a href='https://example.com'>View Website</a>
      </p>
      <Link to='/breweries'>Back to Breweries</Link>
    </main>
  );
}
