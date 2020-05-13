import { useEffect } from "react";
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [enabledState, setEnabledState] = useLocalStorage('darkMode', false);

    //we can refactor this to ? later
    useEffect(() => {
          const className = "dark-mode";
          const element = window.document.body;
          if (enabledState) {
            element.classList.add(className);
          } else {
            element.classList.remove(className);
          }
          //add dependency array
        }, [enabledState]);

    return [enabledState, setEnabledState];
}