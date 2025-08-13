'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const WhatsAppPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showPopupInitially, setShowPopupInitially] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  const phoneNumber = "5521959455162";
  const message = "Olá! Gostaria de saber mais sobre os serviços da Nova Fire Aquecedores.";

  useEffect(() => {
    setCurrentTime(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    
    const timer = setTimeout(() => {
      setShowPopupInitially(true);
      setIsPopupOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleFloatingButtonClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleStartConversation = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsPopupOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Ripple animations */}
          <div className="absolute inset-0 bg-green-400 rounded-full whatsapp-ripple"></div>
          <div className="absolute inset-0 bg-green-300 rounded-full whatsapp-ripple-delayed"></div>
          
          <button
            onClick={handleFloatingButtonClick}
            className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer z-10 group"
            aria-label="Abrir chat do WhatsApp"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 transition-transform duration-300"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"/>
            </svg>
            
            {/* Tooltip - apenas no hover */}
            <div className={`absolute bottom-full right-0 mb-2 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none ${isPopupOpen ? 'hidden' : ''}`}>
              <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                Precisa de ajuda?
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Popup Chat Window */}
      <div className={`fixed bottom-24 right-6 z-40 transition-all duration-200 ease-in-out transform ${
        isPopupOpen 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-8 opacity-0 scale-95 pointer-events-none'
      }`}>
        <div className="bg-white rounded-2xl shadow-2xl w-80 max-w-sm overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-green-500"
                    >
                      <path
                        fill="currentColor"
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"
                      />
                    </svg>
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-md">Nova Fire Aquecedores</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <p className="text-sm opacity-90">Online agora</p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleClosePopup}
                className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-all duration-200 group cursor-pointer"
                aria-label="Fechar chat"
              >
                <X className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" />
              </button>
            </div>
            
            {/* Wave decoration */}
            <div className="absolute -bottom-px left-0 right-0 overflow-hidden">
              <svg viewBox="0 0 1440 20" className="w-full text-white block" style={{ verticalAlign: 'top' }}>
                <path fill="currentColor" d="M0,0 C240,20 480,20 720,10 C960,0 1200,0 1440,10 L1440,20 L0,20 Z"></path>
              </svg>
            </div>
          </div>

          {/* Chat Content */}
          <div className="p-6 bg-gradient-to-b from-gray-50 to-white -mt-1">
            {/* Welcome Message */}
            <div className="mb-6">
              <div className="relative">
                {/* Message Balloon */}
                <div className="bg-white rounded-2xl rounded-tl-sm p-4 shadow-lg border border-gray-200 relative">
                  
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Olá! 👋 <span className="font-medium">Como podemos ajudá-lo hoje?</span>
                  </p>
                  <p className="text-gray-600 text-xs mt-2">
                    Estamos aqui para tirar suas dúvidas ou agendar uma visita, entre em contato!
                  </p>
                  
                  {/* Time stamp */}
                  <div className="flex justify-end mt-1">
                    <span className="text-xs text-gray-400">
                      {currentTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Start Conversation Button */}
            <button
              onClick={handleStartConversation}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 transform active:scale-[0.98] shadow-lg hover:shadow-xl group cursor-pointer"
            >
              <div className="flex items-center justify-center space-x-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z"/>
                </svg>
                <span>Iniciar Conversa</span>
              </div>
            </button>
            
            {/* Footer Note */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500 flex items-center justify-center space-x-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Resposta rápida garantida!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppPopup;
