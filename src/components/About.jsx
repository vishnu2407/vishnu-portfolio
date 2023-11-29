import React from "react";

const About = () => {
    return (
        <div className="w-full h-screen bg-blue-100 text-black-300 from-gray-800 to-black">
            <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
                <div name="about" className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#ef7e7e]">
                        About Me:
                    </p>
                    <p className='text-4xl py-10'>Passionate about crafting responsive front-end web applications, 
                    I'm on a journey of continuous learning, exploring back-end technologies, including MySQL databases, 
                    and discovering how to create comprehensive and dynamic solutions. Excited to bridge the gap between 
                    seamless user interfaces and robust data management...</p>

                </div>
            </div>
        </div>
                )
}

export default About;
