import { Link } from 'react-router-dom';
import { FloatingElements } from '@/components/FloatingElements';
import { PremiumButton } from '@/components/ui/premium-button';
import { Cloud, Zap, Shield, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      <FloatingElements />
      
      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Purple Cloud
            </span>
          </div>
          
          <div className="flex gap-4">
            <Link to="/plans">
              <PremiumButton variant="ghost" size="sm">
                Planos
              </PremiumButton>
            </Link>
            <Link to="/login">
              <PremiumButton variant="ghost" size="sm">
                Entrar
              </PremiumButton>
            </Link>
            <Link to="/register">
              <PremiumButton size="sm">
                Criar Conta
              </PremiumButton>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
                Mineração
              </span>
              <br />
              <span className="text-foreground animate-fade-in [animation-delay:200ms]">
                na Nuvem
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in [animation-delay:400ms]">
              Minere Polygon de forma eficiente e segura com nossa infraestrutura em nuvem premium. 
              Design futurista, tecnologia avançada, retornos consistentes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:600ms]">
            <Link to="/plans">
              <PremiumButton size="lg" className="min-w-48">
                <Zap className="mr-2 h-5 w-5" />
                Ver Planos
              </PremiumButton>
            </Link>
            <Link to="/register">
              <PremiumButton variant="outline" size="lg" className="min-w-48">
                Começar Grátis
              </PremiumButton>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-32">
          <div className="glass-card p-8 rounded-2xl hover-lift animate-fade-in [animation-delay:800ms]">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Segurança Premium</h3>
            <p className="text-muted-foreground">
              Infraestrutura protegida com criptografia de nível militar e 
              monitoramento 24/7 para máxima segurança dos seus ativos.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover-lift animate-fade-in [animation-delay:1000ms]">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Alta Performance</h3>
            <p className="text-muted-foreground">
              Servidores otimizados com GPUs de última geração garantindo 
              máxima eficiência e hashrate superior na rede Polygon.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover-lift animate-fade-in [animation-delay:1200ms]">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Retornos Consistentes</h3>
            <p className="text-muted-foreground">
              Algoritmos inteligentes e pools otimizadas garantem 
              retornos estáveis e previsíveis para seu investimento.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;