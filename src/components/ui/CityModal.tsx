"use client";

import { cities } from "@/data/cities";

type Props = {
  open: boolean;
  onClose: () => void;
  onSelect: (city: string) => void;
  title: string;
};

export default function CityModal({ open, onClose, onSelect }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-80 max-h-100 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">انتخاب شهر</h2>

        <div className="flex flex-col gap-2">
          <button onClick={onClose} className="mt-4 text-sm text-red-500">
            بستن
          </button>
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => {
                onSelect(city);
                onClose();
              }}
              className="text-right p-2 rounded-md hover:bg-gray-100"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
