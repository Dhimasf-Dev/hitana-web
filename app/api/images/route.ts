import ImageKit from "imagekit";
import { NextResponse } from "next/server";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const PUBLIC_KEY = process.env.IMAGEKIT_PUBLIC_KEY || "";
const PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY || "";
const URL_ENDPOINT = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/hitana";

const imagekit = new ImageKit({
  publicKey: PUBLIC_KEY,
  privateKey: PRIVATE_KEY,
  urlEndpoint: URL_ENDPOINT,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder") || process.env.IMAGEKIT_FOLDER || "Foto";
  const batchLimit = 1000;
  let skip = 0;
  const allFiles: any[] = [];

  try {
    if (!PUBLIC_KEY || !PRIVATE_KEY || !URL_ENDPOINT) {
      return NextResponse.json({ error: "Missing ImageKit env vars. Set IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT." }, { status: 500 });
    }

    while (true) {
      const files = await imagekit.listFiles({
        path: folder,
        sort: "DESC_CREATED",
        limit: batchLimit,
        skip,
      });
      allFiles.push(...files);
      if (!files.length || files.length < batchLimit) break;
      skip += files.length;
    }

    const items = allFiles
      .filter((f) => f.fileType === "image")
      .map((f) => ({
        id: f.fileId,
        name: f.name,
        url: f.url,
        thumbnail: f.thumbnailUrl || f.url,
        width: f.width,
        height: f.height,
        createdAt: f.createdAt,
      }));

    return NextResponse.json({ items, count: items.length, folder });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Failed to list images" }, { status: 500 });
  }
}


