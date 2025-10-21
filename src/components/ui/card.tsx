"use client";

import React from "react";

interface Person {
  id: number;
  name: string;
  email: string;
  rank: number;
  image?: string;
}

interface Props {
  person: Person;
}

const Card: React.FC<Props> = ({ person }) => {
  const borderColor = person.rank < 5 ? "border-green-500" : "border-red-500";

  return (
    <div
  className={`border-4 ${borderColor} p-4 w-48 sm:w-64 md:w-72 flex-shrink-0 text-center shadow-md`}
>
  <img
    src={person.image || "/placeholder.png"}
    alt={person.name}
    className="w-24 h-24 mx-auto mb-2 object-cover rounded-full"
  />
  <h3 className="text-lg font-semibold truncate">{person.name}</h3>
  <p className="text-sm text-gray-600 truncate">{person.email}</p>
</div>
  );
};

export default Card;