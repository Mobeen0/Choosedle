import { observer } from 'mobx-react-lite'

export default observer(function ScreenKeyboard({ store }) {
  const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
  return (
    <div>
      {qwerty.map((row) => (
        <div className="flex justify-center mt-5">
          {row.split('').map((char) => {
            const bgColor = store.exactGuesses.includes(char.toUpperCase())
              ? 'bg-green-400'
              : store.inexactGuesses.includes(char.toUpperCase())
              ? 'bg-yellow-400'
              : store.allGuesses.includes(char.toUpperCase())
              ? 'bg-gray-400'
              : 'bg-gray-200'
            return (
              <div
                className={`rounded-md m-px flex h-10 w-10 items-center justify-center uppercase ${bgColor} z-20`}
              >
                {char}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
})