export interface Country {
  name: string
  flag: string
  dialCode: string
}

export const COUNTRIES: Country[] = [
  { name: 'Bangladesh', flag: '🇧🇩', dialCode: '+880' },
  { name: 'India', flag: '🇮🇳', dialCode: '+91' },
  { name: 'Pakistan', flag: '🇵🇰', dialCode: '+92' },
  { name: 'United States', flag: '🇺🇸', dialCode: '+1' },
  { name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44' },
  { name: 'Canada', flag: '🇨🇦', dialCode: '+1' },
  { name: 'Australia', flag: '🇦🇺', dialCode: '+61' },
  { name: 'United Arab Emirates', flag: '🇦🇪', dialCode: '+971' },
  { name: 'Saudi Arabia', flag: '🇸🇦', dialCode: '+966' },
  { name: 'Malaysia', flag: '🇲🇾', dialCode: '+60' },
  { name: 'Singapore', flag: '🇸🇬', dialCode: '+65' },
  { name: 'Nepal', flag: '🇳🇵', dialCode: '+977' },
  { name: 'Sri Lanka', flag: '🇱🇰', dialCode: '+94' },
  { name: 'Indonesia', flag: '🇮🇩', dialCode: '+62' },
  { name: 'Germany', flag: '🇩🇪', dialCode: '+49' },
  { name: 'France', flag: '🇫🇷', dialCode: '+33' },
]
