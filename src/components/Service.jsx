
function Service() {
    const services = [
        {
            id: 1,
            title: "web designer",
            description: "Creating visually appealing and user-friendy web designs."
        },
        {
            id: 2,
            title: "Frontend development",
            description: "Building responsive and interactive user niterface"
        },
        {
            id: 3,
            title: "Backend development",
            description: "Creating visually appealing and user-friendy web designs."
        }
    ]
  return (
    <div className="bg-black text-white py-20 " id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 ">
        <h2 className="text-4xl font-bold text-center m-12">My Services</h2>
        <div className="grid drid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
                <div
                key={service.id}
                className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
                transition-transform duration-300 hover:scale-105"
                >
                    <div className="text-right text-2xl font-bold text-transparent 
                    bg-clip-text bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]">{service.id}
                    </div>
                    <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]">
                        {service.title}
                    </h3>
                    <p className="mt-2 text-gray-300">
                        {service.description}
                    </p>
                    <a href="#" className="mt-4 inline-block text-[#1BFFFF] hover:text-[#1BFFFF]">Read More</a>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Service
