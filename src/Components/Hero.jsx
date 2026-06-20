import React from 'react'
import Background from '../assets/BG.jpg';
import Logo from '../assets/logo.png';
import Man from '../assets/Man.png';
import Persons from '../assets/review.png';

const Hero = () => {
    return (
        <>
            <div>
                <div className=' w-full h-[120vh] bg-cover overflow-hidden'
                    style={{ backgroundImage: `url(${Background})` }}>





                    <header className=' w-full h-[15vh] max-w-[1500px] mx-auto px-[6rem]   items-center flex  hidden xl:block xl:flex gap-29 font-light'>

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



                    <div className=' w-[100%] h-[105vh]  max-w-[1500px] mx-auto px-[6rem] mt-[5rem] flex relative z-50 '>

                        <div className=' mt-[7rem] w-[80%] flex flex-col gap-10'>
                            <h1 className=' text-[white] text-5xl font-semibold w-[80%] leading-14'>
                                Find Your Perfect Job
                                Match
                            </h1>

                            <p className=' text-[white]'>
                                Find Jobs, Employment & Career Opportunities
                            </p>

                            <div>


                                <div className=' h-[95px] w-full bg-[white] rounded-[10px] '>
                                    <div className=' py-2 flex'>


                                        <div className='  w-[45%] flex  items-center flex-1  pl-4'>
                                            <i className="ri-search-line text-2xl  text-[#666666] " ></i>  <input type='text' className=' flex-1 min-w-0 outline-none px-2' placeholder='Job title, keywords...' />

                                        </div>

                                        <div className=' border-l border-[#e8e8e8] py-10 flex-shrink-0 '>



                                        </div>


                                        <div className='  w-[30%] flex items-center pl-4'>

                                            <i className="ri-map-pin-line text-[1.4em]   text-[#666666]"></i><input type="text" className=' flex-1 min-w-0 outline-none px-2' placeholder='Job TItle, Keywords... ' />
                                        </div>


                                        <div className=' w-[25%] flex justify-center items-center '>
                                            <div className=' w-[140px] h-[55px] border rounded-[10px] text-[16px] flex  items-center justify-center bg-[#F9AB00] text-[white] hover:bg-[white] hover:text-[#F9AB00]  cursor-pointer transition-all duration-300 cursor-pointer'>
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

<div className=' mt-[6rem] flex justify-between items-center cursor-pointer'>
<div>
    <img src={Persons} alt="" />
</div>
<div className=' text-[white] flex gap-2 items-center'>
    <i class="ri-file-upload-line text-2xl"></i>  <span>Upload Your CV</span>
</div>
</div>





                        </div>

                        <div className=' relative  W-[30%] left-35'>

                            <img src={Man} alt="man" className=' w-[950px] relative   ' />
                        </div>



                    </div>




                </div>




            </div>
        </>
    )
}

export default Hero