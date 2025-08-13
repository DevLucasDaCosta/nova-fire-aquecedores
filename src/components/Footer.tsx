import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <div className='overflow-hidden'>
              <Image
                src="/images/logo-nova-fire.svg"
                alt="Nova Fire Aquecedores"
                width={120}
                height={60}
                className="h-16 scale-250"
              />
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Especialistas em aquecedores em Rio de Janeiro e Niterói. 
              Qualidade, rapidez e garantia em todos os serviços.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="text-orange-500 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm">(21) 95945-5162</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="text-orange-500 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm">novafireaquecedores@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-orange-500 flex-shrink-0" size={16} />
                <span className="text-gray-300 text-sm">Atendimento 24h</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/novafireaquecedores/"
                className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors"
                aria-label="Instagram"
                target='_blank'
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                  Instalação de Aquecedores
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                  Manutenção Preventiva
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                  Atendimento 24h
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                  Reparo Rápido
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                  Regulagem de Temperatura
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                  Vistoria Técnica
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                  Contato
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-orange-500 transition-colors text-sm">
                  Orçamento Gratuito
                </a>
              </li>
            </ul>
          </div>

          {/* Our units */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossas Centrais de Atendimento</h3>
            <div className="space-y-4">
              {/* Copacabana */}
              <div className="border-l-2 border-orange-500 pl-3">
                <h4 className="font-semibold text-orange-500 mb-1 text-sm">Copacabana</h4>
                <div className="flex items-start space-x-2">
                  <MapPin className="text-gray-400 mt-0.5 flex-shrink-0" size={12} />
                  <div>
                    <p className="text-xs text-gray-300">Av. Nossa Sra. de Copacabana, 581</p>
                    <p className="text-xs text-gray-400">Copacabana, Rio de Janeiro - RJ</p>
                  </div>
                </div>
              </div>

              {/* Niterói */}
              <div className="border-l-2 border-orange-500 pl-3">
                <h4 className="font-semibold text-orange-500 mb-1 text-sm">Niterói</h4>
                <div className="flex items-start space-x-2">
                  <MapPin className="text-gray-400 mt-0.5 flex-shrink-0" size={12} />
                  <div>
                    <p className="text-xs text-gray-300">R. Dr. Mario Vianna, 331</p>
                    <p className="text-xs text-gray-400">Santa Rosa, Niterói - RJ</p>
                  </div>
                </div>
              </div>

              {/* Recreio */}
              <div className="border-l-2 border-orange-500 pl-3">
                <h4 className="font-semibold text-orange-500 mb-1 text-sm">Recreio</h4>
                <div className="flex items-start space-x-2">
                  <MapPin className="text-gray-400 mt-0.5 flex-shrink-0" size={12} />
                  <div>
                    <p className="text-xs text-gray-300">Estrada Benvindo de Novaes, 1880</p>
                    <p className="text-xs text-gray-400">Recreio dos Bandeirantes - RJ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Clock className="text-white" size={18} />
              <span className="text-white font-semibold text-sm">Emergência 24h disponível</span>
            </div>
            <a
              href="tel:+5521959455162"
              className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              Ligar Agora: (21) 95945-5162
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-xs">
              © 2024 Nova Fire Aquecedores. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
