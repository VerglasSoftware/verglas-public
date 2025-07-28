/**
 * Get the correct image path for both development and production
 * In development, Vite serves from public folder directly
 * In production, we need to account for the base path
 */
export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use the base URL from Vite's environment
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Return the full path
  return `${baseUrl}${cleanPath}`;
}
