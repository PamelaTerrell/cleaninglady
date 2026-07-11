"use server";

import { redirect } from "next/navigation";

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

export async function completeMission(formData: FormData) {
  const mission = String(formData.get("mission") || "mission");
  const message =
    victoryMessages[mission] ||
    "Mission survived. Super Cleaning Lady is proud, slightly tired, and not asking questions.";

  redirect(`/victory?message=${encodeURIComponent(message)}`);
}