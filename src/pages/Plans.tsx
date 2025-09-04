import { Link } from 'react-router-dom';
import { FloatingElements } from '@/components/FloatingElements';
import { PremiumButton } from '@/components/ui/premium-button';
import { Card } from '@/components/ui/card';
import { 
  Cloud, 
  ArrowLeft, 
  Check, 
  Zap, 
  Shield, 
  Headphones, 
  Star,
  TrendingUp,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Plans = () => {
  const plans = [
    {
      id: 'free',
      name: 'Grátis',
      price: 0,
      hashrate: '2 TH/s',
      popular: false,
      features: [
        'Hashrate básico de 2 TH/s',
        'Acesso básico à plataforma',
        'Relatórios semanais',
        'Suporte por email'
      ],
      color: 'from-gray-500 to-gray-600',
      badge: null
    },
    {
      id: 'normal',
      name: 'Normal',
      price: 10,
      hashrate: '5 TH/s',
      popular: false,
      features: [
        'Hashrate de 5 TH/s',
        'Dashboard completo',
        'Relatórios diários',
        'Notificações básicas'
      ],
      color: 'from-blue-500 to-blue-600',
      badge: null
    },
    {
      id: 'basic',
      name: 'Básico',
      price: 20,
      hashrate: '10 TH/s',
      popular: false,
      features: [
        'Hashrate de 10 TH/s',
        'Analytics avançado',
        'Suporte 24 horas',
        'Notificações em tempo real'
      ],
      color: 'from-green-500 to-green-600',
      badge: null
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 45,
      hashrate: '50 TH/s',
      popular: true,
      features: [
        'Hashrate de 50 TH/s',
        'Suporte 24 horas',
        'Prioridade no suporte',
        'API de integração',
        'Relatórios personalizados'
      ],
      color: 'from-primary to-purple-600',
      badge: 'Mais Popular'
    },
    {
      id: 'advanced',
      name: 'Advanced',
      price: 80,
      hashrate: '100 TH/s',
      popular: false,
      features: [
        'Hashrate de 100 TH/s',
        'Retiradas diárias automáticas',
        'Suporte exclusivo 24h',
        'Gerente de conta dedicado',
        'Acesso beta a novas features'
      ],
      color: 'from-orange-500 to-red-500',
      badge: 'Profissional'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 110,
      hashrate: '140 TH/s',
      popular: false,
      features: [
        'Hashrate máximo de 140 TH/s',
        'Retiradas diárias automáticas',
        'Suporte exclusivo 24h',
        'Integração personalizada',
        'SLA garantido de 99.9%',
        'Consultoria especializada'
      ],
      color: 'from-violet-500 to-purple-700',
      badge: 'Empresarial'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      <FloatingElements />
      
      {/* Header */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-xl bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar
              </Link>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Purple Cloud
                </span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Planos de Mineração</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para maximizar seus ganhos com mineração Polygon na nuvem
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={plan.id} 
              className={`glass-card p-8 hover-lift relative ${
                plan.popular ? 'border-2 border-primary shadow-elegant' : ''
              } animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.badge && (
                <Badge 
                  className={`absolute -top-3 left-6 bg-gradient-to-r ${plan.color} text-white border-0`}
                >
                  <Star className="w-4 h-4 mr-1" />
                  {plan.badge}
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} mx-auto mb-4 flex items-center justify-center`}>
                  <Zap className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    {plan.price === 0 ? 'Grátis' : `$${plan.price}`}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-muted-foreground">/mês</span>
                  )}
                </div>
                
                <div className={`text-xl font-semibold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                  {plan.hashrate}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <PremiumButton 
                className="w-full" 
                size="lg"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.price === 0 ? (
                  <>
                    <Zap className="mr-2 h-5 w-5" />
                    Começar Grátis
                  </>
                ) : (
                  <>
                    <ArrowUpRight className="mr-2 h-5 w-5" />
                    Assinar Plano
                  </>
                )}
              </PremiumButton>
            </Card>
          ))}
        </div>

        {/* Comparison Features */}
        <Card className="glass-card p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Comparação de Recursos</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Segurança Máxima</h4>
              <p className="text-sm text-muted-foreground">
                Todos os planos incluem criptografia de nível militar e monitoramento 24/7
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-accent/5 border border-accent/20">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Performance Otimizada</h4>
              <p className="text-sm text-muted-foreground">
                Algoritmos avançados garantem máxima eficiência e retornos consistentes
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20">
              <Headphones className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Suporte Especializado</h4>
              <p className="text-sm text-muted-foreground">
                Equipe técnica especializada disponível para ajudar você a maximizar seus ganhos
              </p>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card className="glass-card p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Perguntas Frequentes</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Posso mudar de plano a qualquer momento?
              </h4>
              <p className="text-muted-foreground ml-7">
                Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
                As mudanças são aplicadas imediatamente.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Como funciona o hashrate?
              </h4>
              <p className="text-muted-foreground ml-7">
                O hashrate determina a velocidade de mineração. Quanto maior o hashrate, 
                maior o potencial de ganhos com a mineração de Polygon.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Meus fundos estão seguros?
              </h4>
              <p className="text-muted-foreground ml-7">
                Absolutamente! Utilizamos as melhores práticas de segurança da indústria, 
                incluindo carteiras multi-sig e cold storage para proteger seus ativos.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Plans;