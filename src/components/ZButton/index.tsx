import { Button } from 'primereact/button';
import { useRef } from 'react';
import { useButton } from 'react-aria';

interface IZButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const ZButton: React.FC<IZButtonProps> = ({ children, onClick }) => {
  let ref = useRef(null);

  const ariaButtonProps = useButton({}, ref);

  return (
    <Button
      ref={ref}
      {...ariaButtonProps.buttonProps}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ZButton;
