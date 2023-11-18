
  
  export async function GET() {
    const res = await fetch('https://cataas.com/api/cats', {
    //   next: { revalidate: 60 }, // Revalidate every 60 seconds
    })
    const data = await res.json()
   
    return Response.json(data)
  }