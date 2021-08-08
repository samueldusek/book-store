import React from "react";
import { Link, Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { useQuery } from "@apollo/client";
import { GET_BOOK } from "./queries";
import { useParams } from "react-router-dom";
import styles from "./styles/BookPageStyles";
import bookCovers from "./books";
import BookList from "./BookList";
import { getRandom1to5, getHumanReadableDate } from "./utils";

function BookPage({ classes }) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BOOK, { variables: { id } });

  let book = {};
  let chapters = {};

  if (!loading) {
    if (error) return <Redirect to="/error" />;
    book = data.book;
    chapters =
      book.chapters.length === 0 ? (
        <p>None</p>
      ) : (
        <ul className={classes.chapterList}>
          {book.chapters.map((chapter) => (
            <li className={classes.chapter} key={chapter.id}>
              {chapter.title}
            </li>
          ))}
        </ul>
      );
  }

  return (
    <main className={classes.BookPage}>
      {loading ? (
        <span>Loading..</span>
      ) : (
        <>
          <h1 className={classes.heading}>{book.title}</h1>
          <section className={classes.bookSection}>
            <div className={classes.bookInfo}>
              <div className={classes.bookCover}>
                <img src={bookCovers[(id - 1) % 10]} alt="Book cover" />
              </div>
              <div className={classes.bookInfoText}>
                <div className={classes.author}>
                  <h4 className={classes.infoHeading}>Author</h4>
                  <h2 className={classes.authorName}>
                    <Link to={`/book-store/authors/${book.author.id}`}>
                      {book.author.name}
                    </Link>
                  </h2>
                </div>
                <div className={classes.data}>
                  <h4 className={classes.infoHeading}>Chapters</h4>
                  {chapters}
                  <h4 className={classes.infoHeading}>Published</h4>
                  <h3 className={classes.bookData}>
                    {getHumanReadableDate(book.date_published)}
                  </h3>
                  <h4 className={classes.infoHeading}>ISBN</h4>
                  <h3 className={classes.bookData}>{book.isbn}</h3>
                </div>
              </div>
            </div>
            <div className={classes.bookList}>
              <BookList oneCol maxBooks={4} page={getRandom1to5()} />
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default withStyles(styles)(BookPage);
