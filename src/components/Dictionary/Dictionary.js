import React, { useState } from "react";
import { WORDS } from "../Lessons/WORDS";
import { TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState(null);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const unfilteredWords = WORDS.map((WORD) => (
    <>
      {" "}
      <b>Lesson {WORD.lesson}</b>
      <List>

      {WORD.words.map((word) => (
        <ListItem>
          {word.gd} - {word.en}
        </ListItem>
      ))}
    </List>
    </>
  ));

  const filteredWords = WORDS.map((WORD) =>
    WORD.words
      .filter(
        (words) =>
          words.gd.includes(searchTerm) || words.en.includes(searchTerm)
      )
      .map((word) => (
        <Card style={{ margin: 20 }}>
          <CardContent>
            <h3 className="cardHeader">
              {word.gd} - {word.en}
            </h3>
            <Divider />
            <p className="cardFooter">lesson {WORD.lesson}</p>
          </CardContent>
        </Card>
      ))
  );

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div style={{  }}>
              <center><h1>Dictionary</h1></center>
</div>
        </Grid>

        <Grid item xs={6}>
          <h3>
            Before you search...
            <br />
            have you <em>really</em> tried to remember it?
          </h3>
          <TextField placeholder="Search" onChange={(e) => handleChange(e)} />
        </Grid>

        <Grid item xs={6}>
          {searchTerm ? filteredWords : unfilteredWords}
        </Grid>
      </Grid>
    </div>
  );
};
