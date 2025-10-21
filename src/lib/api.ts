import axios from "axios";

const API_BASE = "https://fstar.dev/api/people";

export const getPeople = async () => {
  const res = await axios.get(API_BASE);
  return res.data;
};

export const createPerson = async (personData: {name: string, email: string, rank: number}, userId: string) => {
  const res = await axios.post(API_BASE, personData, {
    headers: { "x-user-id": userId }
  });
  return res.data;
};