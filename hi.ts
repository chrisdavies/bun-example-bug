import fs from 'fs';

const payload = fs.readFileSync('./ipsum.md');

export function Page(_req: Request): Response {
  return new Response(
    `
      <form method="POST">
        <textarea name="big" placeholder="Enter something big">${payload}</textarea>
        <button>Save</button>
      </form>
    `,
    {
      headers: {
        'Content-Type': 'text/html',
      },
    }
  );
}
