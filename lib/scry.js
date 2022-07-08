
export async function getCard(cardname) {
    // fetch a card
    //TODO: use local db instead
    const res = await fetch('https://api.scryfall.com/cards/search?q=' + encodeURIComponent(cardname));
    return res.json();
}
  