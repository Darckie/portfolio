import ProjectCard from "../components/ProjectCard";
import cPortalImg from '../images/complaintProtal.png';

export default function ProjectsPage() {
  return (
    <main className="px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Complaint Portal"
          description="A robust complaint management system using React, Java, and Mysql for database."
             image={cPortalImg}
          link="https://darckie.github.io/ComplaintPortal/"
        />
        <ProjectCard
          title="Complaint Portal"
          description="A robust complaint management system using React, Java, and Mysql for database."
          image={cPortalImg}
          link="https://darckie.github.io/ComplaintPortal/"
        />
        <ProjectCard
          title="Complaint Portal"
          description="A robust complaint management system using React, Java, and Mysql for database."
          image={cPortalImg}
          link="https://darckie.github.io/ComplaintPortal/"
        />
        {/* Add more ProjectCard components */}
      </div>
    </main>
  );
}
