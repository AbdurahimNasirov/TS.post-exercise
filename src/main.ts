let lengthPaginate
(async function basicFunction() {
  try {
    statePosts = await getPost()
    statePhotos = await getPhotos()
    stateComments = await getComments()
    lengthPaginate = Math.ceil(await statePosts.length / limitPosts)
    await postElement(statePosts, statePhotos, stateComments)

  } catch (error) {
    console.error(error)
  }
})()

function postElement(posts: any, photos: any, comments: any):void {
  posts.forEach((post: any, i: number) => {
    const countComments: Array<commentList> = getCountComments(comments, post.id)
    const postItemEl: HTMLDivElement = document.createElement('div')
    const postLinkEl: HTMLAnchorElement = document.createElement('a')
    postLinkEl.append(postItemEl)
    postItemEl.classList.add('post-item')
    postItemEl.setAttribute('id', post.id)
    postLinkEl.href = post.id
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
    `
    postsBlock?.append(postLinkEl)
    postLinkEl.addEventListener('click', (e):void => {
      e.preventDefault()
      // this.location.pathname =
      postSection.classList.remove('active')
      detailSection.classList.add('active')
      putComments(countComments)
      detailBannerImg.src = photos[i].url
      detailBannerTitle.innerHTML = post.title
      detailPostTextarea.value = post.body
    })
  })
}

let textareaBody: string

detailEditButton.addEventListener('click', ():void => {
  detailEditButton.classList.remove('active')
  detailEditedTextSaveBlock.classList.add('active')
  detailPostTextarea.disabled = false
  textareaBody = detailPostTextarea.value
})

function putComments(comments: Array<any>):void {
  commentsList.innerHTML = ''
  comments.forEach((comment: commentList) => {
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
    `
  })
}

detailEditedTextCencelButton.addEventListener('click', ():void => {
  detailPostTextarea.value = textareaBody
  detailPostTextarea.disabled = true
  detailEditedTextSaveBlock.classList.remove('active')
  detailEditButton.classList.add('active')
})


detailEditedTextSaveButton.addEventListener('click', async():Promise<void> => {
  // await putComment()
  detailPostTextarea.disabled = true
  detailEditedTextSaveBlock.classList.remove('active')
  detailEditButton.classList.add('active')
})

function getCountComments(comments: any, id: number): Array<commentList> {
  return comments.filter((comment: any) => comment.postId === id)
}

homePageLink.addEventListener('click', (e): void => {
  e.preventDefault() 
  detailSection.classList.remove('active')
  postSection.classList.add('active')
})

function changePage(id:string) {
  console.log(id);

}