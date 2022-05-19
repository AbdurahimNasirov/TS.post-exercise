"use strict";
let statePosts;
let statePhotos;
let stateComments;
let limitPosts = 9;
const getPost = async () => {
    const req = await fetch('http://localhost:3000/posts');
    const res = await req.json();
    return await res;
};
const getPhotos = async () => {
    const req = await fetch('http://localhost:3000/photos');
    const res = await req.json();
    return await res;
};
const getComments = async () => {
    const req = await fetch('http://localhost:3000/comments');
    const res = await req.json();
    return await res;
};
const getPaginatedPosts = async (id) => {
    const req = await fetch(`http://localhost:3000/posts?_page=${id}?_limit=9`);
    const res = await req.json();
    return res;
};
const putComment = async (id, body) => {
    const req = await fetch(`http://localhost:3000/comments/${id}/`, {
        method: 'PUT',
        body: JSON.stringify({
            body,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
};
