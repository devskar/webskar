import React, { useMemo } from 'react';
import Card from '../components/Card';
import { useFetch } from '../utils/hooks/useFetch';
import './Projects.css';

const DESCRIPTION_MAX_LENGTH = 50;

interface Props {}

export interface Project {
  name: string;
  description: string;
  id: string;
  link: string;
}

const convertHeading = (heading: string): string => {
  if (heading.length > DESCRIPTION_MAX_LENGTH) {
    return heading.substring(0, DESCRIPTION_MAX_LENGTH) + '...';
  }

  return heading;
};

const jsonToProjects = (data: [] | null) => {
  let projs: Project[] = [];

  if (!data) return projs;

  data.forEach(
    (info: {
      name: string;
      description: string;
      html_url: string;
      id: string;
    }) => {
      projs.push({
        name: info.name,
        description: info.description,
        link: info.html_url,
        id: info.id,
      });
    }
  );
  return projs;
};

const projectsToCards = (projects: Project[]) => {
  const cards: JSX.Element[] = [];

  projects.forEach((project) => {
    cards.push(
      <Card
        key={project.id}
        heading={project.name}
        subheading={
          project.description
            ? convertHeading(project.description)
            : 'no description'
        }
        link={project.link}
      />
    );
  });

  return cards;
};

const jsonToCards = (data: [] | null) => {
  return projectsToCards(jsonToProjects(data));
};

export const Projects: React.FC<Props> = () => {
  const { data } = useFetch('https://api.github.com/users/devskar/repos');

  const cards = useMemo(() => jsonToCards(data), [data]);

  return (
    <div className="project-page">
      <div className="project-container">
        <h2 className="project-heading">Projects</h2>
        <div className="project-list">{cards}</div>
      </div>
    </div>
  );
};

export default Projects;
