//http://localhost:3000/api/posts/new

export async function GET() {
  const users = [
    { id: 1, title: 'new post1' },
    { id: 2, title: 'new post2' },
    { id: 3, title: 'new post3' },
    { id: 4, title: 'new post4' },
  ]
  return new Response(JSON.stringify(users))
}
