import React from 'react'

const About = () => {
    return (
        <div className='w-full h-screen relative flex items-center justify-center'>
            <div className='absolute text-[40px] text-black' style={{ left: '13%', top: '101px' }}>
                <h1 className=''>ABOUT US</h1>
            </div>
            <div className='border-solid border-2 border-purple-400 rounded-lg w-[670px] h-[350px] mt-12 drow-shadow-lg top-[140px] flex items-center justify-center'>
                <div className='w-1/2 pl-6'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quasi, inventore ipsam voluptas, ducimus facilis esse quis quidem autem, unde id! Pariatur officia saepe facilis natus non harum omnis inventore.</p>
                </div>
                <div className='w-1/2 flex flex-col justify-center'>
                    <div className='absolute bg-green-400 w-[150px] h-[50px] bottom-[110px] rounded-lg flex items-center'>
                        <ion-icon name="people"></ion-icon>
                        <div className='flex flex-col items-center'>
                            <div className='font-bold text-[19px]'>36</div>
                            <div className='font-bold text-[19px]'>Santri</div>
                        </div>
                    </div>
                    <div className='absolute ml-40 bg-yellow-400 w-[150px] h-[50px] bottom-[110px] rounded-lg flex items-center'>
                        <ion-icon name="people"></ion-icon>
                        <div className='flex flex-col items-center'>
                            <div className='font-bold text-[19px]'>3</div>
                            <div className='font-bold text-[19px]'>Pengajar</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
