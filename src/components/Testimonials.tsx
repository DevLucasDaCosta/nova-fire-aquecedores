"use client";

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mariana Costa",
      location: "Copacabana",
      rating: 5,
      text: "Excelente serviço! Instalaram meu aquecedor rapidamente e com muita qualidade. Recomendo a Nova Fire para todos!",
      service: "Instalação de Aquecedor"
    },
    {
      name: "Carlos Eduardo",
      location: "Ipanema",
      rating: 5,
      text: "Atendimento 24h salvou meu fim de semana. Técnico chegou rápido e resolveu o problema do aquecedor na hora.",
      service: "Emergência 24h"
    },
    {
      name: "Ana Paula Ferreira",
      location: "Barra da Tijuca",
      rating: 5,
      text: "Profissionais muito competentes e educados. Fizeram a manutenção completa e deixaram tudo funcionando perfeitamente.",
      service: "Manutenção Preventiva"
    },
    {
      name: "Roberto Almeida",
      location: "Niterói",
      rating: 5,
      text: "Ótimo custo-benefício e garantia real. Já uso os serviços há 2 anos e nunca tive problemas.",
      service: "Reparo"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && !isTyping) {
        nextTestimonial();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAnimating, isTyping]);

  // Typing effect
  useEffect(() => {
    const fullText = testimonials[currentIndex].text;
    setDisplayedText('');
    setIsTyping(true);
    
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 30); // 30ms por letar

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (isAnimating || isTyping) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimating(false);
    }, 150);
  };

  const prevTestimonial = () => {
    if (isAnimating || isTyping) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 150);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || isTyping || index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 150);
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
          <div className="relative bg-gradient-to-br from-orange-50 via-white to-blue-50 rounded-2xl p-8 lg:p-12 overflow-hidden border border-gray-100 shadow-xl">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-orange-200 transform transition-all duration-500 hover:scale-110 hover:text-orange-300">
              <Quote size={48} className="drop-shadow-lg" />
            </div>

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 to-blue-500 transition-all duration-5000 ease-linear"
                style={{ 
                  width: isAnimating ? '0%' : '100%',
                  transition: isAnimating ? 'width 0.15s ease-out' : 'width 5s ease-linear'
                }}
              ></div>
            </div>

            {/* Current Testimonial */}
            <div className={`text-center space-y-6 transition-all duration-300 transform ${
              isAnimating ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'
            }`}>
              {/* Stars with Stagger Animation */}
              <div className="flex justify-center space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="text-yellow-400 fill-current transform transition-all duration-300 hover:scale-125" 
                    size={24}
                    style={{ 
                      animationDelay: `${i * 100}ms`,
                      animation: isAnimating ? 'none' : 'starGlow 2s ease-in-out infinite alternate'
                    }}
                  />
                ))}
              </div>

              {/* Text with Typing Effect */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium relative min-h-[4rem] flex items-center justify-center">
                <span className="relative z-10">
                  &quot;{displayedText}
                  {isTyping && (
                    <span className="inline-block w-0.5 h-6 bg-orange-500 ml-1 animate-pulse"></span>
                  )}&quot;
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100 to-transparent opacity-20 blur-sm"></div>
              </blockquote>

              {/* Author Info */}
              <div className="space-y-2 transform transition-all duration-500">
                <div className="font-semibold text-gray-900 text-lg relative">
                  <span className="relative z-10">{testimonials[currentIndex].name}</span>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-blue-500 transition-all duration-500 group-hover:w-full"></div>
                </div>
                <div className="text-gray-600 flex items-center justify-center space-x-2">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                  <span>{testimonials[currentIndex].location}</span>
                  <span className="text-gray-400">•</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {testimonials[currentIndex].service}
                  </span>
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              disabled={isAnimating || isTyping}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed border border-gray-100"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="text-gray-600 group-hover:text-orange-500 transition-colors duration-300" size={24} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={nextTestimonial}
              disabled={isAnimating || isTyping}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed border border-gray-100"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="text-gray-600 group-hover:text-blue-500 transition-colors duration-300" size={24} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                disabled={isAnimating || isTyping}
                className={`relative h-3 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed group ${
                  index === currentIndex 
                    ? 'w-8 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full' 
                    : 'w-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full animate-pulse"></div>
                )}
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-orange-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform duration-300">
              4.9/5
            </div>
            <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Avaliação média</div>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform duration-300">
              500+
            </div>
            <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Clientes atendidos</div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Satisfação garantida</div>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
