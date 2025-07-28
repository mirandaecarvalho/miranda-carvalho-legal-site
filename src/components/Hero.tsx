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
            <Button onClick={scrollToContact} size="lg" className="bg-legal-gold hover:bg-legal-gold/90 text-legal-light font-montserrat font-semibold px-8 py-3 text-lg">
              Fale Conosco
            </Button>
            
            <Button onClick={() => document.getElementById('sobre')?.scrollIntoView({
            behavior: 'smooth'
          })} variant="outline" size="lg" className="border-legal-dark text-legal-dark hover:bg-legal-dark hover:text-legal-light font-montserrat font-semibold px-8 py-3 text-lg">
              Conheça Nosso Trabalho
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center">
            <a 
              href="https://wa.me/5524981013461?text=Ol%C3%A1,%20vim%20pelo%20site." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-montserrat font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.188z"/>
              </svg>
              WhatsApp
            </a>
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