import Logo from '../assets/react.svg'

function Navbar() {
    return (
        <nav className='grid p-4 h-[90px] items-center grid-cols-2 text-white  bg-secondary justify-between'>
            <div className='flex items-center gap-2 text-lg'>
                <img src={Logo} alt='logo' />
                <h2 className='font-bold text-primary'>ReactFacts</h2>
            </div>

            <div className='text-right'>
                React Course - Project 1
            </div>
        </nav>
    )
}

export default Navbar