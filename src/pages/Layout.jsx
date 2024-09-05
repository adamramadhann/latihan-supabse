import React, { useState } from 'react'
import {Outlet, Link} from 'react-router-dom'

const Layout = () => {
    const [close, setClose] = useState(false)
  return (
    <div className={`w-screen h-screen flex`}>
        <div className={`${close ? 'w-20' : 'w-40' } flex flex-col items-center bg-slate-100`}>
            <button onClick={() => setClose(prev => prev = !prev)} >{close ? 'open' : 'close'}</button>
            <Link to={'/list_warga'} >{close ? '💫' : 'List Warga'}</Link>
            <Link to={'/from_data_warga'} >{close ? '💫' : 'From Data Warga'}</Link>
        </div>
        <div className='fle-1 p-2'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout