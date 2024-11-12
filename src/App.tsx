import React, { useState } from 'react';
import { Shield, RefreshCw } from 'lucide-react';
import { PasswordDisplay } from './components/PasswordDisplay';
import { PasswordOptions } from './components/PasswordOptions';
import { LengthSlider } from './components/LengthSlider';
import { generatePassword } from './utils/passwordGenerator';

function App() {
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);
  const [length, setLength] = useState(16);
  const [isGenerating, setIsGenerating] = useState(false);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    excludeSimilar: false,
    excludeDuplicates: false
  });

  const handleGeneratePassword = () => {
    setIsGenerating(true);
    const newPassword = generatePassword(length, options);
    setPassword(newPassword);
    setCopied(false);
    setTimeout(() => setIsGenerating(false), 150);
  };

  const handleCopyToClipboard = () => {
    if (!password || password === 'Please select at least one option') return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOptionChange = (option: keyof typeof options) => {
    setOptions(prev => ({ ...prev, [option]: !prev[option] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700 transition-all duration-300 hover:shadow-2xl hover:border-gray-600">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-emerald-400" />
            <h1 className="text-2xl font-bold">Password Generator</h1>
          </div>

          <PasswordDisplay
            password={password}
            copied={copied}
            onCopy={handleCopyToClipboard}
          />

          <div className="space-y-4 mb-6">
            <LengthSlider length={length} onChange={setLength} />
            <PasswordOptions options={options} onOptionChange={handleOptionChange} />
          </div>

          <button
            onClick={handleGeneratePassword}
            className={`w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg ${isGenerating ? 'click-scale' : ''}`}
          >
            <RefreshCw className={`w-5 h-5 transition-transform duration-300 ${isGenerating ? 'rotate-180' : ''}`} />
            Generate Password
          </button>
        </div>

        <div className="mt-4 text-center text-sm text-gray-400">
          Click the copy icon to copy to clipboard
        </div>
      </div>
    </div>
  );
}

export default App;