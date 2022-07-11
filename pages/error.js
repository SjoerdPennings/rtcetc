import Link from "next/link";

export default function Error() {
    return (
        <>
            <h1>Error!</h1>
            <p className='rules'>There&apos;s no such card!</p><br/>
            <Link href='/'>
                <a>Go back!</a>
            </Link>
        </>
    );
}