"use strict";
let lengthPaginate;
(async function basicFunction() {
    try {
        statePosts = await getPost();
        statePhotos = await getPhotos();
        stateComments = await getComments();
        lengthPaginate = Math.ceil(await statePosts.length / limitPosts);
        await postElement(statePosts, statePhotos, stateComments);
    }
    catch (error) {
        console.error(error);
    }
})();
function postElement(posts, photos, comments) {
    posts.forEach((post, i) => {
        const countComments = getCountComments(comments, post.id);
        const postItemEl = document.createElement('div');
        const postLinkEl = document.createElement('a');
        postLinkEl.append(postItemEl);
        postItemEl.classList.add('post-item');
        postItemEl.setAttribute('id', post.id);
        postLinkEl.href = post.id;
        postLinkEl.innerHTML = `
      <div class="post-item--img">
      <img src="${photos[i].url}" alt="postimage">
      </div>
      <div class="post-item--content">
        <h3 class="post-item--content-title">${post.title}</h3>
        <p class="post-item--content-comment">${post.body}</p>
      </div>
      <div class="post-item--footer">
        <span class="post-item--footer-comment">
          <img src="./src/assets/icons/comments.svg" class="post-item--footer-comment--icon" alt="">
          <span class="post-item--footer-comment--count">${countComments.length}</span>
        </span>
        <span class="post-item--footer-edit">
          <img src="./src/assets/icons/edit.svg" class="post-item--footer-edit--icon" alt="">
        </span>
      </div>
    `;
        postsBlock === null || postsBlock === void 0 ? void 0 : postsBlock.append(postLinkEl);
        postLinkEl.addEventListener('click', (e) => {
            e.preventDefault();
            // this.location.pathname =
            postSection.classList.remove('active');
            detailSection.classList.add('active');
            putComments(countComments);
            detailBannerImg.src = photos[i].url;
            detailBannerTitle.innerHTML = post.title;
            detailPostTextarea.value = post.body;
        });
    });
}
let textareaBody;
detailEditButton.addEventListener('click', () => {
    detailEditButton.classList.remove('active');
    detailEditedTextSaveBlock.classList.add('active');
    detailPostTextarea.disabled = false;
    textareaBody = detailPostTextarea.value;
});
function putComments(comments) {
    commentsList.innerHTML = '';
    comments.forEach((comment) => {
        commentsList.innerHTML += `
      <li class="comments-item">
        <div class="comments-item--left-block">
          <div class="avatar">
            <img src="./src/assets/icons/account.svg" alt="">
          </div>
        </div>
        <div class="comments-item--right-block">
          <div class="comments-item--right-block--user">
            <p class="user-name">${comment.name}</p>
            <span class="user-email">${comment.email}</span>
          </div>
          <div class="comments-item--right-block--content">${comment.body}</div>
        </div>
      </li>
    `;
    });
}
detailEditedTextCencelButton.addEventListener('click', () => {
    detailPostTextarea.value = textareaBody;
    detailPostTextarea.disabled = true;
    detailEditedTextSaveBlock.classList.remove('active');
    detailEditButton.classList.add('active');
});
detailEditedTextSaveButton.addEventListener('click', async () => {
    // await putComment()
    detailPostTextarea.disabled = true;
    detailEditedTextSaveBlock.classList.remove('active');
    detailEditButton.classList.add('active');
});
function getCountComments(comments, id) {
    return comments.filter((comment) => comment.postId === id);
}
homePageLink.addEventListener('click', (e) => {
    e.preventDefault();
    detailSection.classList.remove('active');
    postSection.classList.add('active');
});
function changePage(id) {
    console.log(id);
}
