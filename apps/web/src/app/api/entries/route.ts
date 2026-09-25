import { getAllEntries } from '@/lib/data';

// Resolved at build time so the route can be exported to a static file.
export const dynamic = 'force-static';

export async function GET() {
  return Response.json(getAllEntries(), {
    headers: { 'Access-Control-Allow-Origin': '*' },
  });
}
