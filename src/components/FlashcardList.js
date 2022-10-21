import { Box } from "@mui/material";
import React from "react";

export default function FlashcardList(props) {
  return (
    <Box>
      {props.flashcards.map((flashcard) => {
        return <h1 key={flashcard.id}>{flashcard.front}</h1>;
      })}
    </Box>
  );
}
