import { cookies } from "next/headers";

const COMPLETED_MISSIONS_COOKIE = "scl_completed_missions";

const missions = [
  "kitchen-rescue",
  "bathroom-reset",
  "laundry-mountain",
  "closet-chaos",
  "companys-coming",
  "one-bag-declutter",
];

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

function getRank(completedCount: number) {
  if (completedCount >= 6) return "Certified Household Hero";
  if (completedCount >= 4) return "Chaos Commander";
  if (completedCount >= 2) return "Sock Recovery Specialist";
  if (completedCount >= 1) return "Chaos Cadet";
  return "Unassigned Civilian";
}

export default async function MissionProgress() {
  const cookieStore = await cookies();
  const completedMissions = parseCompletedMissions(
    cookieStore.get(COMPLETED_MISSIONS_COOKIE)?.value
  );

  const completedCount = missions.filter((mission) =>
    completedMissions.includes(mission)
  ).length;

  const percent = Math.round((completedCount / missions.length) * 100);
  const rank = getRank(completedCount);

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#eadcc8] bg-[#fffaf2] p-8 text-center shadow-sm md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b48635]">
          Mission Progress
        </p>

        <h2 className="mt-4 text-4xl font-black">
          You have survived {completedCount} of {missions.length} missions.
        </h2>

        <p className="mt-4 text-lg leading-8 text-[#6a5a4b]">
          Current rank: <span className="font-black">{rank}</span>
        </p>

        <div className="mx-auto mt-8 h-4 max-w-2xl overflow-hidden rounded-full bg-[#eadcc8]">
          <div
            className="h-full rounded-full bg-[#2f261f]"
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-[#8a7866]">
          {percent}% of household chaos officially warned
        </p>
      </div>
    </section>
  );
}