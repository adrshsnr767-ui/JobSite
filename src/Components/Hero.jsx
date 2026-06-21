import React from 'react'
import Background from '../assets/BG.jpg';
import Logo from '../assets/logo.png';
import Man from '../assets/Man.png';
import Persons from '../assets/review.png';

const Hero = () => {
    return (
        <>
            <div>
                <div className=' w-full h-auto bg-cover overflow-hidden pb-5 md:pb-10 lg:pb-[5rem]'
                    style={{ backgroundImage: `url(${Background})` }}>





                    <header className=' w-full h-auto md:h-[15vh] max-w-[1500px] mx-auto px-[6rem]   items-center flex   gap-29 font-light
                   hidden xl:block xl:flex '>

                        <div className=' cursor-pointer'>
                            <img src={Logo} alt="logo" className=' w-[145px]' />
                        </div>


                        <div >
                            <ul className=' text-[white] flex justify-between items-center gap-16 '>
                                <li className=' cursor-pointer'>Home</li>
                                <li className=' cursor-pointer'>Find jobs</li>
                                <li className=' cursor-pointer'>Employers</li>
                                <li className=' cursor-pointer'>Candidates</li>
                                <li className=' cursor-pointer'>Blog</li>
                                <li className=' cursor-pointer'>Pages</li>



                                <div className=' text-[white] flex  items-start gap-7'>
                                    <span className=' w-[180px] h-[50px] border rounded-[10px] text-[16px] flex  items-center justify-center hover:bg-[white] hover:text-[#2F2EA6] transition-all duration-300 cursor-pointer'>

                                        Login / Register
                                    </span>
                                    <span className=' w-[120px] h-[50px] border rounded-[10px] text-[16px] flex  items-center justify-center bg-[white] text-[#2F2EA6] cursor-pointer'>
                                        Add job
                                    </span>


                                </div>
                            </ul>


                        </div>




                    </header>



                    {/* break */}



                    <div className=' w-[100%] h-auto max-w-[1500px] mx-auto px-[1rem] lg:px-[6rem] lg:mt-[5rem] flex relative z-50 '>

                        <div className=' w-full mt-[1rem] md:mt-[7rem]  flex flex-col gap-5  md:gap-10'>
                            <h1 className=' text-[white] text-3xl md:text-5xl font-semibold w-[80vw] md:w-[80%] leading-14'>
                                Find Your Perfect Job
                               Match
                            </h1>

                            <p className=' text-[white]'>
                                Find Jobs, Employment & Career Opportunities
                            </p>

                            <div>


                                <div className='h-auto  w-full bg-[white] rounded-[10px] p-4  md:p-0
                                md:w-auto md:h-[95px]'>
                                    <div className=' gap-6  h-auto py-2 flex flex-col 
                                    md:flex-row md:gap-0'>


                                        <div className='  flex  items-center  pl-4 
                                        md:flex-1  md:w-[45%]'>
                                            <i className="ri-search-line text-2xl  text-[#666666] " ></i>  <input type='text' className=' flex-1 min-w-0 outline-none px-2' placeholder='Job title, keywords...' />

                                        </div>

                                        <div className=' hidden  border-l border-[#e8e8e8] py-10 flex-shrink-0 
                                        md:block'>



                                        </div>


                                        <div className='   flex items-center pl-4
                                        md:w-[30%]'>

                                            <i className="ri-map-pin-line text-[1.4em]   text-[#666666]"></i><input type="text" className=' flex-1 min-w-0 outline-none px-2' placeholder='Job TItle, Keywords... ' />
                                        </div>


                                        <div className='  flex justify-center items-center
                                        md:w-[25%] '>
                                            <div className='w-[100%] md:w-[140px] h-[55px] border rounded-[10px] text-[16px] flex  items-center justify-center bg-[#F9AB00] text-[white] hover:bg-[white] hover:text-[#F9AB00]  cursor-pointer transition-all duration-300 cursor-pointer'>
                                                Find Jobs
                                            </div>
                                        </div>

                                    </div>

                                </div>



                            </div>


                            <div>

                                <h4 className=' text-[white]  [word-spacing:4px]'>
                                    Popular Searches :  Designer,  Developer,  Web,  IOS, PHP,  Senior Engineer</h4>
                            </div>

                            <div className=' mt-[1rem] xl:mt-[6rem] flex flex-col gap-3 md:flex-row justify-between items-center cursor-pointer'>
                                <div>
                                    <img src={Persons} alt="" />
                                </div>
                                <div className=' text-[white] flex flex-col  Unline-box' >
                                    <div className=' flex items-center gap-1'>
                                        <i class="ri-file-upload-line text-2xl"></i>  <span>Upload Your CV</span>
                                    </div>
                                    <span className='Main-unline'>

                                    </span>
                                </div>
                            </div>





                        </div>

                        <div className=' relative  left-35'>

                            <img src={Man} alt="man" className=' min-w-[650px] relative hidden xl:block   ' />
                        </div>



                    </div>




                </div>




            </div>
        </>
    )
}

export default Hero