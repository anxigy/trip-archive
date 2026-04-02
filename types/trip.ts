
export type Trip = {
    id: string;
    title: string;
    country: string;
    startDate: string;
    endDate: string;
    imageUrl?: string;
    summary?: string;
    memo?: string;
    createdAt: string;
  };

  export type TripFormInput = Omit<Trip, "id" | "createdAt">;