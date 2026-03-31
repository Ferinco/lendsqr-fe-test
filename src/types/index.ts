export interface Guarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  relationship: string;
}

export interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

export interface Education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: [number, number];
  loanRepayment: number;
}

export interface Profile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: "Male" | "Female";
  bvn: string;
  address: string;
  currency: string;
  maritalStatus: string;
  children: string;
  typeOfResidence: string;
}

export interface User {
  id: string;
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
  tier: 1 | 2 | 3;
  balance: number;
  accountNumber: string;
  bankName: string;
  profile: Profile;
  guarantor: Guarantor;
  accountBalance: number;
  education: Education;
  socials: Socials;
}
