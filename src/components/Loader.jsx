import React, { memo } from 'react';

function Loader() {
    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className='size-24 border-blue-500 border-t-blue-900 rounded-full animate-spin'></div>
        </div>
    )
}

export default memo(Loader);
