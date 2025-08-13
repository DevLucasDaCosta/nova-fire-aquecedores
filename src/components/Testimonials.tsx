"use client";

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Renato Silva",
      location: "Copacabana",
      rating: 5,
      text: "Excelente serviço! Instalaram meu aquecedor rapidamente e com muita qualidade. Recomendo a Nova Fire para todos!",
      service: "Instalação de Aquecedor"
    },
    {
      name: "Renato Santos",
      location: "Ipanema",
      rating: 5,
      text: "Atendimento 24h salvou meu fim de semana. Técnico chegou rápido e resolveu o problema do aquecedor na hora.",
      service: "Emergência 24h"
    },
    {
      name: "Renato Cardoso",
      location: "Barra da Tijuca",
      rating: 5,
      text: "Profissionais muito competentes e educados. Fizeram a manutenção completa e deixaram tudo funcionando perfeitamente.",
      service: "Manutenção Preventiva"
    },
    {
      name: "Renato Oliveira",
      location: "Tijuac",
      rating: 5,
      text: "Ótimo custo-benefício e garantia real. Já uso os serviços há 2 anos e nunca tive problemas.",
      service: "Reparo"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Centenas de clientes satisfeitos confiam na Nova Fire para 
            seus aquecedores. Veja alguns depoimentos.
          </p>
        </div>

        {/* Testimonials carrosel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-orange-200">
              <Quote size={48} />
            </div>

            {/* Current Testimonial */}
            <div className="text-center space-y-6">
              {/* Stars */}
              <div className="flex justify-center space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>

              {/* Tetx */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                &quot;{testimonials[currentIndex].text}&quot;
              </blockquote>

              {/* Author Info */}
              <div className="space-y-2">
                <div className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].location} • {testimonials[currentIndex].service}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="text-gray-600" size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="text-gray-600" size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">4.9/5</div>
            <div className="text-gray-600">Avaliação média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">500+</div>
            <div className="text-gray-600">Clientes atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
            <div className="text-gray-600">Satisfação garantida</div>
          </div>
        </div>
      </div>
    </section>
  );
}
