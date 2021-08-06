import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOK } from "./queries";
import { useParams } from "react-router-dom";

function BookPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_BOOK, { variables: { id } });
  if (loading) return <div>Loading...</div>;
  console.log(data);
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

export default BookPage;
