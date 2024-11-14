import { useEffect, useState } from 'react';

const useScrollEnd = (ref?: React.RefObject<HTMLElement>) => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const element = ref?.current || document.documentElement;

    const handleScroll = () => {
      const scrollTop = element.scrollTop;
      const scrollHeight = element.scrollHeight;
      const clientHeight = element.clientHeight;

      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 10);
    };

    element.addEventListener('scroll', handleScroll);

    return () => element.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return isAtBottom;
};

export default useScrollEnd;
