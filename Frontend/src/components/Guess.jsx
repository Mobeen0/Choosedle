import React from 'react'

function Guess(props) {

  return (
    <div className="mb-2 grid grid-cols-5 gap-2 w-1/4 portrait:w-4/5">
      {new Array(5).fill(0).map((_, i) => {
        const bgColor = !props.isGuessed
          ? 'bg-black'
          : props.guess[i].toUpperCase() === props.word[i]
          ? 'bg-green-400'
          : props.word.includes(props.guess[i].toUpperCase())
          ? 'bg-yellow-400'
          : 'bg-black'

        return (
          <div
            className={`flex h-16 w-16 items-center justify-center border border-gray-400 font-bold uppercase text-white m-auto z-10 ${bgColor}`}
          >
            {props.guess[i]}
          </div>
        )
      })}
    </div>
  )
}

export default Guess