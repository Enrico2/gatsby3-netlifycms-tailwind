import React from "react"

export const Arrow = ({ className, isOpen }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={!isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
      />
    </svg>
  )
}

export const CheckIcon = ({ feature }) => (
  <div>
    <div className="w-4 inline-block align-middle py-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    </div>{" "}
    {feature}
    <br />
  </div>
)
