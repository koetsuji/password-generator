const CHARS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

const SIMILAR_CHARS = '1lI0Oo5S8B';

interface PasswordOptions {
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  excludeSimilar: boolean;
  excludeDuplicates: boolean;
}

export function generatePassword(length: number, options: PasswordOptions): string {
  let chars = '';
  if (options.uppercase) chars += CHARS.uppercase;
  if (options.lowercase) chars += CHARS.lowercase;
  if (options.numbers) chars += CHARS.numbers;
  if (options.symbols) chars += CHARS.symbols;

  if (options.excludeSimilar) {
    chars = chars.split('').filter(char => !SIMILAR_CHARS.includes(char)).join('');
  }

  if (!chars) return 'Please select at least one option';

  let password = '';
  const charArray = chars.split('');

  while (password.length < length) {
    const char = charArray[Math.floor(Math.random() * charArray.length)];
    if (options.excludeDuplicates && password.includes(char)) continue;
    if (options.excludeDuplicates && password.length + 1 === length && 
        new Set(charArray.filter(c => !password.includes(c))).size === 0) {
      password = '';
      continue;
    }
    password += char;
  }

  return password;
}