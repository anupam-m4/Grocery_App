const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+*#', '0', '⌫']

interface NumericKeypadProps {
  onKeyPress: (key: string) => void
}

function NumericKeypad({ onKeyPress }: NumericKeypadProps) {
  return (
    <div className="grid grid-cols-3 gap-3 bg-gray-100 p-4 dark:bg-gray-800">
      {KEYS.map((key) => (
        <button
          type="button"
          key={key}
          onClick={() => onKeyPress(key)}
          className="rounded-lg bg-white py-4 text-lg font-medium text-gray-900 dark:bg-gray-700 dark:text-white"
        >
          {key}
        </button>
      ))}
    </div>
  )
}

export default NumericKeypad
