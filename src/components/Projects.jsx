
import projectImage from "../assets/mlowe.jpg"
const projects = [
    {
      id: 1,
      name: "Employee MS",
      technologies: "MERN Stack",
      image: projectImage,
      github: "https://github.com/YouafKhan1",
      live: "https://github.com/YouafKhan1",
    },
    {
      id: 2,
      name: "Blog App",
      technologies: "MERN Stack",
      image: projectImage,
      github: "https://github.com/YouafKhan1",
      live: "https://github.com/YouafKhan1",
    },
    {
      id: 3,
      name: "Book MS",
      technologies: "MERN Stack",
      image: projectImage,
      github: "https://github.com/YouafKhan1",
      live: "https://github.com/YouafKhan1",
    },
  ];
function Projects() {
    
  return (
    <div className="bg-black text-white py-20 " id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 ">
        <h2 className="text-4xl font-bold text-center m-12">Projects</h2>
        <div className="grid drid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex gap-4">
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-[#2E3192] to-[#1BFFFF] text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
              <a href={project.live} className="inline-block bg-gradient-to-r 
              from-[#2E3192] to-[#1BFFFF] text-white px-6 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">live</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
