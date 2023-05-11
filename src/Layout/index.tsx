import React from 'react'
import Visual from './Visual'
import Content from './Content'

const Layout = (children: any) => {
    return (
        <div className='main'>
            <Visual />
            <Content />
        </div>
    )
}

export default Layout