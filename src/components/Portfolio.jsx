import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    { title: "Projeto 1", description: "Descrição do projeto 1", link: "#" },
    { title: "Projeto 2", description: "Descrição do projeto 2", link: "#" },
    { title: "Projeto 3", description: "Descrição do projeto 3", link: "#" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Meu Portfólio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline mt-2 inline-block">Ver projeto</a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;