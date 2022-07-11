import { useRouter } from 'next/router'


export default function Home() {
    const router = useRouter();

    function searchMTGCard() {
        router.push('/mtg/' + encodeURIComponent(document.getElementById('card').value));
    }

    function searchYGOCard() {
        router.push('/ygo/' + encodeURIComponent(document.getElementById('card').value));
    }

  return (
        <>
            <h1>👏 Reading 👏 The 👏 Card 👏 Explains 👏 The 👏 Card 👏</h1>
            <p>A MTG and YGO card fetcher made with Next.js.</p>
            <input type="text" placeholder="Pick a card." name="card" id="card" />
            <button onClick={searchMTGCard}>Search MTG</button>
            <button onClick={searchYGOCard}>Search YGO</button>
        </>
    )
}