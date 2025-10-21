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
    return <p style={{ color: "red" }}>Failed to load people</p>;
  }

  return (
    <div>
      <h1>People List</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {people.map((person) => (
          <Card key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}