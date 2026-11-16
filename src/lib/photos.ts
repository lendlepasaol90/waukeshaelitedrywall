import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });

const byName: Record<string, ImageMetadata> = {};
for (const [path, mod] of Object.entries(files)) {
  const name = path.split('/').pop()!.replace('.jpg', '');
  byName[name] = mod.default;
}

/** Look up a photo by its descriptive filename (without extension). */
export function photo(name: string): ImageMetadata {
  const img = byName[name];
  if (!img) throw new Error(`Photo not found: ${name}`);
  return img;
}
