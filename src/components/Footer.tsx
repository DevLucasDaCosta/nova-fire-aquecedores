import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className='overflow-hidden'>
              <Image
                src="/images/logo-nova-fire.svg"
                alt="Nova Fire Aquecedores"
                width={150}
                height={75}
                className="h-24 scale-200"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Especialistas em aquecedores no Rio de Janeiro. 
              Qualidade, rapidez e garantia em todos os serviços.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/novafireaquecedores/"
                className="bg-gray-800 p-2 rounded-lg hover:bg-orange-500 transition-colors"
                aria-label="Instagram"
                target='_blank'
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Instalação de Aquecedores
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Manutenção Preventiva
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Atendimento 24h
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Reparo Rápido
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Regulagem de Temperatura
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Vistoria Técnica
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Orçamento Gratuito
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">(21) 95945-5162</p>
                  <p className="text-sm text-gray-400">WhatsApp disponível</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">contato@novafire.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">Rio de Janeiro - RJ</p>
                  <p className="text-sm text-gray-400">Todas as regiões</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="text-orange-500 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">24 horas</p>
                  <p className="text-sm text-gray-400">Todos os dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Clock className="text-white" size={20} />
              <span className="text-white font-semibold">Emergência 24h disponível</span>
            </div>
            <a
              href="tel:+5521959455162"
              className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ligar Agora: (21) 95945-5162
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Nova Fire Aquecedores. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
