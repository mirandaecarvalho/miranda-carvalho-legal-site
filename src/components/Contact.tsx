import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Erro",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto link
      const subject = encodeURIComponent('Contato via site - Miranda & Carvalho Advocacia');
      const body = encodeURIComponent(
        `Nome: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Telefone: ${formData.phone || 'Não informado'}\n\n` +
        `Mensagem:\n${formData.message}`
      );
      
      const mailtoLink = `mailto:mirandaecarvalho.advogados@gmail.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_self');
      
      toast({
        title: "Redirecionando para o e-mail",
        description: "Você será redirecionado para seu cliente de e-mail.",
      });

      // Reset form after a brief delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 1000);
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao abrir cliente de e-mail. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="py-20 bg-legal-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-legal-dark mb-6">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-legal-gold mx-auto mb-8"></div>
          <p className="text-xl font-montserrat text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para defender seus direitos. Entre em contato conosco para uma consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <Card className="p-6 bg-card">
              <div className="flex items-start space-x-4">
                <div className="bg-legal-gold rounded-full p-3">
                  <svg className="w-6 h-6 text-legal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-semibold text-legal-dark mb-2">Endereço</h3>
                  <p className="font-montserrat text-muted-foreground">
                    Avenida Nilo Peçanha, 222, Sala 105<br />
                    Centro, Valença - RJ<br />
                    Shopping Reikin<br />
                    CEP: 27660-246
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card">
              <div className="flex items-start space-x-4">
                <div className="bg-legal-gold rounded-full p-3">
                  <svg className="w-6 h-6 text-legal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-semibold text-legal-dark mb-2">Telefones</h3>
                  <div className="font-montserrat text-muted-foreground space-y-2">
                    <p>(24) 98134-0717</p>
                    <p>(24) 98104-2543</p>
                    <p>(24) 98101-3461</p>
                    <p>(24) 3206-5755</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card">
              <div className="flex items-start space-x-4">
                <div className="bg-legal-gold rounded-full p-3">
                  <svg className="w-6 h-6 text-legal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-semibold text-legal-dark mb-2">E-mail</h3>
                  <p className="font-montserrat text-muted-foreground">
                    mirandaecarvalho.advogados@gmail.com
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card">
              <div className="flex items-start space-x-4">
                <div className="bg-legal-gold rounded-full p-3">
                  <svg className="w-6 h-6 text-legal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-semibold text-legal-dark mb-2">Horário de Atendimento</h3>
                  <div className="font-montserrat text-muted-foreground space-y-1">
                    <p>Segunda a sexta: 10h às 18h</p>
                    <p>Plantão: 24h (emergências como flagrantes, risco iminente à segurança de alguém, etc.)</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Formulário */}
          <Card className="p-8 bg-card">
            <h3 className="text-2xl font-playfair font-semibold text-legal-dark mb-6">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-montserrat font-medium text-legal-dark mb-2">
                  Nome Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-legal-dark/20 focus:border-legal-gold"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-montserrat font-medium text-legal-dark mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-legal-dark/20 focus:border-legal-gold"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-montserrat font-medium text-legal-dark mb-2">
                  Telefone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-legal-dark/20 focus:border-legal-gold"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-montserrat font-medium text-legal-dark mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="border-legal-dark/20 focus:border-legal-gold"
                  placeholder="Descreva brevemente sua situação jurídica..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-legal-gold hover:bg-legal-gold/90 text-legal-light font-montserrat font-semibold py-3"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;