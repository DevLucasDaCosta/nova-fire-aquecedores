import { Award, Users, Clock, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const stats = [
    {
      icon: <Users className="text-orange-500" size={32} />,
      number: "500+",
      label: "Clientes Satisfeitos"
    },
    {
      icon: <Clock className="text-blue-500" size={32} />,
      number: "10+",
      label: "Anos de Experiência"
    },
    {
      icon: <Award className="text-green-500" size={32} />,
      number: "24h",
      label: "Atendimento Emergencial"
    },
    {
      icon: <CheckCircle className="text-purple-500" size={32} />,
      number: "100%",
      label: "Garantia nos Serviços"
    }
  ];

  const features = [
    "Técnicos certificados e especializados",
    "Peças originais e de qualidade",
    "Atendimento rápido e eficiente",
    "Orçamento sem compromisso",
    "Cobertura em Rio de Janeiro e Niterói",
    "Garantia de 1 ano nos serviços"
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sobre a Nova Fire
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A Nova Fire é especialista em serviços de aquecedores em Rio de Janeiro e Niterói. 
                Com mais de 10 anos de experiência, nossa equipe oferece soluções 
                completas para instalação, manutenção e reparo de aquecedores.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trabalhamos com as principais marcas do mercado e garantimos 
                qualidade, segurança e eficiência em todos os nossos serviços.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contato"
                className="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>

          {/* Stats and Image */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl p-8">
                <Image
                  src="/images/logo-nova-fire.svg"
                  alt="Nova Fire Aquecedores"
                  width={200}
                  height={75}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
