import type { APIRoute } from 'astro';
import tokens from '../../../../tokens/tokens.json';

export const GET: APIRoute = () =>
  new Response(JSON.stringify(tokens, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
