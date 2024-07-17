import { FaS } from 'react-icons/fa6'
import JobListings from '../components/JobListings'

const JobsPage = () => {
  return (
    <section className="bg-blue-50 px-40 py-6"> 
       <JobListings home={false}/>
    </section>
  )
}

export default JobsPage
