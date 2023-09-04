export const getSongsList = async (url, setFunction, refresh) => {
  const response = await fetch(url);
  const formattedData = await response.json();

  // setTimeout(() => setFunction(formattedData?.results), 3000);
  //Comment the below code and uncomment the above code to see the loader.
  setFunction(formattedData?.results);
  refresh && refresh(false);
};
