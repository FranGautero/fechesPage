import { useBreakpointValue } from "@chakra-ui/react";
// Hacemos nuestro 'custom hook' a partir de otro hook existente,
// es requerimiento que comience con 'use...' para que react sepa que es un hook
const useSmallScreenDetector = () => {
  return useBreakpointValue([true, true, false]);
};

export default useSmallScreenDetector;
