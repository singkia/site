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
  <title>FXCK!</title>
  <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #000;
      height: 100vh;
      overflow: hidden;
      position: relative;
    }
    .center-helper {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    .text-line {
      font-size: 20vw;
      font-weight: 900;
      font-family: Arial, sans-serif;
      background: linear-gradient(90deg, #ff00ff, #00ffff, #00ff00, #ff00ff);
      background-size: 300% auto;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      text-shadow: 0 0 20px rgba(255,255,255,0.5);
      animation: flowColors 4s linear infinite;
      line-height: 1;
      white-space: nowrap;
      display: inline-block;
    }
    @keyframes flowColors {
      0% { background-position: 0% center; }
      100% { background-position: 300% center; }
    }
    @media (max-width: 768px) {
      .text-line {
        font-size: 25vw;
      }
    }
  </style>
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖕</text></svg>">
</head>
<body>
  <div class="center-helper">
    <div class="text-line">FXCK!</div>
  </div>
</body>
</html>
    `;
  }
}
