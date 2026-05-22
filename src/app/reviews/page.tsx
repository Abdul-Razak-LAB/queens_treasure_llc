import { getApprovedReviews } from "@/lib/store";

export const metadata = { title: "Reviews | Queens Treasure" };

export default async function ReviewsPage() {
  const reviews = await getApprovedReviews();

  return (
    <div>
      <h1 className="text-3xl font-black">Customer Reviews</h1>
      <p className="mt-2 text-black/70">Phase 2: social proof and user-generated content.</p>
      <div className="mt-6 space-y-3">
        {reviews.length === 0 ? <p className="text-sm">No published reviews yet.</p> : null}
        {reviews.map((review) => (
          <article key={review.id} className="card p-4">
            <p className="font-semibold">{review.product.name}</p>
            <p className="text-sm">{"★".repeat(review.rating)}</p>
            <p className="text-sm text-black/75">{review.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
