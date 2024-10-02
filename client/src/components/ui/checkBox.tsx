import { useState } from 'react';
interface CheckBoxProps{
  isChecked: boolean
  setIsChecked: (value: boolean) => void
}
export default function CheckBox({isChecked, setIsChecked}: CheckBoxProps) {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="hidden"
      />
      <div
        className={`w-5 h-5 flex items-center justify-center border-2 rounded-md transition-all duration-200 ${
          isChecked ? 'bg-green border-green' : 'border-gray-300'
        }`}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </label>
  );
}
