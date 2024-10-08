import { Footer } from './footer';
import { HomeContent } from './homecontent'
import { HomeScrollContent } from './homescrollcontent'
import { Navbar } from './navbar'
import { SearchBar } from './searchbar'

export function Home() {
    return (
        <>
            <Navbar />
            <SearchBar />
            <HomeScrollContent />
            <HomeContent />
            <Footer/>
        </>
    );
}