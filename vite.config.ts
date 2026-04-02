import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        'react-native/Libraries/Renderer/shims/ReactNativeViewConfigRegistry': path.resolve(__dirname, 'src/shims/ReactNativeViewConfigRegistry.ts'),
        'react-native-web/Libraries/Renderer/shims/ReactNativeViewConfigRegistry': path.resolve(__dirname, 'src/shims/ReactNativeViewConfigRegistry.ts'),
        'react-native/Libraries/Pressability/PressabilityDebug': path.resolve(__dirname, 'src/shims/PressabilityDebug.ts'),
        'react-native-web/Libraries/Pressability/PressabilityDebug': path.resolve(__dirname, 'src/shims/PressabilityDebug.ts'),
        'react-native': 'react-native-web',
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
