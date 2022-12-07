let statePosts: any
let statePhotos
let stateComments
let limitPosts = 9

interface postList {
  userId: number,
  id: number,
  title: string,
  body: string
}
interface photosList {
  postId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}
interface commentList {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}


const getPost = async (): Promise<postList> => {
  const req = await fetch('https://638f979d4bfe20f70ad5672b.mockapi.io/posts')
  const res = await req.json()
  return await res
}

const getPhotos = async (): Promise<photosList> => {
  const req = await fetch('https://638f979d4bfe20f70ad5672b.mockapi.io/photos')
  const res = await req.json()
  return await res
}

const getComments =  async (): Promise<commentList> => {
  const req = await fetch('https://638f979d4bfe20f70ad5672b.mockapi.io/comments')
  const res = await req.json()
  return await res
}

const getPaginatedPosts = async (id:number): Promise<postList> => {
  const req = await fetch(`https://638f979d4bfe20f70ad5672b.mockapi.io/posts?_page=${id}?_limit=9`)
  const res = await req.json()
  return res
}

const putComment = async (id: number, body:string): Promise<void> => {
  const req = await fetch(`https://638f979d4bfe20f70ad5672b.mockapi.io/comments/${id}/`, {
    method: 'PUT',
    body: JSON.stringify({
      body,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
}


