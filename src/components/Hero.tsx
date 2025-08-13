import Image from 'next/image';
import { CheckCircle, Star, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Especialistas em{' '}
                <span className="text-orange-500">Aquecedores</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Instalação, manutenção e reparo de aquecedores com garantia e qualidade. 
                Atendimento 24h para emergências no Rio de Janeiro.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Atendimento 24h</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Garantia de 1 ano</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Técnicos especialistas</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-gray-700">Orçamento gratuito</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+5521959455162"
                className="flex items-center justify-center space-x-2 bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg font-semibold"
              >
                <Phone size={20} />
                <span>Ligar Agora</span>
              </a>
              <a
                href="#servicos"
                className="flex items-center justify-center bg-white text-orange-500 border-2 border-orange-500 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors text-lg font-semibold"
              >
                Ver Serviços
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <span className="text-gray-600">4.9/5</span>
              </div>
              <div className="text-gray-600">
                <span className="font-semibold">+500</span> clientes satisfeitos
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/heater-service.png"
                alt="Serviços de aquecedores"
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-200 rounded-full opacity-70"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
