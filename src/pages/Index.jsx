import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-800 mb-4">Mayne Farias</h1>
          <p className="text-xl text-pink-600">Pedagoga | Gestora Pública</p>
        </header>

        <nav className="mb-8">
          <ul className="flex justify-center space-x-4">
            <li><a href="#about" className="text-pink-600 hover:text-pink-800">Sobre Mim</a></li>
            <li><a href="#education" className="text-pink-600 hover:text-pink-800">Formação</a></li>
            <li><a href="#portfolio" className="text-pink-600 hover:text-pink-800">Portfólio</a></li>
            <li><a href="#contact" className="text-pink-600 hover:text-pink-800">Contato</a></li>
          </ul>
        </nav>

        <section id="about" className="mb-12">
          <AboutMe />
        </section>

        <section id="education" className="mb-12">
          <Education />
        </section>

        <section id="portfolio" className="mb-12">
          <Portfolio />
        </section>

        <section id="contact" className="mb-12">
          <Contact />
        </section>

        <footer className="text-center">
          <h2 className="text-2xl font-semibold text-pink-800 mb-4">Redes Sociais</h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" className="bg-pink-100 hover:bg-pink-200 text-pink-800">
              <GithubIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-pink-100 hover:bg-pink-200 text-pink-800">
              <LinkedinIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="bg-pink-100 hover:bg-pink-200 text-pink-800">
              <MailIcon className="h-4 w-4" />
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;