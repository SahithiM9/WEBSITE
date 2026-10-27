import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => (
  <div id="projects" className="relative z-50 my-12 lg:my-24">
    <div className="sticky top-10">
      <div className="flex items-center justify-start relative">
        <span className="bg-[#2F2F2F] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">PROFESSIONAL PROJECTS</span>
        <span className="w-full h-[2px] bg-[#2F2F2F]"></span>
      </div>
    </div>
    <div className="my-12 lg:my-16 relative flex flex-col gap-6">
      {projectsData.map((project, index) => (
        <div key={project.id} className="w-full mx-auto max-w-2xl">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  </div>
);
export default Projects;
