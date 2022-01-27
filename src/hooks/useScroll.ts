import { useEffect, useState } from 'react';

const useScroll = () => {
  const [show, setShow] = useState<boolean>(false);

  const controlTab = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlTab);
    return () => {
      window.removeEventListener('scroll', controlTab);
    };
  }, []);

  return show;
};

export default useScroll;
