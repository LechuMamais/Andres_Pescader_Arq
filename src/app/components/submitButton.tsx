import { motion } from 'framer-motion'

export default function SubmitButton({
  text,
  isSubmitting = false
}: {
  text: string
  isSubmitting?: boolean
}) {
  return (
    <motion.button
      type='submit'
      className='relative px-8 py-2 w-[133px] text-black border-none rounded-full uppercase font-semibold tracking-wider cursor-pointer'
      style={{
        backgroundColor: 'var(--color-gray-50)'
      }}
      whileHover={{
        backgroundColor: 'var(--color-gray-300)',
        transition: { duration: 0.2 }
      }}
      whileTap={{
        backgroundColor: 'var(--color-gray-400)',
        transition: {
          duration: 0.1,
          ease: 'easeOut'
        }
      }}
    >
      <span className='relative z-10 '>
        {isSubmitting ? (
          <svg
            className='animate-spin h-5 w-5 text-black mx-auto'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
            />
          </svg>
        ) : (
          <span>{text}</span>
        )}
      </span>
    </motion.button>
  )
}
