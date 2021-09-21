import type { AppProps } from "next/app";
import { globalStyles, darkTheme } from "../stitches.config";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        dark: darkTheme.className,
        light: "light",
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
