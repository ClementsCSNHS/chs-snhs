import { useState } from "react"

// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

export default function Expand() {
  const [open, setOpen] = useState(false)
  return (
    <p className="-mt-6 self-start text-xl text-gray-400 hover:cursor-pointer">
      <span
        onClick={() => {
          setOpen(!open)
        }}
      >
        How many points for competitions?
        <span>
          <FontAwesomeIcon
            icon={faPlus}
            className={`ml-2 aspect-square h-5 text-gray-400 ${
              open ? "hidden" : "inline"
            }`}
          />
          <FontAwesomeIcon
            icon={faMinus}
            className={`ml-2 aspect-square h-5 text-gray-400 ${
              open ? "inline" : "hidden"
            }`}
          />
        </span>
      </span>

      {open && (
        <div className="text-xl">
          <br />
          Science Bowl: (4 for State, 5 for Nats)
          <br /> Science Olympiad: (3 per competition, 4 for State, 5 for Nats)
          <br /> Google Science Fair: (3 points)
          <br /> Microsoft ImagineCup: (3 points)
          <br /> MIT ZERO: (3 points)
          <br /> Any Hackathon: (3 points)
          <br /> USAPHO, USABO, or USACHO: (3 Points)
          <br /> ACS Chemistry Scholarship Exam: (3 Points)
          <br /> UIL Science Competitions: (3 for Invitationals and Regionals, 4
          for State)
          <br />
          <br />
          Please report to one of the officers if you have competed in any
          science competitions.
        </div>
      )}
    </p>
  )
}
