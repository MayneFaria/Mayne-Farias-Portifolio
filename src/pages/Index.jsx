import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

// Main component for the portfolio page
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Mayne Farias</h1>
          <p className="text-xl text-blue-600">Pedagoga | Gestora Pública</p>
        </header>

        {/* Navigation */}
        <nav className="mb-8">
          <ul className="flex justify-center space-x-4">
            <li><a href="#about" className="text-blue-600 hover:text-blue-800">Sobre Mim</a></li>
            <li><a href="#education" className="text-blue-600 hover:text-blue-800">Formação</a></li>
            <li><a href="#portfolio" className="text-blue-600 hover:text-blue-800">Portfólio</a></li>
            <li><a href="#contact" className="text-blue-600 hover:text-blue-800">Contato</a></li>
          </ul>
        </nav>

        {/* About Me section */}
        <section id="about" className="mb-12">
          <AboutMe />
        </section>

        {/* Education section */}
        <section id="education" className="mb-12">
          <Education />
        </section>

        {/* Portfolio section */}
        <section id="portfolio" className="mb-12">
          <Portfolio />
        </section>

        {/* Contact section */}
        <section id="contact" className="mb-12">
          <Contact />
        </section>

        {/* Footer with social links */}
        <footer className="text-center">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Redes Sociais</h2>
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