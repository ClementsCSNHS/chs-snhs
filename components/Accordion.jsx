import React, { useState } from 'react';
function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className='text-xl'>
      {items.map((item, index) => (
        <div key={item.title}>
          <button type="button" onClick={() => handleClick(index)} className="flex items-center justify-between w-full p-6 font-medium text-left text-white border focus:ring-gray-800 border-gray-700 hover:bg-gray-800" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span>{item.title}</span>
            <svg className={`w-3 h-3 shrink-0 ${index === activeIndex && "rotate-180"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
          {index === activeIndex &&
            <div>
              <div className="p-6 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-gray-400">
                {item.content}
              </div>
            </div>
          }
        </div>
      ))}
    </div>
  );
}

export default Accordion;