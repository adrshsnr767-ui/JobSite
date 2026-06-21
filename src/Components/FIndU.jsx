import React from 'react'
import F1 from '../assets/f1.jpg';
import F2 from '../assets/f2.jpg';
import F3 from '../assets/f3.png';

const FIndU = () => {
    return (
        <>
            <div className=' font-["Jost"]'>
                <div className=' w-full h-auto mt-[6rem] pb-[3.5rem]'>
                    <div className='h-auto max-w-[1500px] mx-auto px-[1rem] lg:px-[6rem]'>
                        <div className=' flex flex-col gap-[4rem]'>
                            <div className=' flex flex-col mx-auto items-center gap-3'>
                                <span className=' text-3xl font-semibold'>How It Works?</span>
                                <span className=' text-[grey]'>Job for anyone, anywhere</span>
                            </div>

                            <div className=' flex gap-[2rem] overflow-x-auto scroll-smooth no-scrollbar p-5'>
                                <div className=' px-10 min-w-[400px] py-15 rounded-2xl shadow'>
                                    <div className=' bg-[white] flex flex-col gap-7 w-full'>


                                        <div className=' flex justify-center items-center'>
                                            <img src={F1} alt="f1" />
                                        </div>
                                        <div className=' flex flex-col items-center justify-center gap-3 text-center'>
                                            <span className=' text-[17.5px] font-[500]'>Free Resume Assesments</span>
                                            <span className=' text-[grey]'>
                                                Employers on average spend 31 seconds scanning resumes to identify potential matches.
                                            </span>
                                        </div>


                                    </div>
                                </div>

                                <div className=' px-10 min-w-[400px] py-15 rounded-2xl shadow'>

                                    <div className='flex flex-col gap-7 w-full'>
                                        <div className=' flex justify-center items-center'>
                                            <img src={F2} alt="f1" />
                                        </div>
                                        <div className=' flex flex-col items-center justify-center gap-3  text-center' >
                                            <span className='text-[17.5px] font-[500] '>Free Resume Assesments</span>
                                            <span className=' text-[grey]'>
                                                Employers on average spend 31 seconds scanning resumes to identify potential matches.
                                            </span>
                                        </div>

                                    </div>
                                </div>
                                <div className=' px-10 min-w-[400px] py-15 rounded-2xl shadow' >
                                    <div className=' flex flex-col gap-7 w-full'>
                                        <div className=' flex justify-center items-center'>
                                            <img src={F3} alt="f1" />
                                        </div>
                                        <div className=' flex flex-col items-center justify-center gap-3  text-center'>
                                            <span className=' text-[17.5px] font-[500]'>Free Resume Assesments</span>
                                            <span className=' text-[grey]'>
                                                Employers on average spend 31 seconds scanning resumes to identify potential matches.
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default FIndU