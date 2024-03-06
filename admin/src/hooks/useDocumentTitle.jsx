import { useRef, useEffect } from 'react';

const useDocumentTitle = (title, prevailOnUnmount = false) => {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title + ' | REPAPIC.';
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
};

export default useDocumentTitle;
