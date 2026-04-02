import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export default function Layout({ children, showNav = false }: LayoutProps) {
  return (
    <div className="min-h-screen max-w-md mx-auto bg-background relative overflow-hidden flex flex-col">
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      
      {showNav && (
        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/80 backdrop-blur-xl border-t border-outline-variant/30 px-6 py-4 flex justify-around items-center z-50 rounded-t-3xl shadow-lg">
          <button className="flex flex-col items-center gap-1 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home_health</span>
            <span className="text-xs font-bold">홈</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-outline">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-xs font-bold">설정</span>
          </button>
        </nav>
      )}
    </div>
  );
}
