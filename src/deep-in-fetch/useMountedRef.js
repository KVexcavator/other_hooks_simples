import { useEffect, useRef } from "react";

// хук сообщает включен ли текущий компонент
export function useMountedRef() {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  });

  return mounted;
}