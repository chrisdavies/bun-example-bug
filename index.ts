Bun.serve({
  async fetch(req: Request): Promise<Response> {
    // Replacing the await import with require fixes the issue.
    // const { Page } = require('./hi');
    //
    // Also, adding an extra await here fixes the issue...
    // await new Promise((r) => setTimeout(r, 1));
    //
    // But just doing the import here causes req.text() to return ""
    const { Page } = await import('./hi');

    if (req.method === 'POST') {
      const data = await req.text();
      console.log('You posted: "' + data + '"');
    }

    return Page(req);
  },
});
