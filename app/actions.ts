"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COMPLETED_MISSIONS_COOKIE = "scl_completed_missions";

const victoryMessages: Record<string, string> = {
  "kitchen-rescue":
    "The kitchen has temporarily rejoined civilization. The spoon in the living room remains under investigation.",
  "bathroom-reset":
    "The bathroom no longer has an attitude. Toothpaste Splatter has been contained.",
  "laundry-mountain":
    "Laundry Mountain has lost altitude. Several socks are still missing, but morale is improving.",
  "closet-chaos":
    "The closet is no longer a booby trap. The shoe avalanche risk has been downgraded.",
  "companys-coming":
    "The house now looks like adults live here. The secret basket of chaos is classified.",
  "one-bag-declutter":
    "One bag of chaos has been removed from the premises. The clutter has filed an appeal.",
};

function parseCompletedMissions(value: string | undefined) {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed)
      ? parsed.filter((item) => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

export async function completeMission(formData: FormData) {
  const mission = String(formData.get("mission") || "");

  const cookieStore = await cookies();
  const completedMissions = parseCompletedMissions(
    cookieStore.get(COMPLETED_MISSIONS_COOKIE)?.value
  );

  const updatedMissions = Array.from(
    new Set([...completedMissions, mission])
  ).filter(Boolean);

  cookieStore.set(COMPLETED_MISSIONS_COOKIE, JSON.stringify(updatedMissions), {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  const message =
    victoryMessages[mission] ||
    "Mission survived. Super Cleaning Lady is proud, slightly tired, and not asking questions.";

  redirect(`/victory?message=${encodeURIComponent(message)}`);
}