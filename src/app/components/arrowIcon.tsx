export default function ArrowIcon({
  direction = 'right',
  className = ''
}: {
  direction?: 'right' | 'left'
  className?: string
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 960 960'
      width='40'
      height='40'
      className={`fill-current text-black dark:text-white transition-transform duration-300 ${direction === 'left' ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'} ${className}`}
    >
      <path d='M702 659l-43-42 106-106H120v-60h645L659 343l43-42 178 179-178 179Z' />
    </svg>
  )
}
