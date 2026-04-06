import CountryCard from "./Q8CountryCard";

function CountryList({ countries }) {
  if (!countries || countries.length === 0) {
    return <p style={{ textAlign: "center" }}>No countries found</p>;
  }

  return (
    <div className="grid">
      {countries.map(function(c, index) {
        return <CountryCard key={index} country={c} />;
      })}
    </div>
  );
}

export default CountryList;