import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MailIcon, PhoneIcon } from "lucide-react";

const Contact = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contato</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Contact Information */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center">
            <MailIcon className="h-5 w-5 mr-2 text-blue-600" />
            <span>Email: Mayne1257@gmail.com</span>
          </div>
          <div className="flex items-center">
            <PhoneIcon className="h-5 w-5 mr-2 text-blue-600" />
            <span>Contato: (62) 98104-7941</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
            <Input type="text" id="name" name="name" required className="mt-1" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input type="email" id="email" name="email" required className="mt-1" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
            <Textarea id="message" name="message" rows={4} required className="mt-1" />
          </div>
          <Button type="submit" className="w-full">Enviar Mensagem</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Contact;