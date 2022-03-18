export const dogImg = async (i) => {

    const imgUrl = `https://dog.ceo/api/breed/${i}/images`
    const resp = await fetch ( imgUrl );
    const img = await resp.json ();

    return (img.message)
}