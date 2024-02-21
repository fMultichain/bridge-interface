import { FC } from 'react'

export interface Props {
  fillPrimary: string
  fillSecondary: string
  className: string
  size: number
  // chainId?: ChainId
}

// export const SwapIcon: <FC.ReactElement> = (fillPrimary: string, fillSecondary) => (
  const SwapIcon: FC<Props> = ({ fillPrimary, fillSecondary, className, size }) => {

    return (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512"
    // fill="#FFFFFF" 
    className={className ? className : "w-6 h-6"}
    style={{
      height: size,
      width: size
    }}
    fill={fillPrimary}
>

<path
    d="M105.4 470.6c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 370.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V370.7L54.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96z"
    fill={fillPrimary}
    />
 <path
    d="M361.4 41.4c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L416 141.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V141.3l-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96z"
    fill={fillSecondary}
    />
</svg>
)
    }
export default SwapIcon