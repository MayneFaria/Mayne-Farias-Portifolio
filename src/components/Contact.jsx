import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Card className="bg-pink-50 border-pink-200">
      <CardHeader>
        <CardTitle className="text-pink-800">Contato</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-pink-700">Preencha o formulário abaixo para entrar em contato comigo:</p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-pink-700">Nome</label>
            <Input type="text" id="name" name="name" required className="mt-1 bg-pink-100 border-pink-300 focus:border-pink-500 focus:ring-pink-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-pink-700">Email</label>
            <Input type="email" id="email" name="email" required className="mt-1 bg-pink-100 border-pink-300 focus:border-pink-500 focus:ring-pink-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-pink-700">Mensagem</label>
            <Textarea id="message" name="message" rows={4} required className="mt-1 bg-pink-100 border-pink-300 focus:border-pink-500 focus:ring-pink-500" />
          </div>
          <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white">Enviar Mensagem</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Contact;