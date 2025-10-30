export function getImageKitUrl(
  pathOrUrl: string,
  options?: {
    transforms?: string;
    folder?: string;
  }
) {
  if (!pathOrUrl) return "";

  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/hitana";
  const folder = options?.folder ?? "Foto";

  let normalizedPath: string;
  if (pathOrUrl.startsWith("/")) {
    normalizedPath = pathOrUrl;
  } else if (pathOrUrl.startsWith(`${folder}/`)) {
    normalizedPath = `/${pathOrUrl}`;
  } else {
    normalizedPath = `/${folder}/${pathOrUrl}`;
  }

  const transforms = options?.transforms ? `/tr:${options.transforms}` : "";

  return `${endpoint}${transforms}${normalizedPath}`;
}
