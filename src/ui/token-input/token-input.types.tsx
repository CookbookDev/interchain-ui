export interface TokenInputProps {
  progress: number;
  symbol: string;
  denom: string;
  available: number;
  amount?: string | undefined;
  imgSrc: string;
  onProgressChange: (progress: number) => void;
  onAmountChange: (value: string) => void;
}
