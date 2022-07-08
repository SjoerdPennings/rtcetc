import Head from 'next/head';

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>Reading The Card Explains The Card</title>
            </Head>
            <div className='container'>
                {children}
            </div>
            <footer>
                <p className='footerText'>Data provided by Scryfall, made with Next.js, hosted on Vercel.</p>
            </footer>
        </>
    );
}