import AircraftData from "@/components/aircraft-data";
import { createClient } from "@/lib/supabase/client";

export default async function Home() {
  const supabase = createClient();
  const { data, error, status } = await supabase
    .schema("bookings")
    .from("aircrafts_data")
    .select(`aircraft_code, model, range`);

  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">
        Welcome to the Airline Flights Record
      </h1>
      <p className="mt-4 text-lg text-foreground/80 tracking-tight md:w-lg">
        The database contains information about flight schedules, routes, and
        other relevant details.
      </p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight mt-12 border-b border-foreground/10 pb-2">
          Database Overview
        </h2>
        <p className="">Below you can see the Aircrafts table data.</p>

        <AircraftData aircrafts={data} />
      </div>
    </>
  );
}
