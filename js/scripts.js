let uri = 'https://beitlehi.org';
//let response = await fetch(uri);
//console.log(response)


async function logMovies() {
  const response = await fetch("https://beitlehi.org"){mode: "no-cors"};
  const movies = await response();
  console.log(movies);
}

logMovies();