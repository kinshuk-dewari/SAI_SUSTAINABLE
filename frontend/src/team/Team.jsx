import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
    
    const result = import.meta.env.VITE_DATABASE_URL;
    const [advisoryCommittee, setAdvisoryCommittee] = useState([]);
    const [boardsOfDirectors, setBoardsOfDirectors] = useState([]);
    const [manager, setManager] = useState([]);
    const [fieldTeam, setFieldTeam] = useState([]);
    
    useEffect(() => {
        fetch(result+"/all-boardsOfDirectors")
            .then(res => res.json())
            .then(data => setBoardsOfDirectors(data));
    }, []);

    useEffect(() => {
        fetch(result+"/all-advisoryComittee")
            .then(res => res.json())
            .then(data => setAdvisoryCommittee(data));
    }, []);
    useEffect(() => {
        fetch(result+"/all-manager")
            .then(res => res.json())
            .then(data => setManager(data));
    }, []);
    useEffect(() => {
        fetch(result+"/all-fieldTeam")
            .then(res => res.json())
            .then(data => setFieldTeam(data));
    }, []);
    
  return (
    <div className='mt-28 px-16 lg:px-24 xl:px-28'>
      {/* SECTION OF THE TEAM  */}
      <h1 className=' w-full bg-[#5A8D51] text-center text-4xl md:text-5xl m-0 py-4 rounded-md font-bold uppercase text-[#F5F5F5]'> 
          Our Teams
          </h1>
        
      {/* board of directors */}
        <div className='font-bold text-[#5A8D51] text-left uppercase pt-16 text-xl md:text-2xl flex flex-col  p-2 '>
            board of directors
        </div>
      <div className='grid my-12 gap-8 lg:gap-24  grid-col-1 sm:grid-cols-2 md:grid-cols-3'>
                {
                    boardsOfDirectors.map((boardsOfDirectors,key) =>
                        <Link key={key} to={`/boardsOfDirectors/${boardsOfDirectors._id}`} >
                            <div className='hover:-translate-y-1  overflow-hidden hover:scale-[1.020] rounded-[18px] relative transition ease-in-out delay-150 shadow-lg md:mx-0' >
                                <img className='h-96 w-screen' src={`data:image/jpeg;base64,${boardsOfDirectors.imageURL}`} /> 
                                
                                <div className='absolute top-[74%] z-10 p-6 w-full text-white flex flex-col'>
                                    <p className='font-bold text-xl md:text-2xl capitalize'>{boardsOfDirectors.name}</p>
                                    <p className='font-semibold text-sm uppercase pb-[.75rem]'>{boardsOfDirectors.designation}</p>
                                </div>
                                <div className='top-[78%] blur-3xl absolute  bg-black p-10 w-full'></div>
                            </div>
                        
                        </Link>
                        
                        )
                }
                
        </div>
        <div className='font-bold text-[#5A8D51] text-left uppercase  text-xl md:text-2xl flex flex-col  p-2 '>
            advisory comittee
        </div>
        <div className='grid my-12 gap-8 lg:gap-24  grid-col-1 sm:grid-cols-2 md:grid-cols-3'>
                    {
                        advisoryCommittee.map((book,key) =>
                            <Link key={key} to={`/advisoryComittee/${book._id}`} >
                                <div className='hover:-translate-y-1  overflow-hidden hover:scale-[1.020] rounded-[18px] relative transition ease-in-out delay-150 shadow-lg md:mx-0' >
                                    <img className='h-96 w-screen' src={`data:image/jpeg;base64,${book.imageURL}`} /> 
                                    <div className='absolute top-[74%] z-10 p-6 w-full text-white flex flex-col'>
                                        <p className='font-bold text-xl md:text-2xl capitalize'>{book.name}</p>
                                        <p className='font-semibold text-sm uppercase pb-[.75rem]'>{book.designation}</p>
                                    </div>
                                    <div className='top-[78%] blur-3xl absolute  bg-black p-10 w-full'></div>
                                </div>
                            
                            </Link>
                            
                            )
                    }
                    
            </div>
        <div className='font-bold text-[#5A8D51] text-left uppercase  text-xl md:text-2xl flex flex-col  p-2 '>
            manager
        </div>
        <div className='grid my-12 gap-8 lg:gap-24  grid-col-1 sm:grid-cols-2 md:grid-cols-3'>
                    {
                        manager.map((book,key) =>
                            <Link key={key} to={`/manager/${book._id}`} >
                                <div className='hover:-translate-y-1  overflow-hidden hover:scale-[1.020] rounded-[18px] relative transition ease-in-out delay-150 shadow-lg md:mx-0' >
                                <img className='h-96 w-screen' src={`data:image/jpeg;base64,${book.imageURL}`} /> 
                                    <div className='absolute top-[74%] z-10 p-6 w-full text-white flex flex-col'>
                                        <p className='font-bold text-xl md:text-2xl capitalize'>{book.name}</p>
                                        <p className='font-semibold text-sm uppercase pb-[.75rem]'>{book.designation}</p>
                                    </div>
                                    <div className='top-[78%] blur-3xl absolute  bg-black p-10 w-full'></div>
                                </div>
                            
                            </Link>
                            
                            )
                    }
                    
            </div>
        <div className='font-bold text-[#5A8D51] text-left uppercase  text-xl md:text-2xl flex flex-col  p-2 '>
            field team
        </div>
        <div className='grid my-12 gap-8 lg:gap-24  grid-col-1 sm:grid-cols-2 md:grid-cols-3'>
                    {
                        fieldTeam.map((book,key) =>
                            <Link key={key} to={`/fieldTeam/${book._id}`} >
                                <div className='hover:-translate-y-1  overflow-hidden hover:scale-[1.020] rounded-[18px] relative transition ease-in-out delay-150 shadow-lg md:mx-0' >
                                <img className='h-96 w-screen' src={`data:image/jpeg;base64,${book.imageURL}`} /> 
                                    <div className='absolute top-[74%] z-10 p-6 w-full text-white flex flex-col'>
                                        <p className='font-bold text-xl md:text-2xl capitalize'>{book.name}</p>
                                        <p className='font-semibold text-sm uppercase pb-[.75rem]'>{book.designation}</p>
                                    </div>
                                    <div className='top-[78%] blur-3xl absolute  bg-black p-10 w-full'></div>
                                </div>
                            
                            </Link>
                            
                            )
                    }
                    
            </div>
                
    </div>
  )
}

export default Team