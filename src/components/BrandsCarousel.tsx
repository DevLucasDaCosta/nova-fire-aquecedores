'use client';

import Image from 'next/image';

const brands = [
  { name: 'Rinnai', logo: '/images/brands/rinnai.png' },
  { name: 'Lorenzetti', logo: '/images/brands/lorenzetti.png' }, 
  { name: 'Komeco', logo: '/images/brands/komeco.png' },
  { name: 'Bosch', logo: '/images/brands/bosch.svg' },
  { name: 'Inov', logo: '/images/brands/inov.png' },
  { name: 'Rheem', logo: '/images/brands/rheem.png' }
];

export default function BrandsCarousel() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Marcas que <span className="text-orange-500">Atendemos</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Especializados nas principais marcas do mercado
          </p>
        </div>

        {/* Logos Carrosel */}
        <div className="relative overflow-hidden">
          {/* Infinite scrolling container */}
          <div className="flex animate-brands-scroll">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 px-8 flex items-center justify-center"
                style={{ width: '200px', height: '120px' }}
              >
                <div className="w-full h-full flex items-center justify-center p-6 transition-all duration-200 hover:scale-110 group">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    width={140}
                    height={80}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-200 opacity-60 group-hover:opacity-100"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="flex items-center justify-center w-full h-full bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                          <span class="text-gray-400 font-medium text-sm">${brand.name}</span>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays para efeito fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}
