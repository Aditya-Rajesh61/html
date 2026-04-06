function BookCard({ book }) {
  const info = book.volumeInfo;
  return (
    <div className="card">
      {info.imageLinks && <img src={info.imageLinks.thumbnail} alt="cover" />}
      <h3>{info.title}</h3>
      <p>Author: {info.authors?.join(", ") || "N/A"}</p>
      <p>Publisher: {info.publisher || "N/A"}</p>
      <p>Year: {info.publishedDate || "N/A"}</p>
    </div>
  );
}

export default BookCard;