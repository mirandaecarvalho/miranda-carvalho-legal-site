import { Card } from '@/components/ui/card';
import carvalhoPhoto from '/lovable-uploads/bc938d46-eb4a-4464-ad2a-430b6e8bd55f.png';
import mirandaPhoto from '/lovable-uploads/2e04797f-901e-4f7c-a4bb-8ce46a0716d7.png';
const teamMembers = [{
  name: "Dr. João Carvalho",
  oab: "OAB/RJ 249638",
  photo: carvalhoPhoto,
  description: "Sócio-fundador, especialista em Ciências Penais, Direitos Humanos e Movimentos Sociais. Graduado pela UNIFAA. Experiência em casos complexos como Tribunal do Júri, Sustentações Orais e Audiências concentradas. Presidente da Comissão de Direitos Humanos da 7ª Subseção da OAB/RJ e membro da Comissão de Direitos Humanos da Seccional do Rio de Janeiro."
}, {
  name: "Dr. Douglas Miranda",
  oab: "OAB/RJ 254436",
  photo: mirandaPhoto,
  description: "Sócio-fundador, especialista em Ciências Penais, Direitos Humanos e Movimentos Sociais. Graduado pela UNIFAA. Experiência em casos complexos como Tribunal do Júri, Sustentações Orais e Audiências concentradas. Vice-presidente da Comissão de Direitos Humanos da 7ª Subseção da OAB/RJ e membro da Comissão de Direitos Humanos da Seccional do Rio de Janeiro."
}, {
  name: "Dra. Victoria Penna",
  oab: "ADVOGADA ASSOCIADA | OAB/RJ 250715",
  photo: "/lovable-uploads/fc6a47d9-bafc-4683-aca7-35ca95f9ad71.png",
  description: "Advogada associada ao escritório. Especialista em Direito de Família, possui vasta experiência em processos de divórcio, guarda de menores, pensão alimentícia e união estável. Dedicada e comprometida com a defesa dos direitos familiares, atua com sensibilidade e profissionalismo em casos que envolvem questões delicadas do âmbito familiar, sempre buscando soluções eficazes e humanizadas para seus clientes."
}, {
  name: "Thalita Chaves",
  oab: "ESTAGIÁRIA",
  photo: "/lovable-uploads/9ff744af-b9e4-406b-90a0-7801987ba8e9.png",
  description: "Estagiária de Direito. Estudante do 6º Período do Direito na UNIFAA/RJ. Amante de Direito do Trabalho e Cível. Dedicada e comprometida com o aprendizado jurídico, demonstra excepcional interesse pela área trabalhista e civilística, contribuindo ativamente para o desenvolvimento das atividades do escritório com responsabilidade e profissionalismo."
}];
const Team = () => {
  return <section id="equipe" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-legal-dark mb-6">
            Nossa Equipe
          </h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto mb-8"></div>
          <p className="text-xl font-montserrat text-muted-foreground max-w-2xl mx-auto">
            Profissionais experientes e comprometidos com a excelência no atendimento jurídico.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* First row with 3 members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <Card key={index} className="p-8 bg-card hover:shadow-lg transition-all duration-300 text-center">
                <div className="mb-6">
                  <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full mx-auto object-cover object-top border-4 border-legal-gray" />
                </div>
                
                <h3 className="text-2xl font-playfair font-semibold text-legal-dark mb-2">
                  {member.name}
                </h3>
                
                <p className="text-legal-gold font-montserrat font-medium mb-4">
                  {member.oab}
                </p>
                
                <p className="font-formal text-muted-foreground leading-relaxed">
                  {member.description}
                </p>

                <div className="mt-6 flex justify-center space-x-4">
                  <a href="#" className="text-legal-dark hover:text-legal-gold transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                    </svg>
                  </a>
                  <a href="#" className="text-legal-dark hover:text-legal-gold transition-colors" aria-label="Email">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Second row with Thalita centered */}
          <div className="flex justify-center">
            {teamMembers.slice(3).map((member, index) => (
              <Card key={index + 3} className="p-8 bg-card hover:shadow-lg transition-all duration-300 text-center max-w-md">
                <div className="mb-6">
                  <img src={member.photo} alt={member.name} className="w-32 h-32 rounded-full mx-auto object-cover object-top border-4 border-legal-gray" />
                </div>
                
                <h3 className="text-2xl font-playfair font-semibold text-legal-dark mb-2">
                  {member.name}
                </h3>
                
                <p className="text-legal-gold font-montserrat font-medium mb-4">
                  {member.oab}
                </p>
                
                <p className="font-formal text-muted-foreground leading-relaxed">
                  {member.description}
                </p>

                <div className="mt-6 flex justify-center space-x-4">
                  <a href="#" className="text-legal-dark hover:text-legal-gold transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.332V2.298C19 1.581 18.402 1 17.668 1z" />
                    </svg>
                  </a>
                  <a href="#" className="text-legal-dark hover:text-legal-gold transition-colors" aria-label="Email">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Escritórios Parceiros Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-legal-dark mb-4">
              Escritórios Parceiros
            </h3>
            <div className="w-20 h-1 bg-legal-gold mx-auto mb-6"></div>
            <p className="text-lg font-montserrat text-muted-foreground max-w-xl mx-auto">
              Trabalhamos em parceria com escritórios renomados para oferecer um atendimento ainda mais especializado.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Card className="p-16 bg-gradient-to-br from-legal-dark to-legal-dark/90 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 max-w-lg w-full">
              <div className="text-center">
                <div className="mb-10 relative">
                  <div className="absolute inset-0 bg-legal-gold/20 rounded-lg blur-xl"></div>
                  <img 
                    src="/lovable-uploads/1c60d22c-4cd0-4b93-8e74-a2be2b171269.png" 
                    alt="Pizette Corrêa - Advocacia e Consultoria Jurídica" 
                    className="relative w-full h-auto object-contain filter brightness-110"
                  />
                </div>
                
                <div className="border-t border-legal-gold/30 pt-8">
                  <p className="text-legal-light font-montserrat text-base leading-relaxed">
                    Parceria estratégica especializada em <span className="text-legal-gold font-semibold">Direito do Trabalho</span>, oferecendo consultoria jurídica de excelência e ampliando nossos serviços com expertise consolidada na área trabalhista.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto p-8 bg-legal-light border-legal-gold border">
            <h3 className="text-2xl font-playfair font-semibold text-legal-dark mb-4">
              Equipe de Apoio
            </h3>
            <p className="font-montserrat text-muted-foreground leading-relaxed">Além dos sócios-fundadores, nosso escritório conta com uma equipe qualificada de advogados parceiros e estagiária, todos comprometidos com a excelência no atendimento e na prestação de serviços jurídicos.</p>
          </Card>
        </div>
      </div>
    </section>;
};
export default Team;