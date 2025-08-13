"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    const whatsappMessage = `Olá! Vim do site da Nova Fire.%0A%0ANome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AServiço: ${formData.service}%0AMensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5521959455162?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };


  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    
    const limited = numbers.slice(0, 11);
    
    if (limited.length === 0) return '';
    if (limited.length <= 2) return `(${limited}`;
    if (limited.length <= 7) return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
    return `(${limited.slice(0, 2)}) ${limited.slice(2, 7)}-${limited.slice(7)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    let value = e.target.value;
    
    if (e.target.name === 'phone') {
      if (value === '') {
        value = '';
      } else {
        value = formatPhone(value);
      }
    }

    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Precisa de ajuda com seu aquecedor? Entre em contato conosco 
            e receba um orçamento gratuito rapidamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fale Conosco
              </h3>
              <p className="text-gray-600 mb-8">
                Nossa equipe está pronta para ajudar você com qualquer necessidade 
                relacionada a aquecedores. Atendimento rápido e profissional.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Phone className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefone</h4>
                  <p className="text-gray-600">(21) 95945-5162</p>
                  <p className="text-sm text-gray-500">WhatsApp disponível</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">contato@novafire.com.br</p>
                  <p className="text-sm text-gray-500">Respondemos em até 2h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MapPin className="text-green-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Atendimento</h4>
                  <p className="text-gray-600">Todo Rio de Janeiro</p>
                  <p className="text-sm text-gray-500">Zona Sul, Norte, Oeste e Centro</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Clock className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Horário</h4>
                  <p className="text-gray-600">24 horas por dia</p>
                  <p className="text-sm text-gray-500">Emergências e agendamentos</p>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-semibold text-red-900 mb-2">Emergência?</h4>
              <p className="text-red-700 mb-4">
                Para situações de emergência, ligue diretamente:
              </p>
              <a
                href="tel:+5521959455162"
                className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
              >
                <Phone className="mr-2" size={20} />
                Emergência 24h
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicite seu Orçamento
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={15}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="(21) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Serviço *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Selecione o serviço</option>
                  <option value="instalacao">Instalação de Aquecedor</option>
                  <option value="manutencao">Manutenção</option>
                  <option value="reparo">Reparo</option>
                  <option value="emergencia">Emergência 24h</option>
                  <option value="orcamento">Orçamento</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Descreva sua necessidade ou dúvida..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg hover:bg-orange-600 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Enviar via WhatsApp</span>
              </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-4">
              * Campos obrigatórios. Respondemos rapidamente!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
