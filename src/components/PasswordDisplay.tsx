import React from 'react';
import { Copy, Check } from 'lucide-react';

interface PasswordDisplayProps {
  password: string;
  copied: boolean;
  onCopy: () => void;
}

export function PasswordDisplay({ password, copied, onCopy }: PasswordDisplayProps) {
  return (
    <div className="relative mb-6">
      <div className="bg-gray-900/50 p-4 rounded-lg flex items-center justify-between break-all min-h-[60px] transition-all duration-200 hover:bg-gray-900/70">
        <span className="font-mono">{password}</span>
        <button
          onClick={onCopy}
          className={`ml-2 p-2 hover:bg-gray-700/50 rounded-lg transition-all duration-200 ${copied ? 'copy-success' : ''}`}
          disabled={!password || password === 'Please select at least one option'}
        >
          {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
}