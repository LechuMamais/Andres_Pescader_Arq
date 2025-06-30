import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')
  return (
    <footer className='text-center py-16 bg-black text-white  dark:bg-white dark:text-black tracking-wide font-[400]'>
      <p className='text-xl mb-2'>© {new Date().getFullYear()} Andres Pescader Arq</p>
      <p className='text-lg'>- {t('developedBy')} Alexis Mamais -</p>
    </footer>
  )
}
