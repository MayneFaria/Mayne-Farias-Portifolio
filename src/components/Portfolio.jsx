import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    { 
      title: "Projeto de Gestão Escolar", 
      description: "Desenvolvimento de um sistema de gestão para escolas públicas.", 
      link: "#" 
    },
    { 
      title: "Programa de Inclusão Digital", 
      description: "Implementação de um programa de inclusão digital em comunidades carentes.", 
      link: "#" 
    },
    { 
      title: "Plataforma de Ensino à Distância", 
      description: "Criação de uma plataforma online para cursos de formação continuada de professores.", 
      link: "#" 
    },
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