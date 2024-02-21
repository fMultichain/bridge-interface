import React, { ReactNode, useMemo } from 'react'
import { classNames } from 'functions'
import { BLUE, WHITE } from 'config'

import SwapIcon from 'components/Icons/Header/SwapIcon'
import EarnIcon from 'components/Icons/Mobile/EarnIcon'

export interface BarItemLeaf {
  key: string
  link: string
  title?: string
  icon?: ReactNode
}

export interface BarItemNode {
  key: string
  items: BarItemLeaf[]
  title: string
  icon: ReactNode
}

export type BarItem = BarItemLeaf | BarItemNode
export type Bar = BarItem[]

type UseBar = () => Bar

const useMenu: UseBar = () => {

  return useMemo(() => {

    // Swap
    let tradeMenu: BarItem = {
      key: 'swap',
      link: '/swap',
      title: 'Swap',
      //   @ts-ignore
      icon: <SwapIcon
        className={classNames(`w-7 h-7 rounded-md`)}
        // className={classNames(`w-7 h-7 rounded-md`, isExchange ? `w-8 h-8 border border-4 border-[${getChainColor(chainId)}] p-0.5` : ``)}
        fillPrimary={WHITE}
        fillSecondary={BLUE}
        size={32}
      />,
    }

    const mainItems: Bar = [tradeMenu]

    // Earn
    mainItems.push({
      key: 'earn',
      link: '/earn',
      title: 'Earn',
      // @ts-ignore
      icon: <EarnIcon
        className={classNames(`w-7 h-7 rounded-md`
          // , isEarn ? `w-8 h-8 border border-4 border-[${getChainColor(chainId)}]` : ``
        )}
        fillPrimary={WHITE}
        fillSecondary={BLUE}
        size={32}
      />,
    })

    return mainItems.filter((el) => Object.keys(el).length > 0)
  }, [])
}

export default useMenu