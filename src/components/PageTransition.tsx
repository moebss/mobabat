import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

const pageVariants = {
    initial: { opacity: 0, scale: 0.98, filter: 'blur(5px)' },
    in: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    out: { opacity: 0, scale: 1.02, filter: 'blur(5px)' },
};

const pageTransition = {
    type: 'tween' as const,
    ease: 'easeInOut' as const,
    duration: 0.4,
};

export function PageTransition({ children }: { children: ReactNode }) {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}
