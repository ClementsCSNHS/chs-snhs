import React, { useState } from "react"

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(-1)
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index)
  }

  return (
    <div className="text-xl">
      {items.map((item, index) => (
        <div key={item.title}>
          <button
            type="button"
            onClick={() => handleClick(index)}
            className="flex w-full items-center justify-between border border-gray-700 p-6 text-left font-medium text-white hover:bg-gray-700 focus:ring-gray-800"
          >
            <span>{item.title}</span>
            <svg
              className={`h-3 w-3 shrink-0 ${
                index === activeIndex && "rotate-180"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
          {index === activeIndex && (
            <div>
              <div className="border border-gray-200 p-6 text-gray-400 dark:border-gray-700 dark:bg-gray-900">
                {item.content}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
