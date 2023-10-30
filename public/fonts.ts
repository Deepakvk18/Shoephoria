import {    Inter, 
    Montserrat, 
    Open_Sans, 
    Lato, 
    Poppins, 
    Ubuntu_Mono, 
    Ubuntu,  
    Poltawski_Nowy, 
    Titillium_Web 
} from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const open_sans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })
const lato = Lato({ subsets: ['latin'], variable: '--font-lato' })
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins' })
const ubuntu_mono = Ubuntu_Mono({ subsets: ['latin'], variable: '--font-ubuntu-mono' })
const ubuntu = Ubuntu({ subsets: ['latin'], variable: '--font-ubuntu' })
const poltawski_nowy = Poltawski_Nowy({ subsets: ['latin'], variable: '--font-poltawski-nowy' })
const titillium_web = Titillium_Web({ subsets: ['latin'], variable: '--font-titillium-web' })

export {
inter,
montserrat,
open_sans,
lato,
ubuntu_mono,
ubuntu,
poppins,
poltawski_nowy,
didact_gothic,
titillium_web
}