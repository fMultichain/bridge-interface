import { FC } from 'react'

export interface Props {
    fillPrimary: string
    fillSecondary: string
    className: string
    size: number
}

const WalletIcon: FC<Props> = ({ fillPrimary, fillSecondary, className, size }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className={className}
            style={{
                height: size,
                width: size
            }}
            fill={fillPrimary}
        >
            <defs>
                {/* <!-- <style>.fa-secondary{opacity:.4}</style> --> */}
            </defs>

            <path
                fill={fillPrimary}
                d="M48 127.1L448 128C448.4 128 448.9 128 449.3 128C460.5 128.3 470.9 131.6 480 136.9V136.6C499.1 147.6 512 168.3 512 192V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V80C0 106.5 21.49 128 48 128L48 127.1zM416 336C433.7 336 448 321.7 448 304C448 286.3 433.7 272 416 272C398.3 272 384 286.3 384 304C384 321.7 398.3 336 416 336z"
            />

            <path
                fill={fillSecondary}
                d="M0 80C0 53.49 21.49 32 48 32H432C458.5 32 480 53.49 480 80V136.6C470.6 131.1 459.7 128 448 128L48 128C21.49 128 0 106.5 0 80V80z"
            />
        </svg>
    )
}
export default WalletIcon