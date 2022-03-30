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
    <div style={{marginLeft: "10px", marginRight: "10px"}}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
            <center>
              <h1>Dictionary</h1>
            </center>
        </Grid>

        <Grid item xs={12} sm={6}>
          <h3 style={{marginTop: 0, paddingTop: 0}}>
            Before you search... have you <em>really</em> tried to remember it?
          </h3>
          <center>
            <TextField placeholder="Search" onChange={(e) => handleChange(e)} />
          </center>
        </Grid>

        <Grid item xs={12} sm={6}>
          {searchTerm ? filteredWords : unfilteredWords}
        </Grid>
      </Grid>
    </div>
  );
};
