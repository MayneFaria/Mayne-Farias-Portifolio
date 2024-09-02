import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Formação Educacional</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li>
            <h3 className="font-semibold">Bacharelado em Ciência da Computação</h3>
            <p>Universidade XYZ, 2018-2022</p>
          </li>
          <li>
            <h3 className="font-semibold">Curso de UX/UI Design</h3>
            <p>Instituto ABC, 2023</p>
          </li>
        </ul>
        <h3 className="font-semibold mt-6 mb-2">Idiomas</h3>
        <ul className="list-disc list-inside">
          <li>Português (Nativo)</li>
          <li>Inglês (Avançado)</li>
          <li>Espanhol (Intermediário)</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default Education;