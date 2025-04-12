import { SVGProps } from 'react'
import { IconProps } from './interface'

export function Icon(
  SvgComponent: React.FC<SVGProps<SVGSVGElement>>
): React.FC<IconProps> {
  const Component = ({
    height = '24',
    width = '24',
    className = '',
  }: IconProps) => {
    const svgProps = {
      height,
      width,
      className,
    }
    return <SvgComponent {...svgProps} />
  }

  return Component
}
