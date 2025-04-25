import { motion } from 'framer-motion';

export default function SubmitButton({ text }: { text: string }) {
    return (
        <motion.button
            type="submit"
            className="relative px-8 py-2 text-black border-none rounded-full uppercase font-semibold tracking-wider cursor-pointer"
            style={{
                backgroundColor: 'var(--color-gray-50)',
            }}
            whileHover={{
                backgroundColor: "var(--color-gray-300)",
                transition: { duration: 0.2 }
            }}
            whileTap={{
                backgroundColor: "var(--color-gray-400)",
                transition: {
                    duration: 0.1,
                    ease: "easeOut"
                }
            }}
        >
            <span className="relative z-10">Submit</span>
        </motion.button>
    )
}