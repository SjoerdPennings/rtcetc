import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function Home() {
    const router = useRouter();

    function searchCard() {
        router.push('/card/' + encodeURIComponent(document.getElementById('card').value));
    }

    function handleEnter(event)  {
        if (event.code == 'Enter') {
            searchCard()
        }
    }

    useEffect(() => {
        window.addEventListener('keypress', handleEnter);
        return () => {
        window.removeEventListener('keypress', handleEnter)
        }
    })

  return (
        <>
        <h1>👏 Reading 👏 The 👏 Card 👏 Explains 👏 The 👏 Card 👏</h1>
        <p>A Scryfall card fetcher made with Next.js.</p>
        <input type="text" placeholder="Pick a card." name="card" id="card" />
        <button onClick={searchCard}>Submit</button>
        </>
    )
}