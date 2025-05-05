interface NavLink {
  href: string
  label: string
  width: string
  x: number
}

export const menuLinks: NavLink[] = [
  { href: '/', label: 'WORK', width: '38px', x: 0 },
  { href: '/about', label: 'ABOUT', width: '42px', x: 69 },
  { href: '/contact', label: 'CONTACT', width: '56px', x: 143 }
]
