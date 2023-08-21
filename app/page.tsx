'use client'
import Image from 'next/image'
import Card from '@/components/Card'
import { useEffect, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import { useGetJobsListQuery } from '@/store/features/job-listing-api';
import { JobPosting } from '@/types/jobPost';

const Home: React.FC = () => {
  
    /* CHANGE THE BACKGROUND IMAGE BASED ON THE SCREEN WIDTH  */
  const [windowWidth, setWindowWidth] = useState<number>(0)
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    };
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const headerImageSrc = windowWidth >= 542 ? '/images/bg-header-desktop.svg' : '/images/bg-header-mobile.svg';
  

  /* DATA HANDLING FROM THE AN API*/
  const {data:jobPosts, isLoading, isError} = useGetJobsListQuery()
  const [filteredJobListings, setFilteredJobListings] = useState<JobPosting[]>([]);
  if (jobPosts){

    if (filteredJobListings.length === 0) {
      setFilteredJobListings(jobPosts);
    }
  
    const onSelectedLanguagesChange = (keywords: string[]) => {
      const filteredJobs = jobPosts?.filter((job) => {
        return (
          keywords.length === 0 ||
          keywords.every((keyword) =>
            [job.role, job.level, ...job.languages, ...job.tools].some((text) =>
              text.toLowerCase().includes(keyword.toLowerCase())
            )
          )
        );
      });
      setFilteredJobListings(filteredJobs);
    };
    
  
    return (
      <div  className='bg-cyan-bg'>
        <div className="relative  bg-desaturated-dark-cyan ">
          <Image
              src={headerImageSrc}
              alt="Header"
              className="w-full"
              layout="intrinsic"
              width={800}
              height={100 }
            />
            <div className="absolute left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full  z-20">
                <SearchBar onSelectedLanguagesChange={onSelectedLanguagesChange}  />
          </div>
        </div>
            
        <div className="space-y-4 p-8 md:px-12  xl:px-28 bg-cyan-bg mt-16">
          {filteredJobListings?.map((job) => (
            <Card
              key={job.id}
              job={job}            
            />
          ))}
        </div>
      </div>
    );
  }else{
    return null
  }
};

export default Home;