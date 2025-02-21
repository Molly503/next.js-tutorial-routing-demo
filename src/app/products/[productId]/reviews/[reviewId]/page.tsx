"use client"
import { notFound } from "next/navigation"

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count)
}

export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string }
}) {
  // const random = getRandomInt(2)
  // if (random === 1) {
  //   throw new Error("Error loading review")
  // }
  if (parseInt(params.reviewId) > 100) {
    notFound()
  }
  return (
    <h1>
      review {params.reviewId} of product {params.productId}
    </h1>
  )
}
