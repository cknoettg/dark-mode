import React, { useState } from "react";
import useLocalStorage from './useLocalStorage';

const darkMode = () => {
    const [enabledState, setEnabledState] = useLocalStorage('enabled','true');

    //enabled - is value from
    //  useLocalStorage true or false
    //what is my key-value pair?
    const enabled = useLocalStorage();

    //we can refactor this to ? later
    useEffect(() => {
          const className = "dark-mode";
          const element = window.document.body;
          if (enabled) {
            element.classList.add(className);
          } else {
            element.classList.remove(className);
          }
          //add dependency array
        }, [enabled]);

    return [enabled, setEnabledState];
}

export default useDarkMode;