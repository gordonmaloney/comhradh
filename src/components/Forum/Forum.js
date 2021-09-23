import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from '../../actions/posts'
import { getPosts } from "../../actions/posts";


export const Forum = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const posts = useSelector((state) => state.posts.reverse());

  const lesson = props.lesson;

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const [postData, setPostData] = useState({
    lesson: lesson,
    author: user.result.name,
    title: null,
    body: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
    dispatch(createPost(postData));
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mb: 2, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <h3>Start a new discussion</h3>
        <TextField
          label="Title"
          fullWidth
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        <TextField
          id="outlined-multiline-static"
          label="Your message"
          multiline
          rows={4}
          fullWidth
          onChange={(e) => setPostData({ ...postData, body: e.target.value })}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>

    {posts.map(post => post.lesson == lesson
    ?
      <>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p>- {post.author}</p>
      </>
    : null
    )}    


    </div>
  );
};