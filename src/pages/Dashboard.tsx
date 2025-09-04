import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { FloatingElements } from '@/components/FloatingElements';
import { PremiumButton } from '@/components/ui/premium-button';
import { Card } from '@/components/ui/card';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { 
  Cloud, 
  Wallet, 
  Pickaxe, 
  TrendingUp, 
  Zap, 
  User,
  LogOut,
  DollarSign,
  Activity
} from 'lucide-react';

const Dashboard = () => {
  const { user, logout, updateBalance } = useAuth();
  const [earnings, setEarnings] = useState(0.0012);

  useEffect(() => {
    // Simulate real-time earnings
    const interval = setInterval(() => {
      if (user?.miningActive) {
        setEarnings(prev => prev + 0.0001);
        updateBalance(user.balance + 0.0001);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [user?.miningActive, user?.balance, updateBalance]);

  if (!user) return null;

  const stats = [
    {
      title: 'Saldo Total',
      value: `${user.balance.toFixed(4)} MATIC`,
      icon: Wallet,
      trend: '+12.5%',
      gradient: 'from-primary to-accent'
    },
    {
      title: 'Ganhos Hoje',
      value: `${earnings.toFixed(4)} MATIC`,
      icon: DollarSign,
      trend: '+5.2%',
      gradient: 'from-accent to-primary'
    },
    {
      title: 'Hashrate',
      value: user.miningActive ? `${user.hashrate} MH/s` : '0 MH/s',
      icon: Activity,
      trend: user.miningActive ? 'Online' : 'Offline',
      gradient: 'from-primary to-purple-600'
    },
    {
      title: 'Status',
      value: user.miningActive ? 'Minerando' : 'Parado',
      icon: Zap,
      trend: user.miningActive ? 'Ativo' : 'Inativo',
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      <FloatingElements />
      
      {/* Header */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-xl bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Purple Cloud
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 px-4 py-2 glass-card rounded-xl">
                <User className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{user.name}</span>
              </div>
              
              <ThemeToggle />
              
              <PremiumButton
                variant="ghost"
                size="sm"
                onClick={logout}
                className="text-muted-foreground hover:text-destructive"
              >
                <LogOut className="w-4 h-4" />
              </PremiumButton>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Bem-vindo, <span className="bg-gradient-primary bg-clip-text text-transparent">{user.name}</span>
          </h1>
          <p className="text-muted-foreground">
            Gerencie sua mineração de Polygon na nuvem
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={stat.title} className={`glass-card p-6 hover-lift animate-fade-in`} style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-accent font-medium">{stat.trend}</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="glass-card p-8 hover-lift">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Pickaxe className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Mineração</h3>
                <p className="text-muted-foreground">Controle sua operação de mineração</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Status atual:</span>
                <span className={`text-sm font-medium ${user.miningActive ? 'text-green-500' : 'text-muted-foreground'}`}>
                  {user.miningActive ? 'Minerando' : 'Parado'}
                </span>
              </div>
              <Link to="/mining" className="block">
                <PremiumButton className="w-full" size="lg">
                  <Zap className="mr-2 h-5 w-5" />
                  Gerenciar Mineração
                </PremiumButton>
              </Link>
            </div>
          </Card>

          <Card className="glass-card p-8 hover-lift">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
                <Wallet className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Carteira</h3>
                <p className="text-muted-foreground">Gerencie seus ativos Polygon</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Saldo disponível:</span>
                <span className="text-sm font-medium">{user.balance.toFixed(4)} MATIC</span>
              </div>
              <Link to="/wallet" className="block">
                <PremiumButton variant="accent" className="w-full" size="lg">
                  <Wallet className="mr-2 h-5 w-5" />
                  Ver Carteira
                </PremiumButton>
              </Link>
            </div>
          </Card>
        </div>

        {/* Quick Stats Chart Area */}
        <Card className="glass-card p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Performance em Tempo Real</h3>
              <p className="text-muted-foreground">Monitoramento da sua operação de mineração</p>
            </div>
            <TrendingUp className="w-8 h-8 text-primary" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">98.7%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-accent/5 border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">2.1x</div>
              <div className="text-sm text-muted-foreground">Eficiência</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Suporte</div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;