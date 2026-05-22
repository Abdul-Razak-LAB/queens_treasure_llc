import { prisma } from "@/lib/prisma";

export default async function AdminContentPage() {
  let blocks: Awaited<ReturnType<typeof prisma.contentBlock.findMany>> = [];

  try {
    blocks = await prisma.contentBlock.findMany({ orderBy: { key: "asc" } });
  } catch {
    blocks = [];
  }

  return (
    <div>
      <h1 className="text-2xl font-black">Content Blocks</h1>
      <div className="mt-4 space-y-3">
        {blocks.length === 0 ? <p className="text-sm text-black/70">No content blocks found.</p> : null}
        {blocks.map((block) => (
          <article key={block.id} className="card p-4">
            <p className="font-semibold">{block.key}</p>
            <p className="text-sm text-black/70">{block.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
