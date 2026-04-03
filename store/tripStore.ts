import { Pin, Trip } from "@/types/trip";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type TripStore = {
  trips: Trip[];

  addTrip: (trip: Trip) => void;
  updateTrip: (trip: Trip) => void;
  deleteTrip: (id: string) => void;

  addPin: (tripId: string, pin: Pin) => void;
};

export const useTripStore = create<TripStore>()(
  persist(
    (set) => ({
      trips: [],
      addTrip: (trip) =>
        set((state) => ({
          trips: [...state.trips, trip],
        })),
      updateTrip: (updatedTrip) => {
        set((state) => ({
          trips: state.trips.map((t) =>
            t.id === updatedTrip.id ? updatedTrip : t
          ),
        }));
      },
      deleteTrip: (id) => {
        set((state) => ({
          trips: state.trips.filter((f) => f.id !== id),
        }));
      },
      addPin: (tripId, pin) => {
        set((state) => ({
          trips: state.trips.map((trip) =>
            trip.id === tripId
              ? {
                  ...trip,
                  pins: [...(trip.pins ?? []), pin],
                }
              : trip
          ),
        }));
      },
    }),
    {
      name: "trip-storage",
    }
  )
);
