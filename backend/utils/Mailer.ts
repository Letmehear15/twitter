import { SentMessageInfo } from 'nodemailer';
import { transport } from '../core/mailer';

type SendMessagePropsCallback = (
  err: Error | null,
  info: SentMessageInfo
) => void;

type SendMessageProps = {
  mailFrom: string;
  mailTo: string;
  mailSubject: string;
  mailText: string;
  mailHtml: string;
  callback: SendMessagePropsCallback;
};

export const sendMessage = async ({
  mailFrom,
  mailTo,
  mailSubject,
  mailText,
  mailHtml,
  callback,
}: SendMessageProps) => {
  transport.sendMail(
    {
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailText,
      html: mailHtml,
    },
    callback
  );
};
