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
  const borderColor = person.rank < 5 ? "green" : "red";

  return (
    <div
      style={{
        border: `4px solid ${borderColor}`,
        padding: "10px",
        margin: "10px",
        width: "200px",
        textAlign: "center"
      }}
    >
      <img
        src={person.image || "/placeholder.png"}
        alt={person.name}
        width={100}
        height={100}
        style={{objectFit: "cover" }}
      />
      <h3>{person.name}</h3>
      <p>{person.email}</p>
    </div>
  );
};

export default Card;