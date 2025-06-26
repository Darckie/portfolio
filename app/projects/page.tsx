import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard 
          title="Complaint Portal"
          description="A robust complaint management system using React, Java, and Puppeteer for automation."
          image="/assets/images/complaint-portal.png"
          link="https://github.com/your-username/complaint-portal"
        />
        {/* Add more ProjectCard components */}
      </div>
    </main>
  );
}
