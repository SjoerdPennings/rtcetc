
export async function getCard(cardname) {
    // fetch a card
    const res = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=' + encodeURIComponent(cardname));
    return res.json();
}
  