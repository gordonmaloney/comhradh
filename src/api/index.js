import axios from 'axios';

//const API = axios.create({baseURL: 'http://localhost:5000' });
const API = axios.create({baseURL: 'https://comhradh.herokuapp.com/'}); 

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)

export const signIn = (formData) => API.post('/users/signin', formData)
export const signUp = (formData) => API.post('/users/signup', formData)
export const fetchUser = id => API.get(`/users/allusers/${id}`)
export const updateUser = (id, updatedUser) => API.patch(`/users/allusers/${id}`, updatedUser)