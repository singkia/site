export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    if (url.pathname === '/') {
      return new Response(await this.getIndexPage(), {
        headers: { 'content-type': 'text/html' },
      })
    }
    return new Response('Not found', { status: 404 })
  },

  async getIndexPage() {
    return `
<!DOCTYPE html>
<html>
<head>
  <title>SO！Fxcking！COOL！</title>
  <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: hidden;
    }
    .text-container {
      text-align: center;
    }
    .cool-text {
      font-size: 5vw;
      font-weight: bold;
      animation: colorChange 6s infinite, fontChange 6s infinite;
    }
    @keyframes colorChange {
      0% { color: #FF00FF; text-shadow: 0 0 10px #FF00FF; }
      33% { color: #00FFFF; text-shadow: 0 0 10px #00FFFF; }
      66% { color: #00FF00; text-shadow: 0 0 10px #00FF00; }
      100% { color: #FF00FF; text-shadow: 0 0 10px #FF00FF; }
    }
    @keyframes fontChange {
      0%, 33% { font-family: Impact, sans-serif; }
      33%, 66% { font-family: Arial Black, sans-serif; }
      66%, 100% { font-family: Comic Sans MS, sans-serif; }
    }
  </style>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖕</text></svg>">
</head>
<body>
  <div class="text-container">
    <div class="cool-text">SO！Fxcking！COOL！</div>
  </div>
</body>
</html>
    `;
  }
}
