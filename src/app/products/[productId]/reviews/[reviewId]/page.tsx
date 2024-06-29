import { notFound } from "next/navigation"

export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string }
}) {
  if (parseInt(params.reviewId) > 100) {
    notFound()
  }
  return (
    <h1>
      review {params.reviewId} of product {params.productId}
    </h1>
  )
}
