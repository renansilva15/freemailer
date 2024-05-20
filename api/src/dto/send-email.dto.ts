import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class SendEmailDto {
  @ApiProperty({
    description: 'Email or list of emails to send',
    example: 'example@example.com',
  })
  @IsString({ each: true })
  @IsNotEmpty()
  to: string | string[];

  @ApiProperty({
    description: 'Subject of the email',
    example: 'Meeting Reminder',
  })
  @IsString()
  @IsNotEmpty()
  subject: string;

  @ApiProperty({
    description: 'Text content of the email',
    example: 'This is the plain text content of the email.',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  text?: string;

  @ApiProperty({
    description: 'HTML content of the email',
    example: '<p>This is the <strong>HTML</strong> content of the email.</p>',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  html?: string;

  @ApiProperty({
    description: "Sender's Name",
    example: 'John Doe',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  sender?: string;
}
