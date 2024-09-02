import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  return (
    <Card className="bg-pink-50 border-pink-200">
      <CardHeader>
        <CardTitle className="text-pink-800">Formação Educacional</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li>
            <h3 className="font-semibold text-pink-700">Pedagogia</h3>
            <p className="text-pink-600">Uninter, 2024</p>
          </li>
          <li>
            <h3 className="font-semibold text-pink-700">Gestão Pública</h3>
            <p className="text-pink-600">Uninter, 2018</p>
          </li>
        </ul>
        <h3 className="font-semibold mt-6 mb-2 text-pink-800">Habilidades</h3>
        <ul className="list-disc list-inside text-pink-700">
          <li>Planejamento Educacional</li>
          <li>Gestão de Projetos Públicos</li>
          <li>Desenvolvimento de Políticas Educacionais</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default Education;