import React from 'react'
import HeaderBar from './HeaderBar'
import { BLACK, BLUE, WHITE } from '@/config'

const DefaultHeader = () => {

  return (
    <div
      style={{
        backgroundColor: WHITE,
        borderBottom: '4px solid',
        borderColor: BLACK
      }}
    >
      {/* <header className="w-full flex items-center justify-between border-2 border-ftmBlue min-h-[42px] h-[42px] px-2 bg-purple"> */}
      <header 
      // className={`w-full flex items-center text-white justify-between min-h-[36px] h-[36px] m-1`}
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "space-between",
          height: 36,
          minHeight: 36,
          width: 36,
          minWidth: 36,
          // backgroundColor: BLUE
          // width: `calc(100% - 2rem)`

        }}
      >
          {/* <div
            className={`hover:bg-dark-900 p-1 bg-dark-1000 border-2 rounded rounded-2xl 
                border border-[${BLUE}]
                hover:border-purple
                absolute left-2 top-2
                `}
            onClick={() => { setOpen(true) }}
            // onClick={swapRoute}
          > */}
            {/* <BarsIcon /> */}
            {/* // {DEFAULT_ICON} */}
          {/* </div> */}
        {/* @ts-ignore */}
        <HeaderBar />
      </header>
    </div>
  )
}
{/* <div style={{ height: HEADER_HEIGHT, minHeight: HEADER_HEIGHT }} /> */ }


export default DefaultHeader