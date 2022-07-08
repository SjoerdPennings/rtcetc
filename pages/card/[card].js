import Link from 'next/link';
import { getCard } from '../../lib/scry.js';

function Card({objCard}) {
    return (
        <>
        <h1>{objCard.name} - {objCard.cost}</h1>
        <h2>{objCard.type}</h2>
        <p>⚔️ {objCard.pow} / 🛡️ {objCard.def}</p>
        <pre className='rules'>{objCard.rules}</pre><br/>
        <Link href='/'>
            <a>Go back!</a>
        </Link>
        </>
    );
}

export async function getServerSideProps({params}) {
    const data = await getCard(params.card)

    const objCard = {
        name: data.data[0].name,
        cost: data.data[0].mana_cost,
        type: data.data[0].type_line,
        pow: data.data[0].power ?? '―',
        def: data.data[0].toughness ?? '―',
        rules: data.data[0].oracle_text
    }

    return {
        props: {
            	objCard: objCard
        }
    };
}

export default Card