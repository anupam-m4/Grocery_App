import { useEffect, useRef, useState } from 'react'
import { COUNTRIES } from '../data/countries'

interface CountryCodeSelectProps {
  dialCode: string
  onChange: (dialCode: string) => void
}

function CountryCodeSelect({ dialCode, onChange }: CountryCodeSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const selected = COUNTRIES.find((country) => country.dialCode === dialCode) ?? COUNTRIES[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex items-center gap-1 whitespace-nowrap text-sm text-gray-900 dark:text-white"
      >
        <span>{selected.flag}</span>
        <span>{selected.dialCode}</span>
        <span className={`text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-10 mt-2 max-h-60 w-56 overflow-y-auto rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          {COUNTRIES.map((country) => (
            <button
              key={country.name}
              type="button"
              onClick={() => {
                onChange(country.dialCode)
                setIsOpen(false)
              }}
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <span>{country.flag}</span>
              <span className="flex-1">{country.name}</span>
              <span className="text-gray-400">{country.dialCode}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CountryCodeSelect
