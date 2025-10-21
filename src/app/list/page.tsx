import { getPeople } from "@/lib/api";
import Card from "@/components/ui/card";

interface Person {
  id: number;
  name: string;
  email: string;
  rank: number;
  image?: string;
}

export default async function ListPage() {
  let people: Person[] = [];

  try {
    people = await getPeople();
  } catch (err) {
    return <p className="text-red-500">Failed to load people</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
  <h1 className="text-2xl font-bold mb-4 text-center">People List</h1>
  <div className="flex flex-wrap gap-4 justify-center">
    {people.map((person) => (
      <Card key={person.id} person={person} />
    ))}
  </div>
</div>
  );
}