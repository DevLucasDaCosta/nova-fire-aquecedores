"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      {/* Top bar with contact info */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>(21) 95945-5162</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>Rio de Janeiro - RJ</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Atendimento 24h - Emergências</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 overflow-hidden">
            <Image
              src="/images/logo-nova-fire.svg"
              alt="Nova Fire Aquecedores"
              width={120}
              height={60}
              className="h-12 scale-200"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Início
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
              Contato
            </a>
            <a
              href="#contato"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              Orçamento Gratuito
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-orange-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#servicos"
                className="text-gray-700 hover:text-orange-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#sobre"
                className="text-gray-700 hover:text-orange-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#contato"
                className="text-gray-700 hover:text-orange-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <a
                href="#contato"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Orçamento Gratuito
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
