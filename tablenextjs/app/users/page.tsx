import React from "react";
import { User, columns } from "./columns";
import { DataTable } from "@/components/data-table";

async function getUsers(): Promise<User[]> {
  // Fetch data from your API here.
  const res = await fetch(`https://67eedf47c11d5ff4bf7b2fe5.mockapi.io/users`);
  const data = await res.json();
  return data;
}

export default async function page() {
  const data = await getUsers();
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">All users</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
