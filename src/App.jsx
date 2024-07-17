import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NodeFoundPage from './components/NodeFoundPage';
import JobPageSingular,{jobLoader} from './components/JobPageSingular';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import ScrollToTop from './components/ScrollToTop';
const App = () => {
  
  //addjob
  const addJob=async(newJob)=>
    {
      const res=await fetch('/api/jobs',
        {
          method:'POST',
            headers:{
              'Context-Type':'application/json'

            },
          body:JSON.stringify(newJob)
        }
      );
      return;
    };

    //deleteJob
    const deleteJob = async (id) => {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      });
      return;
    };

    //const
    const updateJob = async (job) => {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });
      return;
    };
  
   
    const router=createBrowserRouter(createRoutesFromElements(
    
    <Route path='/' element={<MainLayout/>}>
      
        <Route index element={<HomePage/>}/> 
        {/* //index is for default */}
        <Route path='/jobs'  element={<JobsPage/>}/>
        <Route path='/add-job'  element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path='/edit-job/:id'  element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
        <Route path='/jobs/:id'  element={<JobPageSingular deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path='*'  element={<NodeFoundPage/>}/>
        
    </Route>
    )
  )
  return <RouterProvider router={router}/>
 
};

export default App


// return (
//   <>
//    <Navbar/>
//    <Hero title="Become a React Dev " subtitle="Find the React job that fits your skills and needs "/>
//    <HeroCards/>
//    <JobListings/>
//    <ViewAllJobs/>


//   </>
// );





































/*
type rafc it create a arrow function and export at the bottom this is due to Es7 extention


type rfc for regular function
import React from 'react'

export default function App() {
  return (
    <div>
      
    </div>
  )
}

*/





/* 
{bool && "newmember"}
if first condition is true the will print the other


some basic jsx
const App = () => {
  const num=10;
  const name="Vansh Trivedi";
  const listOfNames=["vansh","Om","Aryan","Sandesh"];
  
  const styes={
    color:"blue",
    fontSize:"40px"
  }
  

  let bool=true;
  return (
    <>
      <h1 style={styes} classNameName='text-5xl'>My name is {name} and age is {num} and sum is {num+num}</h1>
      <ul>
      {
        listOfNames.map((listOfNames,index)=>(
          <li style={{color:"red",fontSize:"20px"}} key={index}>
          {index+" "+listOfNames}
          </li>
        )
      )
      }
      </ul>
     {bool==true?"hello":""}
     
     {bool && "newmember"} 
    
      
    </>
    
  )
  
}


style={{color:"red",fontSize:"20px"}} using tailind className 

First Set of Braces { ... }:When using JSX, any JavaScript expression needs to be enclosed in curly braces. This is similar to how you embed JavaScript expressions within HTML-like syntax in JSX.
Second Set of Braces { ... }:The style attribute expects an object. The second set of braces creates a JavaScript object that contains the styles.


*/




