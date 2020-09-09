import { useState, useEffect } from 'react';

import { tabletSize } from 'styles/queries';
import useWindowWidth from './useWindowWidth';

// hook responsavel por trackear se tamanho da tela é mobile ou nao
export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const width = useWindowWidth();

  useEffect(() => {
    if (width < tabletSize) setIsMobile(true);
    else setIsMobile(false);
  }, [width]);

  return isMobile;
}
