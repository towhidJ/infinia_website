import Banner from '@/components/front-end/Banner'
import Footer from '@/components/front-end/Footer'
import Navbar from '@/components/front-end/Navbar'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            
            <Navbar />
           
            <main className="mt-1 text-black">
                <Banner />
            </main>
           <img src='https://www.orfonline.org/public/uploads/posts/image/cotton-production.jpg' alt='01254'/>
           <Footer />
           

        </>
    )
}
