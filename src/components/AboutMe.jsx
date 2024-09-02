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
          Me chamo Mayne Farias. Gosto de descansar e passear com meus sobrinhos.
          Sou uma pessoa dedicada e sempre em busca de novos desafios e aprendizados.
        </p>
        <h3 className="font-semibold mt-4 mb-2">Hobbies</h3>
        <ul className="list-disc list-inside">
          <li>Passar tempo com a família</li>
          <li>Leitura</li>
          <li>Explorar novos lugares</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default AboutMe;