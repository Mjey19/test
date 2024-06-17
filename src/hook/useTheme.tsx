import React from "react";

function useTheme() {
  const [theme, setTheme] = React.useState("dark");
  React.useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, setTheme };
}

export default useTheme;
