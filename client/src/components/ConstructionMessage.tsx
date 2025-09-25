import { Hammer, HardHat, Settings } from 'lucide-react';

interface ConstructionMessageProps {
  className?: string;
}

export default function ConstructionMessage({ className = '' }: ConstructionMessageProps) {
  return (
    <div className={`text-center space-y-6 ${className}`}>
      {/* Animated Construction Icons */}
      <div className="flex justify-center items-center space-x-4 mb-8">
        <div className="animate-bounce" style={{ animationDelay: '0s' }}>
          <HardHat className="h-8 w-8 text-chart-3" data-testid="icon-hardhat" />
        </div>
        <div className="animate-bounce" style={{ animationDelay: '0.5s' }}>
          <Hammer className="h-8 w-8 text-chart-2" data-testid="icon-hammer" />
        </div>
        <div className="animate-bounce" style={{ animationDelay: '1s' }}>
          <Settings className="h-8 w-8 text-primary animate-spin" style={{ animationDuration: '3s' }} data-testid="icon-settings" />
        </div>
      </div>

      {/* Main Construction Message */}
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[Poppins] text-foreground leading-tight" data-testid="heading-construction">
          Site em <span className="text-primary">Construção</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-[Poppins] text-muted-foreground" data-testid="heading-construction-en">
          Under <span className="text-chart-2">Construction</span>
        </h2>
      </div>

      {/* Description */}
      <div className="space-y-4 max-w-2xl mx-auto">
        <p className="text-lg md:text-xl text-muted-foreground font-[Inter] leading-relaxed" data-testid="text-description">
          Estamos trabalhando duro para trazer o melhor da <span className="font-semibold text-primary">culinária italiana</span> até você.
          Em breve, nosso site estará pronto com deliciosas receitas e produtos únicos.
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground font-[Inter] leading-relaxed" data-testid="text-description-en">
          We're working hard to bring you the best of <span className="font-semibold text-primary">Italian cuisine</span>.
          Soon, our website will be ready with delicious recipes and unique products.
        </p>
      </div>

      {/* Coming Soon Badge */}
      <div className="inline-flex items-center px-6 py-3 bg-primary/10 border border-primary/20 rounded-full" data-testid="badge-coming-soon">
        <span className="text-primary font-semibold text-sm md:text-base font-[Inter]">
          🚧 Em Breve • Coming Soon 🚧
        </span>
      </div>
    </div>
  );
}