const useGenres = (slectedGenres) => {
  if (slectedGenres < 1) return "";
  const GenreIDs = slectedGenres.map((item) => item.id);
  return GenreIDs.reduce((acc, curr) => acc + "," + curr);
};

export default useGenres;
