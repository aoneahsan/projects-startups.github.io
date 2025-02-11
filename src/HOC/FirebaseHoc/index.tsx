import { getAuthInstance } from '@/firebaseInstance/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

const FirebaseHoc: React.FC = () => {
  const firebaseAuth = getAuthInstance();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (firebaseUser) => {});
  }, []);
  return <></>;
};

export default FirebaseHoc;
