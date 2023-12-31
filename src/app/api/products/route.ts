import { NextResponse } from "next/server";
import { wooCommerceClient } from "../../../woocommerce/client";

export const GET = async () => {
  const result = await wooCommerceClient.get("products", {
    per_page: 100,
    at: Date.now(),
  });
  return NextResponse.json(result.data);
};
