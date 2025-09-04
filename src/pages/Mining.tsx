import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { FloatingElements } from '@/components/FloatingElements';
import { PremiumButton } from '@/components/ui/premium-button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Cloud, 
  ArrowLeft, 
  Play, 
  Pause, 
  Zap, 
  Server, 
  Activity, 
  Cpu,
  HardDrive,
  Wifi,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';

const MiningPage = () => {
  const { user, updateMiningStatus } = useAuth();
  const [isStarting, setIsStarting] = useState(false);

  if (!user) return null;

  const toggleMining = async () => {
    setIsStarting(true);
    
    // Simulate mining start/stop process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (user.miningActive) {
      updateMiningStatus(false, 0);
      toast.success('Mineração pausada com sucesso!');
    } else {
      const hashrate = Math.floor(Math.random() * 50) + 150; // 150-200 MH/s
      updateMiningStatus(true, hashrate);
      toast.success('Mineração iniciada com sucesso!');
    }
    
    setIsStarting(false);
  };

  const servers = [
    { id: 1, name: 'Server-US-East-01', status: 'online', load: 76, location: 'Nova York' },
    { id: 2, name: 'Server-EU-West-02', status: 'online', load: 82, location: 'Londres' },
    { id: 3, name: 'Server-AS-East-03', status: 'maintenance', load: 0, location: 'Singapura' },
    { id: 4, name: 'Server-US-West-04', status: 'online', load: 69, location: 'São Francisco' },
  ];

  const miningStats = {
    efficiency: 98.7,
    temperature: 62,
    power: 85,
    uptime: 99.2
  };

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      <FloatingElements />
      
      {/* Header */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-xl bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Link to="/dashboard" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Dashboard
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
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Mineração</span> em Tempo Real
          </h1>
          <p className="text-muted-foreground">
            Controle e monitore sua operação de mineração Polygon
          </p>
        </div>

        {/* Mining Control Panel */}
        <Card className="glass-card p-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                  user.miningActive ? 'bg-primary/20' : 'bg-muted/20'
                }`}>
                  <Zap className={`w-8 h-8 ${user.miningActive ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Status da Mineração</h3>
                  <p className={`font-medium ${
                    user.miningActive ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {user.miningActive ? 'Ativo - Minerando' : 'Inativo - Parado'}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Hashrate atual:</span>
                  <span className="font-medium">{user.miningActive ? `${user.hashrate} MH/s` : '0 MH/s'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Eficiência:</span>
                  <span className="font-medium text-primary">{user.miningActive ? `${miningStats.efficiency}%` : '0%'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Uptime:</span>
                  <span className="font-medium text-accent">{user.miningActive ? `${miningStats.uptime}%` : '0%'}</span>
                </div>
              </div>

              <PremiumButton
                onClick={toggleMining}
                disabled={isStarting}
                size="lg"
                className="w-full"
                variant={user.miningActive ? "outline" : "default"}
              >
                {isStarting ? (
                  <>
                    <Activity className="mr-2 h-5 w-5 animate-spin" />
                    {user.miningActive ? 'Parando...' : 'Iniciando...'}
                  </>
                ) : (
                  <>
                    {user.miningActive ? (
                      <>
                        <Pause className="mr-2 h-5 w-5" />
                        Pausar Mineração
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-5 w-5" />
                        Iniciar Mineração
                      </>
                    )}
                  </>
                )}
              </PremiumButton>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Métricas do Sistema</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">CPU</span>
                    <span className="text-sm font-medium">{user.miningActive ? '76%' : '12%'}</span>
                  </div>
                  <Progress value={user.miningActive ? 76 : 12} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">GPU</span>
                    <span className="text-sm font-medium">{user.miningActive ? '89%' : '5%'}</span>
                  </div>
                  <Progress value={user.miningActive ? 89 : 5} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Memória</span>
                    <span className="text-sm font-medium">{user.miningActive ? '65%' : '25%'}</span>
                  </div>
                  <Progress value={user.miningActive ? 65 : 25} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Temperatura</span>
                    <span className="text-sm font-medium">{user.miningActive ? '62°C' : '35°C'}</span>
                  </div>
                  <Progress value={user.miningActive ? 62 : 35} className="h-2" max={100} />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Servers Status */}
        <Card className="glass-card p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Status dos Servidores</h3>
              <p className="text-muted-foreground">Monitoramento da infraestrutura de mineração</p>
            </div>
            <Server className="w-8 h-8 text-primary" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servers.map((server) => (
              <div key={server.id} className="p-4 rounded-xl bg-card/50 border border-white/10 hover-lift">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-3 h-3 rounded-full ${
                    server.status === 'online' 
                      ? 'bg-green-500 pulse-glow' 
                      : 'bg-yellow-500'
                  }`} />
                  {server.status === 'online' ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                  )}
                </div>
                
                <div className="mb-3">
                  <div className="font-semibold text-sm">{server.name}</div>
                  <div className="text-xs text-muted-foreground">{server.location}</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Carga:</span>
                    <span className="font-medium">{server.load}%</span>
                  </div>
                  <Progress value={server.load} className="h-1" />
                </div>

                <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Cpu className="w-3 h-3" />
                    <span>{server.status === 'online' ? '8 cores' : 'Off'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wifi className="w-3 h-3" />
                    <span>{server.status === 'online' ? '1Gbps' : 'Off'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default MiningPage;