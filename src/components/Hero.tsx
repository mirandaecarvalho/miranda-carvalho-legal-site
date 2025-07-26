import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-legal-background.jpg';
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: `linear-gradient(rgba(26, 34, 62, 0.8), rgba(26, 34, 62, 0.6)), url(${heroImage})`
  }}>
      <div className="container mx-auto px-4 text-center text-legal-light">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            Excelência, Ética e
            <span className="block text-legal-gold">Compromisso com a Justiça</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-montserrat font-light mb-8 max-w-2xl mx-auto leading-relaxed">Especialistas em Direito Civil, Penal e Trabalhista com ética e eficiência defendendo seus direitos.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToContact} size="lg" className="bg-legal-gold hover:bg-legal-gold/90 text-legal-dark font-montserrat font-semibold px-8 py-3 text-lg">
              Fale Conosco
            </Button>
            
            <Button onClick={() => document.getElementById('sobre')?.scrollIntoView({
            behavior: 'smooth'
          })} variant="outline" size="lg" className="border-legal-light text-legal-light hover:bg-legal-light hover:text-legal-dark font-montserrat font-semibold px-8 py-3 text-lg">
              Conheça Nosso Trabalho
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-legal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>;
};
export default Hero;