import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Portfolio = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-pink-800 mb-4">Meu Portfólio</h2>
      <Card className="bg-pink-50 border-pink-200">
        <CardHeader>
          <CardTitle className="text-pink-700">Portfólio em Construção</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-pink-600">Em breve, projetos e trabalhos serão adicionados aqui.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Portfolio;