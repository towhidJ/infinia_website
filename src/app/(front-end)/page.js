import Banner from '@/components/front-end/Banner'
import Cra from '@/components/front-end/Cra'
import Footer from '@/components/front-end/Footer'
import Navbar from '@/components/front-end/Navbar'
import Strategies from '@/components/front-end/Strategies'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            
            <Navbar />
           
            <main className="mt-1 text-black">
                <Cra />
                <Strategies/>
            </main>
    
           <Footer />
           

        </>
    )
}
