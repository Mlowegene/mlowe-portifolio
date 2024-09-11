import aboutImage from "../assets/mlowe02.jpg"

function About() {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <img src={aboutImage} alt="about me image" 
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0" />
            <div className="flex-1">
                <p className="text-lg mb-8">
                   Dedicated and skilled Frontend Web Developer with a passion for creating dynamic and
                   user-friendly web experiences. Proficient in HTML, CSS, JavaScript, and various frontend
                   frameworks. Seeking opportunities to leverage expertise in frontend development to contribute to
                   innovative projects and drive user engagement.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <label htmlFor="htmlandcss" className="w-2/12 font-semibold">HTML and CSS</label>
                        <div className="grow bg-gray-800 rounded-full h-2.5">
                            <div className="bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]
                            h-2.5 rounded-full transform transition-transform duration-300 
                            hover:scale-105 w-10/12"></div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="htmlandcss" className="w-2/12 font-semibold">Javascript</label>
                        <div className="grow bg-gray-800 rounded-full h-2.5">
                            <div className="bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]
                            h-2.5 rounded-full transform transition-transform duration-300 
                            hover:scale-105 w-11/12"></div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="htmlandcss" className="w-2/12 font-semibold">React JS</label>
                        <div className="grow bg-gray-800 rounded-full h-2.5">
                            <div className="bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]
                            h-2.5 rounded-full transform transition-transform duration-300 
                            hover:scale-105 w-10/12"></div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="htmlandcss" className="w-2/12 font-semibold">Next JS</label>
                        <div className="grow bg-gray-800 rounded-full h-2.5">
                            <div className="bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]
                            h-2.5 rounded-full transform transition-transform duration-300 
                            hover:scale-105 w-9/12"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex justify-between text-center">
                    <div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                            3+
                        </h3>
                        <p>Years experience</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                            20+
                        </h3>
                        <p>Projects Completed</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
