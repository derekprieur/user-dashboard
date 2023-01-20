import React from 'react'

const Header = ({ name }) => {
    return (
        <div className='flex justify-between px-4 pt-4'>
            <h2>{name}</h2>
            <h2>Welcome Back!</h2>
        </div>
    )
}

export default Header