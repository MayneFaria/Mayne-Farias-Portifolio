import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutMe = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sobre Mim</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">
          Olá! Sou Mayne Farias de Moura, um apaixonado desenvolvedor web e designer UX/UI.
          Minha missão é criar experiências digitais incríveis que combinam funcionalidade e estética.
        </p>
        <h3 className="font-semibold mt-4 mb-2">Hobbies</h3>
        <ul className="list-disc list-inside">
          <li>Fotografia</li>
          <li>Leitura</li>
          <li>Viagens</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default AboutMe;