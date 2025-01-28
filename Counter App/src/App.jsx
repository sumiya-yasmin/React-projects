import './App.css'
import { Counter, Display } from './components'
import { CounterProvider } from './contexts'
import { useTheme } from './Hooks'


function App() {
  const {theme} = useTheme();

  return (
    <CounterProvider>
        <div className={`${theme? 'bg-black text-white' : 'bg-gray-200 text-black'} w-screen flex flex-col items-center justify-center gap-[15px] rounded-md px-20 py-8 shadow-lg`}>
          <Display/>
          <Counter/>
        </div>
    </CounterProvider>
  )
}

export default App
