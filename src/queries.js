import { gql } from "@apollo/client";

export const GET_ALL_BOOKS = gql`
  query allBooks {
    author @jsonapi(path: "/v2/books?include=author") {
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

export const GET_ONE_BOOK = gql`
  query getOneBook {
    author @jsonapi(path: "/v2/books/1?include=series") {
      title
      date_published
      isbn
      series {
        title
      }
    }
  }
`;
