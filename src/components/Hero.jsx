import mloweImage from "../assets/mlowe.jpg"

function Hero() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your PDF file in the public folder
    link.download = 'My_Resume.pdf'; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-black text-white text-center py-16">
      <img src={mloweImage} alt="mlowe image" className="mx-auto mb-8 h-48 rounded-full 
      object-cover transform transition-transform duration-300 hover:scale-105 " />
      <h1 className="text-4xl font-bold">
        I'm {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]">Generation Mlowe</span>
        ,Front-end Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">I specialize in building modern and responsive web applications.</p>
      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-[#2E3192] to-[#1BFFFF] text-white
            hidden md:inline transform transition-transform duration-300 hover:scale-105 
            px-4 py-2 rounded-full">Contact with me</button>
        <button onClick={handleDownload} className="bg-gradient-to-r from-[#EA8D8D] to-[#A890FE] text-white
            hidden md:inline transform transition-transform duration-300 hover:scale-105 
            px-4 py-2 rounded-full">Resume</button>
      </div>
    </div>
  )
}

export default Hero
