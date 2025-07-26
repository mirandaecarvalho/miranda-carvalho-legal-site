import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-legal-dark/95 backdrop-blur-sm shadow-lg' : 'bg-legal-dark'
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-legal-gold rounded-full flex items-center justify-center">
            <span className="text-legal-dark font-bold text-sm">M&C</span>
          </div>
          <span className="text-legal-light font-playfair text-xl font-semibold">
            Miranda & Carvalho
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-legal-light hover:text-legal-gold transition-colors font-montserrat"
          >
            Início
          </button>
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-legal-light hover:text-legal-gold transition-colors font-montserrat"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('areas')}
            className="text-legal-light hover:text-legal-gold transition-colors font-montserrat"
          >
            Áreas de Atuação
          </button>
          <button 
            onClick={() => scrollToSection('equipe')}
            className="text-legal-light hover:text-legal-gold transition-colors font-montserrat"
          >
            Equipe
          </button>
          <Button 
            onClick={() => scrollToSection('contato')}
            variant="outline"
            className="border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-legal-dark font-montserrat"
          >
            Contato
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-legal-light"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-legal-dark border-t border-legal-gold md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-legal-light hover:text-legal-gold transition-colors font-montserrat text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-legal-light hover:text-legal-gold transition-colors font-montserrat text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('areas')}
                className="text-legal-light hover:text-legal-gold transition-colors font-montserrat text-left"
              >
                Áreas de Atuação
              </button>
              <button 
                onClick={() => scrollToSection('equipe')}
                className="text-legal-light hover:text-legal-gold transition-colors font-montserrat text-left"
              >
                Equipe
              </button>
              <Button 
                onClick={() => scrollToSection('contato')}
                variant="outline"
                className="border-legal-gold text-legal-gold hover:bg-legal-gold hover:text-legal-dark font-montserrat justify-start"
              >
                Contato
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;