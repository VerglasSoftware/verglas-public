export function getImagePath(path: string): string {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  const baseUrl = import.meta.env.BASE_URL || "/";

  return `${baseUrl}${cleanPath}`;
}
