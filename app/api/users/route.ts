//http://localhost:3000/api/users

export async function GET() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Carol' },
    { id: 4, name: 'David' },
  ]
  return new Response(JSON.stringify(users))
}
