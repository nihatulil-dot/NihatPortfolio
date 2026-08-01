"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({
  isLoading,
}: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[90%] max-w-xl rounded-xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">
            <motion.pre
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm text-green-400 leading-7"
            >
{`> Initializing Portfolio...
> Loading Components...
> Loading Projects...
> Loading Trading Lab...

✔ Ready`}
            </motion.pre>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}