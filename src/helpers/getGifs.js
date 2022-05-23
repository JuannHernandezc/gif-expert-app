export const getGifs = async ( category ) => {
    const url =
    `https://api.giphy.com/v1/gifs/search?api_key=ljjiW3b2g12CqikdXPkZ8Jp8lOH92Q0x&limit=10&q=${encodeURI(category)}`;
    const answer = await fetch(url);
    const { data } = await answer.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    return gifs;
  };