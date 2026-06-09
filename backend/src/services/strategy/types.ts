// Strategy Engine Type Definitions

export interface Candle {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface EMAPeriods {
  ema20: number;
  ema50: number;
  ema200: number;
}

export enum TrendDirection {
  BULLISH = 'BULLISH',
  BEARISH = 'BEARISH',
  NEUTRAL = 'NEUTRAL'
}

export enum MarketStructure {
  HH = 'HH', // Higher High
  HL = 'HL', // Higher Low
  LH = 'LH', // Lower High
  LL = 'LL'  // Lower Low
}

export interface MarketStructurePoint {
  type: MarketStructure;
  price: number;
  candleIndex: number;
  timestamp: number;
}

export interface DominantBreak {
  isBreak: boolean;
  direction: 'bullish' | 'bearish';
  breakPrice: number;
  volume: number;
  candleIndex: number;
  timestamp: number;
  volumeMA20: number;
}

export interface CB1Point {
  candleIndex: number;
  timestamp: number;
  price: number;
  type: 'demand' | 'supply';
  lowPrice: number;
  highPrice: number;
  bodyRange: number;
}

export interface FibonacciLevels {
  level_0_382: number;
  level_0_500: number;
  level_0_618: number;
  highPoint: number;
  lowPoint: number;
  range: number;
}

export enum ConfidenceLevel {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW'
}

export interface StrategySignal {
  symbol: string;
  timeframe: string;
  direction: TrendDirection;
  entryPrice: number;
  takeProfit: number;
  stopLoss: number;
  confidence: ConfidenceLevel;
  confidenceScore: number; // 0-100
  reasoning: string[];
  timestamp: number;
  
  // Component details
  trendFilter: {
    direction: TrendDirection;
    ema20: number;
    ema50: number;
    ema200: number;
  };
  
  marketStructure: {
    pattern: MarketStructure;
    points: MarketStructurePoint[];
  };
  
  dominantBreak: DominantBreak;
  cb1: CB1Point;
  fibonacci: FibonacciLevels;
}
