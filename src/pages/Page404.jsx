import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { start, stop } from '../utils/animate'

function Page404() {
    useEffect(() => {
        start()
        return () => {
            stop()
        }
    }, [])
    return (
        <>
            <Helmet>
                <title>Search Book App - 404</title>
            </Helmet>
            <div className="w-full h-full flex flex-col justify-center items-center text-center mt-20">
                <div className="relative leading-none mb-8">
                    <h1 className="text-[160px] font-extrabold text-shadow-404">404</h1>
                </div>
                <p className="font-semibold text-xl">Görünen o ki kaybolmuşsun</p>
            </div>
        </>
    )
}

export default Page404