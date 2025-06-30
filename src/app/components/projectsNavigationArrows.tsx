import Link from 'next/link'
import ArrowIcon from './arrowIcon'
import { useLocale } from 'next-intl'

type NavigationProject = { titulo: string; proy_id: string }

interface ProjectsNavigationArrowProps {
  anterior: NavigationProject | null
  siguiente: NavigationProject | null
}

export default function ProjectsNavigationArrows({
  anterior,
  siguiente
}: ProjectsNavigationArrowProps) {
  const locale = useLocale()
  return (
    <nav className='flex justify-between items-center mt-16 sm:mt-32 px-4'>
      {anterior ? (
        <Link href={`/${locale}/${anterior.proy_id}`} className='flex items-center gap-2 group'>
          <ArrowIcon direction='left' />
          <span className='text-lg tracking-wide sr-only sm:not-sr-only'>{anterior.titulo}</span>
        </Link>
      ) : (
        <div />
      )}

      {siguiente ? (
        <Link
          href={`/${locale}/${siguiente.proy_id}`}
          className='flex items-center gap-2 group py-2'
        >
          <span className='text-lg tracking-wide sr-only sm:not-sr-only'>{siguiente.titulo}</span>
          <ArrowIcon direction='right' />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}
