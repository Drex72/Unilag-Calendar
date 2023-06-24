import React from 'react'

const Header = () => {
    return (
        <div>
            <img src={require("../unilag-logo.jpeg")}
                className="h-[100px] w-[110px] ml-3 cursor-pointer"
                alt="Unilag Logo"
            />
            <div className="flex justify-center">
                <h1 className="text-[40px] -translate-y-[80px]">
                    University Calendar
                </h1>
            </div>
        </div>
    )
}

export default Header