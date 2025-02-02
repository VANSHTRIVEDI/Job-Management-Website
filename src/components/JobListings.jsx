import JobListing from './JobListing'
import React from 'react'
import { useEffect,useState } from 'react'
import Spinner from './Spinner'

const JobListings = ({home=true}) => {

const[Jobs,setJobs]=useState([]);
const[loading,setloading]=useState(true);

useEffect(()=>{

  const fetchJobs=async()=>{
  const apiUrl=home==true?'/api/jobs?_limit=3':'/api/jobs'
    try {
      const res=await fetch(apiUrl)
      const data=await res.json();
       setJobs(data);
      
    } catch (error) {
      console.log("error fetching data",error)
    }
    finally{
      setloading(false);
    }
    
  }
  fetchJobs();
}
,[]);


  return (
    Jobs &&  <>
     <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">

        {home==true?'Recent Jobs ': 'Browse Jobs'}
       
      </h2>
     
      {
        loading?(<Spinner loading={loading}/>):
        (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">   
          {Jobs.map((jobs)=>(
              <JobListing key={jobs.id} job={jobs}/>
              )
            )
          } 
         </div>
        )
      }
       
        
  
    
    </div>
    
  </section>
    </>
   

  )
}

export default JobListings
