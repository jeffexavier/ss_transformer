type ArrayText = any[] | string

interface Teste {
  teste: ArrayText,
  laga: ArrayText,
  id: number,    
  email: string
}

export async function GET() {
  return Response.json("teste")
}

export async function POST() {
  const teste: Teste = {
    teste: 'hahaha',
    laga: ['teste', 105465], // Não pode ter '0' na frente sendo um Number
    id: 6542,
    email: "jeffexavier@gmail.com"
  }

  return new Response(JSON.stringify(teste), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}