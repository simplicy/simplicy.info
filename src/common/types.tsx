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

export type EmailForCreate = {
  sender_name: string;
  subject: string;
  message: string;
  from: string;
}

