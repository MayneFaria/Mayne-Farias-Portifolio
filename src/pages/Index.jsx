import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Mayne Farias de Moura</h1>
          <p className="text-xl text-blue-600">Desenvolvedor Web | Designer UX/UI</p>
        </header>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Sobre Mim</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Olá! Sou Mayne Farias de Moura, um apaixonado desenvolvedor web e designer UX/UI.
                Minha missão é criar experiências digitais incríveis que combinam funcionalidade e estética.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Projetos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Projeto 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Descrição breve do projeto 1.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Projeto 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Descrição breve do projeto 2.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Habilidades</h2>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Node.js", "UI/UX Design"].map((skill) => (
              <span key={skill} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <footer className="text-center">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Contato</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <GithubIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <LinkedinIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <MailIcon className="h-4 w-4" />
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;