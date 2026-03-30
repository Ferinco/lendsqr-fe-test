import { User } from "@/types";

const USERS_KEY = "lendsqr_users";

export const getStoredUsers = (): User[] | null => {
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : null;
};

export const setStoredUsers = (users: User[]): void => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getUserById = (id: string): User | undefined => {
  const users = getStoredUsers();
  return users?.find((u) => u.id === id);
};
