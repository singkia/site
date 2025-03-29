addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  if (url.pathname === '/') {
    return new Response(await getIndexPage(), {
      headers: { 'content-type': 'text/html' },
    })
  }
  return new Response('Not found', { status: 404 })
}

async function getIndexPage() {
  const html = await fetch('https://example.com/index.html') // Will replace with actual path
  return html.text()
}
