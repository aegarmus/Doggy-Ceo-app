export const getbreeds = async() => {

    const url = 'https://dog.ceo/api/breeds/list/all'
    const resp = await fetch ( url );
    const breeds = await resp.json ();

    return breeds.message
}