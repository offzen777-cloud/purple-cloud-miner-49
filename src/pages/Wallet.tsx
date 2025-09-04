import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { FloatingElements } from '@/components/FloatingElements';
import { PremiumButton } from '@/components/ui/premium-button';
import { Card } from '@/components/ui/card';
import { 
  Cloud, 
  Wallet, 
  ArrowLeft, 
  Copy, 
  Send, 
  Download,
  TrendingUp,
  TrendingDown,
  Clock
} from 'lucide-react';
import { toast } from 'sonner';

const WalletPage = () => {
  const { user } = useAuth();

  if (!user) return null;

  const copyAddress = () => {
    navigator.clipboard.writeText(user.walletAddress);
    toast.success('Endereço copiado!');
  };

  const mockTransactions = [
    {
      id: '1',
      type: 'mining',
      amount: 0.0234,
      date: '2024-01-15T10:30:00',
      status: 'completed',
      hash: '0xabc123...def456'
    },
    {
      id: '2',
      type: 'mining',
      amount: 0.0198,
      date: '2024-01-14T15:45:00',
      status: 'completed',
      hash: '0x789xyz...123abc'
    },
    {
      id: '3',
      type: 'withdrawal',
      amount: -1.5000,
      date: '2024-01-13T09:20:00',
      status: 'completed',
      hash: '0xdef789...456ghi'
    },
    {
      id: '4',
      type: 'mining',
      amount: 0.0156,
      date: '2024-01-12T18:10:00',
      status: 'completed',
      hash: '0x111222...333444'
    },
    {
      id: '5',
      type: 'mining',
      amount: 0.0287,
      date: '2024-01-11T12:05:00',
      status: 'completed',
      hash: '0x555666...777888'
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
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Carteira</span> Polygon
          </h1>
          <p className="text-muted-foreground">
            Gerencie seus ativos e histórico de transações
          </p>
        </div>

        {/* Wallet Overview */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="glass-card p-8 hover-lift">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Saldo Principal</h3>
                <p className="text-muted-foreground">Polygon (MATIC)</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-center p-6 rounded-2xl bg-gradient-primary/10 border border-primary/20">
                <div className="text-4xl font-bold text-primary mb-2">
                  {user.balance.toFixed(4)}
                </div>
                <div className="text-sm text-muted-foreground">MATIC</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <PremiumButton className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar
                </PremiumButton>
                <PremiumButton variant="accent" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Sacar
                </PremiumButton>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-8 hover-lift">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Endereço da Carteira</h3>
              <p className="text-muted-foreground">Seu endereço Polygon</p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <div className="text-sm font-mono break-all text-muted-foreground">
                  {user.walletAddress}
                </div>
              </div>
              
              <PremiumButton
                variant="outline"
                className="w-full"
                onClick={copyAddress}
              >
                <Copy className="mr-2 h-4 w-4" />
                Copiar Endereço
              </PremiumButton>
              
              <div className="grid grid-cols-3 gap-4 text-center mt-6">
                <div>
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-xs text-muted-foreground">Transações</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">98%</div>
                  <div className="text-xs text-muted-foreground">Sucesso</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-xs text-muted-foreground">Última</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Transaction History */}
        <Card className="glass-card p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Histórico de Transações</h3>
              <p className="text-muted-foreground">Suas últimas movimentações</p>
            </div>
            <Clock className="w-6 h-6 text-primary" />
          </div>

          <div className="space-y-4">
            {mockTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 rounded-xl bg-card/50 border border-white/10 hover-lift">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    tx.type === 'mining' ? 'bg-primary/20' : 'bg-accent/20'
                  }`}>
                    {tx.amount > 0 ? (
                      <TrendingUp className="w-6 h-6 text-primary" />
                    ) : (
                      <TrendingDown className="w-6 h-6 text-accent" />
                    )}
                  </div>
                  
                  <div>
                    <div className="font-semibold">
                      {tx.type === 'mining' ? 'Mineração' : 'Saque'}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(tx.date).toLocaleDateString('pt-BR')} às {new Date(tx.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {tx.hash}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`font-bold ${tx.amount > 0 ? 'text-primary' : 'text-accent'}`}>
                    {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(4)} MATIC
                  </div>
                  <div className="text-sm text-green-500">
                    Confirmada
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

export default WalletPage;