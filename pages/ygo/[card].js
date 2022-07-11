import Link from 'next/link';
import { getCard } from '../../lib/ygop.js';
import {useRouter} from 'next/router'

function Card({objCard}) {
    var router = useRouter()

    if (objCard.error == true) {
        //If no card found, go to error page
        router.push('/error');
    } else {
        //Else, return it
        return (
            <>
                <h1>{objCard.name} {objCard.level} {objCard.attribute}</h1>
                <h2>{objCard.type} - {objCard.race} {objCard.archetype}</h2>
                <p>⚔️ {objCard.atk} / 🛡️ {objCard.def}</p>
                <p className='rules'>{objCard.rules}</p><br/>
                <Link href='/'>
                    <a>Go back!</a>
                </Link>
            </>
        );
    }

}

export async function getServerSideProps({params}) {
    const data = await getCard(params.card)
    let objCard;

    if (data.error) {
        objCard = {
            error: true,
        }
    } else {
        objCard = {
            name: data.data[0].name,
            level: data.data[0].level ? "- Lv" + data.data[0].level : data.data[0].linkval ? "- Link-" + data.data[0].linkval : '',
            race: data.data[0].race,
            type: data.data[0].type,
            archetype: data.data[0].archetype ? '- ' + data.data[0].archetype : '',
            attribute: data.data[0].attribute ? '- ' + data.data[0].attribute : '',
            atk: data.data[0].atk ?? '―',
            def: data.data[0].def ?? '―',
            rules: data.data[0].desc,
            error: false,
        }
    }

    return {
        props: {
            objCard: objCard
        }
    };
}

export default Card