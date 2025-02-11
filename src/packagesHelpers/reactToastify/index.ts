import { toast } from 'react-toastify';

export const showToast = ({ content }: { content: React.ReactNode }) => {
  toast(content, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
