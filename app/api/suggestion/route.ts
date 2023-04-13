export async function GET(request: Request) {
 // Connect to our Microsoft Azure Function Endpoint
 const response = await fetch('...', {
  cache: 'no-cache',
 })

 const textData = await response.text();

 return new Response(JSON.stringify(textData.trim()), {
  status: 200,
 })
}
