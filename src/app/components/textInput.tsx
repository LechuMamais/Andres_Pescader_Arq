// components/TextInput.tsx
'use client'

interface TextInputProps {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder?: string
  required?: boolean
  type?: 'text' | 'email'
  textarea?: boolean
}

export function TextInput({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  required = true,
  type = 'text',
  textarea = false
}: TextInputProps) {
  const commonStyles =
    'w-full mb-4 md:mb-8 mt-2 p-3 md:px-6 md:py-4 bg-gray-200 dark:bg-[#373737] rounded-xs focus:outline-none focus:ring-0 focus:bg-gray-300 dark:focus:bg-[#4e4e4e] focus:border-transparent transition-colors duration-120'

  return (
    <>
      <label htmlFor={name}>
        {label}
        {required && '*'}
      </label>
      {textarea ? (
        <textarea
          name={name}
          id={name}
          rows={5}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={commonStyles}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={commonStyles}
        />
      )}
    </>
  )
}
