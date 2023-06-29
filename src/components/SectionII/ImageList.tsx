import React from 'react'

const ImageList = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
    return (
        <div className='grid grid-cols-4 items-start  gap-[2rem]'>
            {children}
        </div>
    )
}

export default ImageList

export const SingleImageItem = ({ image, content }: { image?: string, content: JSX.Element | string }) => {
    return (
        <div className='flex flex-col items-center '>
            <div className="image_container"></div>
            {content}
        </div>
    )
}