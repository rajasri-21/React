import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard"
import { getProjects } from "../services/api"
import AddComponent from "../components/AddComponent"

const Projects = () => {
  const [projectdata, setProjectdata] = useState(null)
  const fetchprojects = async () => {
    // const {}
    try {
      const { data } = await getProjects()
      setProjectdata(data)
    } catch (error) {
      console.warn(error);

    }
  }
  console.log(projectdata)
  useEffect(() => {
    fetchprojects()
  }, [])
  if (!projectdata) {
    return "No data available";
  }
  return (
    <>
      <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center">
        <div className="w-full h-[10%] flex justify-center items-center">
          <AddComponent />
        </div>

        {
          projectdata.map((data, index) => (
            <ProjectCard title={data.title} desc={data.desc} key={index} pid={index} cover={data.coverimg} id={data.id} />
          ))
        }
      </div>
    </>
  )
}

export default Projects