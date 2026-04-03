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
  pins?: Array<Pin>;
};
export type Pin = {
  id: number;
  tripId: string;
  name: string;
  category: string;
  description: string;
  lat: number;
  lng: number;
};

export type TripFormInput = Omit<Trip, "id" | "createdAt">;
