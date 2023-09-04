export const getSongsList = async (url, setFunction, refresh) => {
  const response = await fetch(url);
  const formattedData = await response.json();
  setFunction(formattedData?.results);
  refresh && refresh(false);
};
