import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countet from './ass43/task1'
import TextDisplay from './ass43/task2'
import ToggleButton from './ass43/task3'
import EvenOddChecker from './ass43/task4'
import ColorChanger from './ass43/task5'
import LoginForm from './ass43/task6'
import ThemeSwitcher from './ass43/task7'
import Counter from './ass43/task8'
import DropdownMenu from './ass43/task9'
import TodoApp from './ass43/task10'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Countet></Countet> 
      <TextDisplay></TextDisplay>
      <ToggleButton/>
      <EvenOddChecker/>
      <ColorChanger/>
      <LoginForm/>
      <ThemeSwitcher/>
      <Counter/>
      <DropdownMenu/>
      <TodoApp/>
     



    </>
  )
}

export default App
