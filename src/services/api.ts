import axios from "axios";
import { User } from "@/types";

const MOCK_API_URL = "https://mocki.io/v1/65571089-45c6-4240-a5d8-54006d94e848";
const FALLBACK_URL = "/mock-users.json";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(MOCK_API_URL);
    if (response.data && response.data.length > 0) {
      return response.data;
    }
    throw new Error("Empty response");
  } catch {
    const fallback = await axios.get<User[]>(FALLBACK_URL);
    return fallback.data;
  }
};
