export type Card = {
  name: string;
  onClick?: () => void;
  isSelected?: boolean;
  enabled?: boolean;
  styles?: string | null;
}

export type Game = {
  appid: number;
  name: string;
  playtime_forever: number;
}

export type BookingInfo = {
  attendees: string;
  subject: string;
  message: string;
  start: string;
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

export type ClosytUser = {
  id: string,
  email: string,
  name: string,
  user_type: string,
  privacy: string,
  dob: string,
  bio: string,
  picture: string,
  last_login: string,
  role: string,
  ctime: string,
  utime: string,
}

