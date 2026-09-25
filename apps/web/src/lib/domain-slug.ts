/**
 * URL slug for a domain key.
 *
 * Domain pages are generated from this slug, so any link to a domain page has
 * to build its href from the same function. Slugs built from the display label
 * instead (for example `Housing & homelessness tech`) point at paths that were
 * never exported, because the label keeps characters the slug drops.
 *
 * This lives in its own module, separate from `data.ts`, because client
 * components link to domain pages and `data.ts` reads YAML through `node:fs`.
 */
export function domainSlug(key: string): string {
  return key.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}
