import { T } from '@tolgee/react';

interface IZTranslateProps {
  keyName: string;
  defaultValue?: string;
  noWrap?: false;
  params?: Record<string, string | number>;
}

const ZTranslate: React.FC<IZTranslateProps> = ({
  keyName,
  defaultValue,
  noWrap = false,
  params = {},
}) => {
  return (
    <T
      keyName={keyName}
      defaultValue={defaultValue}
      noWrap={noWrap}
      params={params}
    />
  );
};

export default ZTranslate;
