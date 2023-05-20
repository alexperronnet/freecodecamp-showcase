import { SVGProps } from 'react'

import { iconPaths } from './icon-paths'

type IconProperties = SVGProps<SVGSVGElement> & {
  name: keyof typeof iconPaths
}

export const Icon = ({ name, ...properties }: IconProperties) => {
  const path = iconPaths[name]

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden='true' {...properties}>
      <path fill='currentColor' d={path} />
    </svg>
  )
}
