import Container from 'components/Container';
import { InferGetStaticPropsType } from 'next';
import { allProjectQuery } from 'lib/sanity/queries';
import { getClient } from 'lib/sanity/client';
import { Project } from 'lib/types';
import ProjectCard from 'components/ProjectCard';

export default function Projects({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title="Projects – Ken Aqshal Bramasta"
      description="A collection of project that I've used in the past."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Project
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
        Welcome to my project showcase! Explore my diverse range of experiences and skills that I've do on in the past as a software engineer here.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {projects.map((Project) => (
            <ProjectCard
              key={Project.slug}
              title={Project.title}
              slug={Project.slug}
              logo={Project.logo}
              description={Project.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps({preview = false}) {
  const projects: Project[] = await getClient(preview).fetch(allProjectQuery);

  return { props: { projects } };
}
