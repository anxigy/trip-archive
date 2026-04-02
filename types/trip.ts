export type Trip = {
  id: string;
  title: string;
  country: string;
  startDate: string;
  endDate: string;
  coverImage?: File | null;
  summary?: string;
  memo?: string;
  createdAt: string;
};

export type TripFormInput = Omit<Trip, "id" | "createdAt">;
