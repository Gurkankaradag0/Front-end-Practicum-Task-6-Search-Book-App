import { useWindowScroll } from 'react-use';
import Scroll from 'react-scroll'
import { Icon } from '../Icons'

function ScrollToTop() {
    const { y } = useWindowScroll()
    const scroll = Scroll.animateScroll
    
    if (y < 100) return (<></>)
    return (
        <div 
            className='fixed bottom-5 right-8 z-50 border-none outline-none text-white-950 bg-white-50 cursor-pointer rounded-full w-10 h-10 flex justify-center items-center'
            onClick={() => scroll.scrollToTop()}
        >
            <Icon name="upArrow" size={32} />
        </div>
    )
}

export default ScrollToTop