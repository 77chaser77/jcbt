//http://localhost:3000/api/posts

export async function GET() {
  const users = [
    { id: 1, title: 'post1' },
    { id: 2, title: 'post2' },
    { id: 3, title: 'post3' },
    { id: 4, title: 'post4' },
  ]
  return new Response(JSON.stringify(users))
}
