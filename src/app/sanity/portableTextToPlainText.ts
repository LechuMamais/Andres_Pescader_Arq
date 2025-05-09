import type { PortableTextBlock } from '@portabletext/types'

export function portableTextToPlainText(
  blocks: PortableTextBlock[] | null | undefined,
  maxLength?: number
): string {
  if (!blocks) return ''

  return blocks
    .map(block => {
      if (block._type !== 'block' || !Array.isArray(block.children)) return ''
      return block.children.map(child => ('text' in child ? child.text : '')).join(' ')
    })
    .join('\n')
    .substring(0, maxLength || 160)
}
