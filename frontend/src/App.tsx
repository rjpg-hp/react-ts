import './App.css'

function App() {
  let count = 0;
  const setCount = (num: number) => {
    count = num;
    document.querySelector<HTMLButtonElement>('#btn')!.innerHTML = `Clicked me ${count} times`
  }

  return (
    <>
      <button id="btn" className='py-2 px-3 bg-blue-500 rounded-md text-2xl font-semibold cursor-pointer' onClick={()=>setCount(count + 1)}>Clicked me {count} times</button>
    </>
  )
}

export default App
