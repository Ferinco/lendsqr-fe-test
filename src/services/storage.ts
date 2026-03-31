import { User } from "@/types";

const USERS_KEY = "lendsqr_users";
const CACHE_VERSION = "v2"; // bump this to bust stale cache
const CACHE_VERSION_KEY = "lendsqr_cache_version";

const isCacheValid = (): boolean => {
  return localStorage.getItem(CACHE_VERSION_KEY) === CACHE_VERSION;
};

export const getStoredUsers = (): User[] | null => {
  if (!isCacheValid()) {
    localStorage.removeItem(USERS_KEY);
    return null;
  }
  const data = localStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : null;
};

export const setStoredUsers = (users: User[]): void => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  localStorage.setItem(CACHE_VERSION_KEY, CACHE_VERSION);
};

export const getUserById = (id: string): User | undefined => {
  const users = getStoredUsers();
  return users?.find((u) => u.id === id);
};
