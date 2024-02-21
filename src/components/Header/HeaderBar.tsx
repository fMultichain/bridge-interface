import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { classNames } from 'functions'
import { BLACK, BLUE, WHITE } from 'config'
// import SwapIcon from 'components/Icons/Header/SwapIcon'
// import EarnIcon from 'components/Icons/Mobile/EarnIcon'
// import WalletIcon from 'components/Icons/Header/WalletIcon'
// import useBar from './useBar'
import BarsIcon from '../Icons/Header/BarsIcon'
import Typography from '../Typography'
import CloseIcon from '../Icons/Header/CloseIcon'
import formatAddress from '@/functions/formatAddress'
import { useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers/react'
// import useActiveWeb3React from '@/hooks/useActiveWeb3React'

const HeaderBar = () => {
    const router = useRouter()
    // const { asPath } = useRouter()
    const { open } = useWeb3Modal()
    const { address } = useWeb3ModalAccount()
    // const { address } = use()

    // const { chainId } = useActiveWeb3React()
    const [showMenu, setShow] = useState(false)

    // const typeStyle = `justify-center text-center w-full border border-[${BLUE}] rounded p-2`

    // const bridgeRoute = useCallback(() => {
    //     router.push(`/bridge`)
    // }, [])
    const homeRoute = useCallback(() => {
        router.push(`/`)
    }, [])
    const docsRoute = useCallback(() => {
        router.push(`https://fmulti.gitbook.io/fmulti`)
    }, [])
    const twitterRoute = useCallback(() => {
        router.push(`https://x.com/FMultichain`)
    }, [])
    const telegramRoute = useCallback(() => {
        router.push(`https://t.me/FuckMulti`)
    }, [])

    const toggleShow = () => { setShow(!showMenu) }
    const Divider = () => {
        return (<div
            // className={'flex-column py-2 px-2'}
            style={{
                border: "2px solid",
                height: "0rem",
                width: "12rem",
                marginBottom: "12px",
                display: "flex",
                flexDirection: "column",
            }}
        />
        )
    }

    return (
        <div
            className={`fixed top-0 left-auto z-10 flex flex-row items-center justify-center w-auto rounded-xl`}
        >

            {/* xl:relative // moves to top */}
            <div
                className="flex items-center w-full space-x-2 justify-end"
                onClick={toggleShow}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    border: '3px solid',
                    borderColor: BLUE,
                    backgroundColor: WHITE,
                    padding: '10px',
                    borderRadius: '10px',
                    marginLeft: '2px',
                    width: '100%',
                    justifyItems: 'center',
                    alignItems: 'center',
                    marginTop: '1rem',

                }}
            >
                {showMenu &&
                    <div
                        // className='absolute'
                        style={{
                            display: 'flex',
                            // top: 12,
                            // left: 0,
                            justifyContent: 'right',
                            color: BLUE,
                            width: '100%',
                        }}
                        onClick={toggleShow}
                    >
                        {/* @ts-ignore */}
                        <CloseIcon
                            fillPrimary={BLUE}
                            fillSecondary={BLUE}
                            className={'w-7 h-7'}
                            size={16}
                        />
                    </div>
                }
                {!showMenu &&
                    // @ts-ignore
                    <BarsIcon
                        fillPrimary={showMenu ? `${BLUE}` : `${BLACK}`}
                        fillSecondary={showMenu ? `${BLACK}` : `${BLUE}`}
                        className={'w-7 h-7'}
                        size={32}
                    />
                }


                {showMenu &&
                    <div
                        className={`flex fixed bg-dark-1000 bottom-0 border-2 border-dark-800 rounded-xl left-0 z-10 gap-1 items-center justify-center w-full`}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            justifyItems: 'center',
                            alignItems: 'center',

                        }}
                    >
                        {/* <button
                            onClick={homeRoute}
                        > */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                width: address ? "14rem" : "12rem",
                                height: "1.5rem",
                                marginBottom: "12px",
                                justifyContent: "center",
                                border: "4px solid",
                                borderColor: BLACK,
                                borderRadius: "14px",
                                color: WHITE,
                                padding: "8px",
                                backgroundColor: BLUE,
                                fontWeight: "bold",
                            }}
                            onClick={() => open()}
                        >
                            {address
                                ? `${formatAddress(address ?? "")}`
                                : 'Connect Wallet'
                            }
                        </div>
                        {/* @ts-ignore */}
                        <Divider />
                        {/* </button> */}
                        {/* @ts-ignore */}
                        {/* <Image
                            src="/assets/black-and-blue-header.png"
                            height={80}
                            width={240}
                            alt="Black and Blue Header"
                            onClick={homeRoute}
                        /> */}
                        {/* <div
                            className={classNames(
                                `hover:border-2 hover:border-[${BLUE}] flex w-full justify-center rounded p-0.5`,
                                // isSwap && `hover:border border-2 border-[${BLUE}]`
                            )}
                            onClick={bridgeRoute}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12,
                                width: '85%',
                                justifyItems: 'center',
                                alignItems: 'center',
                                padding: '8px',
                                color: WHITE,
                                borderLeftColor: BLUE,
                                borderRightColor: BLUE,
                                borderRadius: '24px',
                                borderLeft: '8px solid',
                                borderRight: '8px solid',
                                marginTop: '0.5rem',
                                marginBottom: '0.5rem',
                                backgroundColor: BLACK,
                            }}
                        >
                            <Typography variant="h1" color={WHITE} align="center"
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {`Bridge`}
                            </Typography>
                        </div> */}
                        <div
                            className={classNames(
                                `hover:border-2 hover:border-[${BLUE}] flex w-full justify-center rounded p-0.5`,
                                // isSwap && `hover:border border-2 border-[${BLUE}]`
                            )}
                            onClick={twitterRoute}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12,
                                width: '85%',
                                justifyItems: 'center',
                                alignItems: 'center',
                                padding: '8px',
                                color: WHITE,
                                borderLeftColor: BLUE,
                                borderRightColor: BLUE,
                                borderRadius: '24px',
                                borderLeft: '8px solid',
                                borderRight: '8px solid',
                                marginTop: '0.5rem',
                                marginBottom: '0.5rem',
                                backgroundColor: BLACK,
                            }}
                        >
                            {/* @ts-ignore */}
                            <Typography variant="h1" color={WHITE} align="center"
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {`Twitter`}
                            </Typography>
                        </div>
                        <div
                            className={classNames(
                                `hover:border-2 hover:border-[${BLUE}] flex w-full justify-center rounded p-0.5`,
                            )}
                            onClick={telegramRoute}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12,
                                width: '85%',
                                justifyItems: 'center',
                                alignItems: 'center',
                                padding: '8px',
                                color: WHITE,
                                borderLeftColor: BLUE,
                                borderRightColor: BLUE,
                                borderRadius: '24px',
                                borderLeft: '8px solid',
                                borderRight: '8px solid',
                                marginTop: '0.5rem',
                                marginBottom: '0.5rem',
                                backgroundColor: BLACK,
                            }}
                        >
                            {/* @ts-ignore */}
                            <Typography variant="h1" color={WHITE} align="center"
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {`Telegram`}
                            </Typography>
                        </div>
                        <div
                            className={classNames(
                                `hover:border-2 hover:border-[${BLUE}] flex w-full justify-center rounded p-0.5`,
                            )}
                            onClick={docsRoute}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12,
                                width: '85%',
                                justifyItems: 'center',
                                alignItems: 'center',
                                padding: '8px',
                                color: WHITE,
                                borderLeftColor: BLUE,
                                borderRightColor: BLUE,
                                borderRadius: '24px',
                                borderLeft: '8px solid',
                                borderRight: '8px solid',
                                marginTop: '0.5rem',
                                marginBottom: '0.5rem',
                                backgroundColor: BLACK,
                            }}
                        >
                            {/* @ts-ignore */}
                            <Typography variant="h1" color={WHITE} align="center"
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {`Documentation`}
                            </Typography>
                        </div>
                        {/* @ts-ignore */}
                        
                        {/* <div
                            className={classNames(
                                `hover:border-2 hover:border-[${BLUE}] flex w-full justify-center rounded p-0.5`,
                                isWallet && `hover:border border-2 border-[${BLUE}]`)}
                            onClick={walletRoute}
                        >
                            <WalletIcon
                                fillPrimary={isWallet ? `${BLACK}` : `${BLUE}`}
                                fillSecondary={isWallet ? `${BLUE}` : `${BLACK}`}
                                className={'w-7 h-7'}
                                size={32}
                            /> 
                            <Typography variant="h1" color="textPrimary" align="center"
                            style={{
                                fontSize: '18px',
                                fontWeight: 'bold',
                            }}
                            >
                                {`Portfolio`}
                            </Typography>
                        </div> */}
                    </div>
                }
            </div>
        </div>
    )
}
export default HeaderBar