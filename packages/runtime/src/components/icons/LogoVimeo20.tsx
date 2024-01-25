import { ComponentPropsWithoutRef } from 'react'

export function LogoVimeo20(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
      <path d="M19.993 5.157q-.13 3.044-4.076 8.323Q11.837 19 9.01 19q-1.748 0-2.957-3.364-.811-3.092-1.615-6.174-.9-3.37-1.93-3.37c-.57.248-1.1.58-1.568.985L0 5.816q1.479-1.35 2.916-2.71 1.97-1.776 2.958-1.871 2.33-.237 2.87 3.319.579 3.837.805 4.772.675 3.18 1.479 3.178.626 0 1.883-2.055a8.3 8.3 0 0 0 1.345-3.134q.18-1.777-1.344-1.775a3.7 3.7 0 0 0-1.48.326q1.481-5.004 5.65-4.862 3.09.09 2.907 4.159" />
    </svg>
  )
}