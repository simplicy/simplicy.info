export type Card = {
  name: string;
  onClick?: () => void;
  enabled?: boolean;
  styles?: string | null;
}

export type BoxItemProps = {
  name: string;
  onClick?: () => void;
  enabled?: boolean;
  images?: any[];
  styles?: string | null;
}

