import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-tsconfig-paths";
import viteReactJsx from "vite-react-jsx";
import { injectHtml } from "vite-plugin-html";

export default defineConfig(({ mode }) => {
  const isMockMode = mode === "mock";

  const mockEntryPoint = '<script type="module" src="/src/mockedIndex.tsx"></script>';
  const baseEntryPoint = '<script type="module" src="/src/index.tsx"></script>';
  const injectScript = isMockMode ? mockEntryPoint : baseEntryPoint;

  return {
    plugins: [
      injectHtml({
        data: {
          injectScript: injectScript,
        },
      }),
      tsconfigPaths(),
      viteReactJsx(),
      reactRefresh(),
    ],
    resolve: {
      alias: {
        "~@linzjs": "@linzjs",
      },
    },
    define: {
      "process.env": process.env,
    },
    base: mode === "production" ? "/survey/" : "/",
    server: {
      port: 11020,
      proxy: isMockMode
        ? undefined
        : {
            "/api": {
              target: "http://localhost:12020",
              changeOrigin: true,
            },
          },
    },
  };
});
