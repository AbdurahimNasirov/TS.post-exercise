"use strict";
let statePosts;
let statePhotos;
let stateComments;
let limitPosts = 9;
const getPost = async () => {
    const req = await fetch('https://638f979d4bfe20f70ad5672b.mockapi.io/posts');
    const res = await req.json();
    return await res;
};
const getPhotos = async () => {
    const req = await fetch('https://638f979d4bfe20f70ad5672b.mockapi.io/photos');
    const res = await req.json();
    return await res;
};
const getComments = async () => {
    const req = await fetch('https://638f979d4bfe20f70ad5672b.mockapi.io/comments');
    const res = await req.json();
    return await res;
};
const getPaginatedPosts = async (id) => {
    const req = await fetch(`https://638f979d4bfe20f70ad5672b.mockapi.io/posts?_page=${id}?_limit=9`);
    const res = await req.json();
    return res;
};
const putComment = async (id, body) => {
    const req = await fetch(`https://638f979d4bfe20f70ad5672b.mockapi.io/comments/${id}/`, {
        method: 'PUT',
        body: JSON.stringify({
            body,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
};
