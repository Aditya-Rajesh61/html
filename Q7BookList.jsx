import BookCard from "./Q7BookCard";

function BookList({ books }) {
  if (!books) return <p style={{textAlign: "center"}}>No books found</p>;

  return (
    <div className="grid">
      {books.map(function(b, index) {
        return <BookCard key={index} book={b} />;
      })}
    </div>
  );
}

export default BookList;