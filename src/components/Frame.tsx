import Navbar from './Navbar'
import Main from './Main'

function Frame() {
    return (
        <div className='w-1/2  max-w-full m-auto'>
            <Navbar />
            <Main />
        </div>
    )
}

export default Frame