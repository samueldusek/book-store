import { gql } from "@apollo/client";

export const GET_ALL_BOOKS = gql`
  query allBooks($page: String!) {
    books(page: $page)
      @jsonapi(path: "/v2/books?page[number]={args.page}&include=author") {
      id
      title
      date_published
      isbn
      author {
        name
      }
    }
  }
`;

export const GET_BOOK = gql`
  query getBook($id: String!) {
    book(id: $id)
      @jsonapi(path: "/v2/books/{args.id}?include=chapters,author") {
      id
      title
      date_published
      isbn
      chapters {
        id
        title
      }
      author {
        id
        name
      }
    }
  }
`;

export const GET_ALL_AUTHORS = gql`
  query allAuthors($page: String!) {
    authors(page: $page)
      @jsonapi(path: "/v2/authors?page[number]={args.page}") {
      id
      name
    }
  }
`;

export const GET_AUTHOR = gql`
  query getAuthor($id: String!) {
    author(id: $id) @jsonapi(path: "/v2/authors/{args.id}?include=books") {
      id
      name
      birthplace
      date_of_birth
      date_of_death
      books {
        id
        title
        date_published
        isbn
      }
    }
  }
`;
