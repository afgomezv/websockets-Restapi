export interface Ticket {
  id: string;
  number: number;
  createdAt: Date;
  handleAtDesk?: string; //Desk 1,
  handleAt?: Date;
  done: boolean;
}
