import { createClient } from "@/lib/supabase/client";

export default async function Home() {
  const supabase = createClient();
  const { data, error, status } = await supabase
    .schema("bookings")
    .from("aircrafts_data")
    .select();

  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">
        Welcome to the Airline Flights Record
      </h1>
      <p className="mt-4 text-lg text-foreground/80 tracking-tight">
        The subject field of this database is airline flights across various
        airports. The database contains information about flight schedules,
        routes, and other relevant details.
      </p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight mt-12 border-b border-foreground/10 pb-2">
          Database Overview
        </h2>
        <p className="">Below you can see the Aircrafts table data.</p>
        <pre className="border rounded-md p-4 overflow-auto max-h-80">
          Status: <br />
          {JSON.stringify(status, null, 2)}
        </pre>
        <pre className="border rounded-md p-4 overflow-auto max-h-80">
          Data: <br />
          {JSON.stringify(data, null, 2)}
        </pre>
        {error && (
          <pre className="border border-red-600 rounded-md p-4 overflow-auto max-h-80">
            Error: <br />
            {JSON.stringify(error, null, 2)}
          </pre>
        )}
        <p className="">
          Here you can see the data for each aircraft in the database.
        </p>
        <ul className="space-y-4">
          {data?.map((aircraft) => (
            <li
              key={aircraft.aircraft_code}
              className="text-sm font-mono border rounded-md p-4 overflow-x-auto"
            >
              Aircraft Code: {aircraft.aircraft_code} <br />
              Model: {aircraft.range}
              <pre>{JSON.stringify(aircraft.model, null, 2)}</pre>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
