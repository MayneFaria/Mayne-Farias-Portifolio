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
            <h3 className="font-semibold">Pedagogia</h3>
            <p>Universidade XYZ, Ano de Conclusão</p>
          </li>
          <li>
            <h3 className="font-semibold">Gestão Pública</h3>
            <p>Instituição ABC, Ano de Conclusão</p>
          </li>
        </ul>
        <h3 className="font-semibold mt-6 mb-2">Habilidades</h3>
        <ul className="list-disc list-inside">
          <li>Planejamento Educacional</li>
          <li>Gestão de Projetos Públicos</li>
          <li>Desenvolvimento de Políticas Educacionais</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default Education;