import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutMe = () => {
  return (
    <Card className="bg-pink-50 border-pink-200">
      <CardHeader>
        <CardTitle className="text-pink-800">Sobre Mim</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-pink-700">
          Me chamo Mayne Farias. Gosto de descansar e passear com meus sobrinhos.
          Sou uma pessoa dedicada e sempre em busca de novos desafios e aprendizados.
        </p>
        <h3 className="font-semibold mt-4 mb-2 text-pink-800">Hobbies</h3>
        <ul className="list-disc list-inside text-pink-700">
          <li>Passar tempo com a família</li>
          <li>Leitura</li>
          <li>Explorar novos lugares</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default AboutMe;