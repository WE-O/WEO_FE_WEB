import { RefObject, useEffect } from 'react';

const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  clickFunc: () => void,
  isTop: boolean = true,
) => {
  useEffect(() => {
    if (isTop) {
      const listnerEvent = (e: MouseEvent) => {
        const target = e.target as Element;
        if (!ref.current?.contains(target)) {
          e.stopPropagation();
          clickFunc();
        }
      };

      document.addEventListener('mousedown', listnerEvent);
      return () => {
        document.removeEventListener('mousedown', listnerEvent);
      };
    }
  }, [ref, clickFunc]);
};

export default useOnClickOutside;
