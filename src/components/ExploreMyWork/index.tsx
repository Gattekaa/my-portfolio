"use client";

// Components
import ProjectItem from "../ProjectItem";

// Helpers
import Locale from "@/helpers/locale";

// Mocks
import { projects } from "@/mocks/projects";

// Locales
import { explore_my_work } from "@/locales/explore_my_work";

export default function ExploreMyWork() {
  return (
    <section
      id="explore-my-work"
      className="w-full py-24 px-8 flex items-center text-center flex-col gap-24 bg-background-light"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <Locale item={explore_my_work.title} />
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            photo={project.photo}
            alterPhoto={project.alterPhoto}
            href={project.href}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}
