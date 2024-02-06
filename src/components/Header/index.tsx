import React from "react";
// import Image from "next/image";
// import Link from "next/link";
import ConnectButton from "../Buttons/ConnectButton";

export function Header() {

    return (
        <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
            <div className="navbar-start w-auto lg:w-1/2">
                <div className="navbar-end flex-grow mr-4">
                    {/* @ts-ignore */}
                    <ConnectButton />
                </div>
            </div>
        </div>
    );
}