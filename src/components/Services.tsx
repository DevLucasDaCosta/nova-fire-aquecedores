import { Wrench, Shield, Clock, Thermometer, Search, Flame } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Wrench className="text-orange-500" size={40} />,
      title: "Instalação de Aquecedores",
      description: "Instalação profissional de aquecedores a gás e boilers elétricos com garantia total."
    },
    {
      icon: <Shield className="text-blue-500" size={40} />,
      title: "Manutenção Preventiva",
      description: "Serviços de manutenção para garantir o funcionamento perfeito do seu aquecedor."
    },
    {
      icon: <Clock className="text-green-500" size={40} />,
      title: "Atendimento 24h",
      description: "Emergências e reparos urgentes disponíveis 24 horas por dia, 7 dias na semana."
    },
    {
      icon: <Flame className="text-yellow-500" size={40} />,
      title: "Fogões e Cooktops",
      description: "Serviço especializado de conversão e instalação segura de fogões e cooktops."
    },
    {
      icon: <Thermometer className="text-red-500" size={40} />,
      title: "Regulagem de Temperatura",
      description: "Ajuste e calibração da temperatura para máximo conforto e economia."
    },
    {
      icon: <Search className="text-cyan-500" size={40} />,
      title: "Vistoria Técnica",
      description: "Avaliação completa do sistema para garantir segurança, eficiência e conformidade com as normas."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para aquecedores com qualidade, 
            rapidez e garantia. Confie em nossos técnicos especializados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Precisa de Atendimento Urgente?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Nossa equipe está disponível 24h para emergências
            </p>
            <a
              href="tel:+5521959455162"
              className="inline-flex items-center bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Clock className="mr-2" size={20} />
              Emergência 24h
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
