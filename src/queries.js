import { gql } from "@apollo/client";

export const GET_ALL_BOOKS = gql`
  query allBooks {
    books @jsonapi(path: "/v2/books?include=author") {
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
    book(id: $id) @jsonapi(path: "/v2/books/{args.id}?include=series") {
      title
      date_published
      isbn
      series {
        title
      }
    }
  }
`;

export const GET_ALL_AUTHORS = gql`
  query allAuthors {
    authors @jsonapi(path: "/v2/authors") {
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
      }
    }
  }
`;
