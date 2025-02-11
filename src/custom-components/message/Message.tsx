import { useZTranslate } from '@/hooks/tolgee/useZTranslate';
import {
  Message as PrimeMessage,
  MessageProps as PrimeMessageProps,
} from 'primereact/message';
import { useRef } from 'react';

export interface MessageProps extends PrimeMessageProps {
  textTranslationKey?: string;
  summaryTranslationKey?: string;
  detailTranslationKey?: string;
}

export const Message = ({
  textTranslationKey,
  summaryTranslationKey,
  detailTranslationKey,
  text,
  summary,
  detail,
  ...props
}: MessageProps) => {
  const { t } = useZTranslate();
  const messageRef = useRef<PrimeMessage>(null);

  const translatedText = textTranslationKey ? t(textTranslationKey) : text;
  const translatedSummary = summaryTranslationKey
    ? t(summaryTranslationKey)
    : summary;
  const translatedDetail = detailTranslationKey
    ? t(detailTranslationKey)
    : detail;

  return (
    <PrimeMessage
      ref={messageRef}
      text={translatedText}
      summary={translatedSummary}
      detail={translatedDetail}
      {...props}
    />
  );
};
