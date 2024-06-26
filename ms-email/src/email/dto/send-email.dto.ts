class Address {
  name: string;
  address: string;
}
export class SendEmailDto {
  to: string | Address | Array<string | Address>;

  subject: string;

  text?: string;

  html?: string;

  sender?: string;
}
