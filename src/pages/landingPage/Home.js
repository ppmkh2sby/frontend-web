import React from 'react';
import ppm from '../../assets/image/ppm.jpg';
import Activities from './Activities';
import About from './About';
import Navbar from '../../components/Navbar';

const Home = () => {
    return (
        <>
            <div className="bg-neutral-100 w-full h-screen flex items-center justify-center"
                style={{
                    backgroundImage: `url(${ppm})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className='absolute flex-col text-white text-center font-bold text-[40px]'>
                    <h1 className=''>PONDOK PESANTREN MAHASISWA</h1>
                    <h1 className=''>KHOIRUL HUDA 2 SURABAYA</h1>
                </div>
            </div>
            <Navbar />
            <About />
            <Activities />
        </>
    )
}

export default Home
