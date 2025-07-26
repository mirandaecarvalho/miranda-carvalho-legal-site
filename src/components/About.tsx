import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-legal-dark mb-6">
            Sobre o Escritório
          </h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg font-formal leading-relaxed text-foreground">
              Fundado em 2003, o <strong>Miranda e Carvalho Advocacia</strong> nasceu da união de dois profissionais 
              apaixonados pela justiça e comprometidos com a excelência no atendimento jurídico. Ao longo de mais 
              de duas décadas, construímos uma sólida reputação baseada na ética, transparência e resultados efetivos.
            </p>
            
            <p className="text-lg font-formal leading-relaxed text-foreground">
              Nossa equipe multidisciplinar atende clientes em diversas áreas do direito, sempre priorizando 
              soluções personalizadas e estratégicas. Acreditamos que cada caso é único e merece atenção 
              especializada, combinando conhecimento técnico profundo com um atendimento humanizado.
            </p>
            
            <p className="text-lg font-formal leading-relaxed text-foreground">
              Comprometemo-nos não apenas com a defesa dos direitos de nossos clientes, mas também com 
              a construção de relacionamentos duradouros baseados na confiança mútua e na busca incansável 
              pela justiça.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-6 border-l-4 border-l-legal-gold bg-card">
              <h3 className="text-xl font-playfair font-semibold text-legal-dark mb-3">Nossa Missão</h3>
              <p className="font-montserrat text-muted-foreground">
                Defender os direitos de nossos clientes com excelência, ética e dedicação, oferecendo 
                soluções jurídicas eficazes e personalizadas.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-legal-gold bg-card">
              <h3 className="text-xl font-playfair font-semibold text-legal-dark mb-3">Nossos Valores</h3>
              <p className="font-montserrat text-muted-foreground">
                Ética profissional, transparência nas relações, comprometimento com resultados e 
                respeito aos direitos fundamentais de cada cliente.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-legal-gold bg-card">
              <h3 className="text-xl font-playfair font-semibold text-legal-dark mb-3">Nossa Visão</h3>
              <p className="font-montserrat text-muted-foreground">
                Ser reconhecido como referência em excelência jurídica, contribuindo para um 
                sistema de justiça mais acessível e eficiente.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;