import React, { useEffect, useState,useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import HrMovieCard from './HrMovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
function MovieList({genereId,index_}) {
    const[movieList,setMovieList]=useState([])
    const elementRef=useRef(null);
    useEffect(()=>{
getMovieByGenreId()
    },[])


    const getMovieByGenreId=()=>{
        GlobalApi.getMoviewByGenreId(genereId).then(res=>{
setMovieList(res.data.results);
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }




  return (
    <div className='relative'>

<IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}/>






        <div ref={elementRef} className='flex overflow-x-scroll gap-8 pt-4 pb-4 px-3 scrollbar-hide scroll-smooth'>
            {movieList.map((item,index)=>(
                <>
                {
                    index_%3==0?
                    <HrMovieCard movie={item}/>
                    :
                    <MovieCard movie={item}/>
                }
                
                </>

            ))}
        </div>
        <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
      
    </div>
  )
}

export default MovieList
