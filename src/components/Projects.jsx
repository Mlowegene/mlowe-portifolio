
import DashboardImage from "../assets/dashboardImage.png"
import GithubUserSearch from "../assets/github-search.png"
import Dictionary from "../assets/Dictionary-App.png"
import PromptopiaImage from "../assets/Promptopia.png"
import EmployeeSystemImage from "../assets/EmployeeSystemImage.png"
const projects = [
    {
      id: 1,
      name: "Admin Dashboard",
      technologies: "Next JS",
      image: DashboardImage,
      github: "https://github.com/Mlowegene/NextAdminDashboard",
      live: "https://github.com/YouafKhan1",
    },
    {
      id: 2,
      name: "Github User Search",
      technologies: "React and API",
      image: GithubUserSearch,
      github: "https://github.com/Mlowegene/github-user-search-react-app",
      live: "https://mlowegene.github.io/github-user-search-react-app/",
    },
    {
      id: 3,
      name: "Dictionary App",
      technologies: "React and API",
      image: Dictionary,
      github: "https://github.com/Mlowegene/dictionary-web-react-app",
      live: "https://mlowegene.github.io/dictionary-web-react-app/",
    },
    {
      id: 4,
      name: "Promptopia",
      technologies: "NextJS, Next-auth and MongoDB",
      image: PromptopiaImage,
      github: "https://github.com/Mlowegene/AI-prompts-app",
      live: "#",
    },
    {
      id: 5,
      name: "Employee-Management-App",
      technologies: "ReactJS,NodeJS, Express, Tailwind and MongoDB",
      image: EmployeeSystemImage,
      github: "https://github.com/Mlowegene/employee-management-app",
      live: "https://employee-management-app-kappa.vercel.app",
    }
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
