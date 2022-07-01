import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const DETAIL_ENDPOINT = (id) => `https://api.openbrewerydb.org/breweries/${id}`;

export const BreweryDetailItem = ({name, city, state, postal_code, country, phone, website_url}) => {
  return (
    <main>
      <h1>{name}</h1>
      <p>{city}, {state} {postal_code}</p>
      <p>{country}</p>
      <p>{phone}</p>
      {website_url && <p>
        <a href={website_url} target="_blank">View Website</a>
      </p>}
      <Link to='/breweries'>Back to Breweries</Link>
    </main>
  );
}

export default function BreweryDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState()

  useEffect(() => {
    fetch(DETAIL_ENDPOINT(id))
      .then(res => res.json())
      .then(res => setDetail(res))
      .catch(e => console.error('fetching failed', e));
  }, [id])

  if (!detail) return null;

  return <BreweryDetailItem {...detail} />
}

