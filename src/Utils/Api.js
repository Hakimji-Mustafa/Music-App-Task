export const getSongsList = async url => {
  const response = await fetch(url);
  const formattedData = await response.json();
  return formattedData;
};
