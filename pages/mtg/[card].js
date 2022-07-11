import Link from 'next/link';
import { getCard } from '../../lib/scry.js';
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
                <h1>{objCard.name} - {objCard.cost}</h1>
                <h2>{objCard.type}</h2>
                <p>⚔️ {objCard.pow} / 🛡️ {objCard.def}</p>
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

    if (data.object != 'error') {
        objCard = {
            name: data.data[0].name,
            cost: data.data[0].mana_cost,
            type: data.data[0].type_line,
            pow: data.data[0].power ?? '―',
            def: data.data[0].toughness ?? '―',
            rules: data.data[0].oracle_text,
            error: false,
        }
    } else {
        //If no card found, return error variable.
        objCard = {
            error: true,
        }
    }

    return {
        props: {
            objCard: objCard
        }
    };
}

export default Card