import React from 'react'

const About = () => {
    return (
        <div className='w-full h-screen relative flex items-center justify-center'>
            <div className='absolute text-[40px] text-black' style={{ left: '13%', top: '101px' }}>
                <h1 className=''>ABOUT US</h1>
            </div>
            <div className='border-solid border-2 rounded-lg w-[670px] h-[350px] mt-12 shadow- xl top-[140px] flex items-center justify-center'>
                <div className='w-1/2 pl-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minima doloremque possimus vitae consequuntur beatae facilis sequi incidunt rem ut harum optio aliquam repellat, ratione voluptate quia ex nesciunt ullam, quibusdam vel accusantium similique. Sequi possimus praesentium vero, qui velit voluptate est, omnis rem minima, ad officia. Impedit, cupiditate officia.
                </div>
                <div className='w-1/2 flex flex-col'>
                    <div className='absolute bg-green-400 w-[150px] h-[50px] bottom-[110px] rounded-lg flex items-center'>
                        <div className='ml-3 text-4xl'>
                            <ion-icon name="people"></ion-icon>
                        </div>
                        <div className='flex flex-col items-center ml-4'>
                            <div className='font-bold text-[18px] pt-2'>36 Orang</div>
                            <div className='text-[19px] pb-2'>Santri</div>
                        </div>
                    </div>
                    <div className='absolute ml-40 bg-yellow-400 w-[150px] h-[50px] bottom-[110px] rounded-lg flex items-center'>
                        <div className='ml-3 text-4xl'>
                            <ion-icon name="people"></ion-icon>
                        </div>
                        <div className='flex flex-col items-center ml-4'>
                            <div className='font-bold text-[18px]'>3 Orang</div>
                            <div className='text-[19px]'>Pengajar</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
