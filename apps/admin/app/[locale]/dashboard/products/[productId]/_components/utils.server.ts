"use server";

import { Routes } from "@/lib/routes";
import { revalidatePath } from "next/cache";

export async function revalidateProducts() {
	revalidatePath(Routes.products());
}
