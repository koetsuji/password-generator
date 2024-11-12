import React from 'react';

interface PasswordOptionsProps {
  options: {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
    excludeSimilar: boolean;
    excludeDuplicates: boolean;
  };
  onOptionChange: (option: keyof typeof options) => void;
}

export function PasswordOptions({ options, onOptionChange }: PasswordOptionsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(options).map(([key, value]) => (
        <label
          key={key}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <input
            type="checkbox"
            checked={value}
            onChange={() => onOptionChange(key as keyof typeof options)}
            className="w-4 h-4 accent-emerald-400 bg-gray-700 border-gray-600 rounded transition-transform duration-200 group-hover:scale-110"
          />
          <span className="text-sm capitalize transition-colors duration-200 group-hover:text-emerald-400">
            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
          </span>
        </label>
      ))}
    </div>
  );
}