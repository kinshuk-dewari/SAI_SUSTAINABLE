import React from 'react'
// import { PhoneIcon,MapPinIcon,EnvelopeIcon} from "@heroicons/react/24/solid"
// import { useForm, SubmitHandler } from "react-hook-form";
import { FaPhone,FaRegEnvelope  } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
const Contact = () => {
  
  return (
    <div className='my-12 py-16  px-4 lg:px-24'>
    <h2 className=' font-[InstrumentSerif] text-4xl md:text-5xl m-0 py-8 font-bold text-center uppercase text-[#00261e]'>Contact</h2>
 
         
    <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    Lets get in  {" "}
                    <span className='underline decoration-[#5a8d51] xl:p-2'>
                        Touch ! 
                    </span> 
                </h4>

                <div className="space-y-10 flex md:flex-row gap-4 flex-col justify-center "> 
                       
                        <div className="flex flex-col items-center justify-evenly">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full text-left text-sm font-light">                                        
                                            <tbody>                                              

                                                <tr className="border-b  dark:border-[#5a8d51]">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                      <LuMapPin  className="text-[#5a8d51] h-7 w-7 animate-pulse"/></td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                <p className="text-xl text-[#5a8d51] font-bold"> MAIN OFFICE</p>
                                                        <p className="text-2xl">601, Yash Apartment, Plot No 16,</p>
                                                        <p className="text-2xl">Sector 27, Kharghar, Navi Mumbai,</p>
                                                        <p className="text-2xl">Maharashtra, India 410210</p>
                                                        </td>                                    
                                                </tr>                                            
                                                <tr className="border-b dark:border-[#5a8d51]">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                      <FaPhone className="text-[#5a8d51] h-7 w-7 animate-pulse"/></td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <p className="text-2xl">+91-9967343996</p></td>                                            
                                                </tr>
                                                <tr className="border-b dark:border-[#5a8d51]">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                      <FaRegEnvelope className="text-[#5a8d51] h-7 w-7 animate-pulse"/></td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <p className="text-2xl">saisustainableagro@gmail.com</p>
                                                    </td>                                            
                                                </tr>

                                                <tr className="border-b  dark:border-[#3a5b35]">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                      <LuMapPin  className="text-[#5a8d51] h-7 w-7 animate-pulse"/></td>
                                                    <td className="whitespace-nowrap px-6 py-4">
                                                        <p className="text-xl text-[#5a8d51] font-bold"> FIELD OFFICE</p>
                                                        <p className="text-2xl">Field Coordinator; SAI Sustainable Agro, </p>
                                                        <p className="text-2xl">Near RCA College, Dasmantpur;</p>
                                                        <p className="text-2xl">Koraput, Odisha, India- 764028</p>
                                                        
                                                    </td>                                    
                                                </tr>                                         
                                                                                          
                                                                                        
                                            </tbody>
                                        </table>
                                    
                                    </div>
                                </div>
                            </div>
                            
                           
                        </div>
                        {/* <form className="flex flex-col space-y-2 w-fit ">
                        <div className="flex space-x-2">
                            <input  placeholder="Name" className="contactInput " type="text" />
                            <input placeholder="Email" className="contactInput" type="email" />
                        </div>
                        <input placeholder="Subject" className="contactInput"  type="text" />
                        <textarea  placeholder="Message" className="contactInput" />
                        <button type="submit" className="py-5 px-10 rounded-md text-[#D7CBC4] uppercase font-bold bg-[#5a8d51]">Submit</button>
                    </form> */}
                  
                        
                    </div>
                    
                    

                </div>
 </div>
  )
}

export default Contact