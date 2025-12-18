import { useState } from 'react'

import './App.css'
import Hellostudent from './day42/task1'
import Person from './day42/task2'
import Message from './day42/task3'
import Button from './day42/task4'
import Card from './day42/task5'
import Profilecard from './day42/task6'
import avatar from './assets/car.jpg'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>sasi</h1>
      <Hellostudent></Hellostudent>
      <Person name ='sasi' age ='21'></Person>
      <Message message="Hello, Sasi! Welcome to React."></Message>
      <Button text="Submit"> </Button>
      <Card>
        <h1 style={{color:"black"}}>This is child  card</h1>
      </Card>
      <Profilecard  avatar={avatar} name='sasi' job='developer' />



      


      
      

    </>
  )
}

export default App
