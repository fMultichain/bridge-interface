import React from "react";
// import Image from "next/image";
import type { NextPage } from "next";
import { BridgeInteraction } from "components/BridgeInteraction";
import MetaHeader from "components/MetaHeader.tsx";
// import { WrapInteraction } from "~~/components/wrapper-ui/WrapInteraction";

const WrapperUI: NextPage = () => {
  return (
    <>
      {/* @ts-ignore: TODO */}
      <MetaHeader title="Bridge | lz-fMULTI" description="Bridge lz-fMULTI.">
        {/* We are importing the font this way to lighten the size of SE2. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap"
          rel="stylesheet"
        />
      </MetaHeader>
      <div
        className={`grid grid-cols-1 flex-grow ${"sm:gap-36"}`}
        data-theme="defaultPageStyle"
      >
        <div
          className="grids text-center text-2xl font-bold justify-center rounded-lg border-8 p-0 m-1.5"
          style={{
            borderTopColor: "#005AFF", // BLUE
            borderLeftColor: "#005AFF", // BLUE
            borderRightColor: "#005AFF", // BLUE
            borderBottomColor: "#005AFF", // BLUE
            fontWeight: "bold",
          }}
        >
          {`Bridge lz-fMULTI`}
          {/* @ts-ignore: TODO */}
          <BridgeInteraction />
        </div>
      </div>
    </>
  );
};

export default WrapperUI;
