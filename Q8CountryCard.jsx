function CountryCard({ country }) {
  return (
    <div className="card">
      <img src={country.flags.png} alt="flag" width="100" />
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
    </div>
  );
}

export default CountryCard;