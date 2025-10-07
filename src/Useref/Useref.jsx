import React, { useRef, useState } from 'react'

const Useref = () => {
  const heading = useRef(null)
  const [clicks, setClicks] = useState(0) // ✅ state for counting clicks

  const colors = ['A','B','C','D','E','F',1,2,3,4,5,6,7,8,9]

  const genrateRandom = () => {
    let random = Math.random() * colors.length
    return Math.floor(random)
  }

  const handleClick = () => {
    // ✅ update the click count FIRST


    setClicks(prev => prev + 1)

    const head = heading.current
    if (!head) return

    // random color generation
    let hex = ''
    for (let i = 0; i < 6; i++) {
      hex += colors[genrateRandom()]
    }

    // rotation + color change
    head.style.transform = `rotate(${Math.random() * 360}deg)`
    head.style.transition = 'transform 0.5s ease'
    head.style.background = `#${hex}`
  }

  return (
    <div className="container mx-auto text-center select-none my-10 relative w-[90%] md:w-1/2 lg:w-1/3">
      {/* ✅ show the count */}
      <h2 className="text-2xl font-semibold p-3 absolute left-5">
        {clicks} Clicks
      </h2>

      <h1
        ref={heading}
        className="text-2xl select-none my-5 w-max duration-500 font-semibold mx-auto"
      >
        Salam
      </h1>

      <button
        onClick={handleClick}
        className="w-full bg-blue-500 p-1 outline-0 rounded-md cursor-pointer active:scale-95 duration-75 hover:bg-blue-600 text-white my-2"
      >
        Change Heading
      </button>
    </div>
  )
}

export default Useref
