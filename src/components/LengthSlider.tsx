import React from 'react';

interface LengthSliderProps {
  length: number;
  onChange: (value: number) => void;
}

export function LengthSlider({ length, onChange }: LengthSliderProps) {
  return (
    <div>
      <label className="block mb-2 text-sm">Password Length: {length}</label>
      <input
        type="range"
        min="8"
        max="32"
        value={length}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-400 transition-all duration-200 hover:accent-emerald-300"
      />
    </div>
  );
}