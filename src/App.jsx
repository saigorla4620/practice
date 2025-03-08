import React,{Component, useState} from 'react'
import './App.css'
import Comp1 from './components/comp1'
import Example from './components/comp2'
import Compenent1 from './components/task1/comp1'
import Component3 from './components/task2/component3'
import Component1 from './components/task2/component1'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Component2 from './components/task2/component2'
import Users from './components/task3/users'
import UpdateUser from './components/task3/updatePost'
import PostDisplay from './components/task3/posts'
import AddPost from './components/task3/Add'
import UpdatePost from './components/task3/updatePost'
import ColorChange from './components/comp1'
import Home from './Todo-app/Home'
import Calendar_comp from './Todo-app/Calender'
import CompleteTasks from './Todo-app/completetasks'
import Nav from './Todo-app/Nav'
import PendingTasks from './Todo-app/pending'
import Application from './components/task5/application'


function App() {
   const [SelectDate,setSelectDate] = useState("")
    return (
      <>
        
        {/* <div className='main'>
          <Compenent1/>

        </div> */}
        {/* <BrowserRouter>
        <Routes
        <Route path='/' element={<PostDisplay/>}/>
          <Route path='/adduser' element={<AddPost/>}/>
          <Route path='/update/:id' element={<UpdatePost/>}/>
         </Routes>
        </BrowserRouter> */}

        {/* ToDO App */}
        {/* <BrowserRouter>
      
        <Routes>
          
          <Route  path='/' element={<Calendar_comp />}/>
          <Route path='/complete-task' element={<CompleteTasks/>}/>
          <Route path="/pending-task" element={<PendingTasks/>}/>
          <Route path='/settask' element={<Home/>}/>
        </Routes>
        </BrowserRouter> */}

        <Application/>
        
        

      
     
      </>
    )
  
 
}

export default App
