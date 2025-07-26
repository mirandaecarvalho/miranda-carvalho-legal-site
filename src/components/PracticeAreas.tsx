import { Card } from '@/components/ui/card';

const practiceAreas = [
  {
    title: "Direito Civil",
    description: "Contratos, responsabilidade civil, direitos reais, sucessões e questões patrimoniais.",
    icon: "⚖️"
  },
  {
    title: "Direito Penal",
    description: "Defesa criminal, recursos, habeas corpus e acompanhamento processual completo.",
    icon: "🛡️"
  },
  {
    title: "Direito Trabalhista",
    description: "Relações de trabalho, rescisões, ações trabalhistas e consultoria preventiva.",
    icon: "💼"
  },
  {
    title: "Direito de Família",
    description: "Divórcio, guarda, pensão alimentícia, inventário e questões familiares.",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    title: "Consultoria Empresarial",
    description: "Assessoria jurídica preventiva, contratos empresariais e compliance.",
    icon: "🏢"
  },
  {
    title: "Direito Imobiliário",
    description: "Compra e venda, locações, regularizações e questões condominiais.",
    icon: "🏠"
  }
];

const PracticeAreas = () => {
  return (
    <section id="areas" className="py-20 bg-legal-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-legal-dark mb-6">
            Áreas de Atuação
          </h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto mb-8"></div>
          <p className="text-xl font-montserrat text-muted-foreground max-w-2xl mx-auto">
            Oferecemos serviços jurídicos especializados em diversas áreas do direito, 
            sempre com foco na excelência e resultados efetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card hover:shadow-lg transition-all duration-300 border-0 hover:border-legal-gold hover:border group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-legal-dark mb-4">
                  {area.title}
                </h3>
                <p className="font-montserrat text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-montserrat text-muted-foreground mb-6">
            Não encontrou sua área de interesse? Entre em contato conosco para uma consulta personalizada.
          </p>
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-legal-gold hover:bg-legal-gold/90 text-legal-dark font-montserrat font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Solicitar Consulta
          </button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;