import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class SendEmailDto {
  @IsString({ each: true })
  @IsNotEmpty()
  to: string | string[];

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  html: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  sender?: string;
}
