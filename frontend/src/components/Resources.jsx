import React,{useEffect,useState} from 'react'
import { FaLink } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Resources = () => {
  const result = import.meta.env.VITE_DATABASE_URL;
    const [blogs,setBlogs] = useState([]);
    
    useEffect(()=>{
        fetch(result+"/all-blogs")
        .then(res=>res.json())
        .then(data=>setBlogs(data));
    },[])
  return (
    <div className='bg-[#F5F5F5] min-h-screen mt-28 px-4 lg:px-24  text-black/75' >
      
      <div className=' w-full image text-center justify-center space-y-8 items-center flex flex-col pb-10'>
        
          <h1 className=' w-full bg-[#5A8D51] text-4xl md:text-5xl m-0 py-4 rounded-md font-bold uppercase text-[#F5F5F5]'> 
            Resources
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            {
                      blogs.map((blog,key) =>
                          
                      <div key={key} className='flex flex-col bg-[#ffffffdc] shadow-2xl p-2 rounded-md  md:flex-row items-start justify-center'>
                        <img  className=" rounded-xl w-[20rem]  p-4 " src={blog.image} alt={blog.image} />
                        <div className='flex flex-col p-4 items-start justify-start'>
                          <a href={blog.link} className='flex text-2xl text-[#14352e] gap-4 items-start hover:text-[#41b763] pl-4 uppercase font-bold '> 
                            <h1 className='text-black text-start text-xl'>{blog.title}</h1> 
                            <FaLink className='w-[28px] h-[28px]'/>
                          </a> 
                          <p className='text-lg p-2 text-start max-w-4xl '>{blog.description} </p>                  
                        </div>
                      </div>                       
                          
                          
            )}
          </div>
         
          
      </div>




    </div>
  )
}

export default Resources

