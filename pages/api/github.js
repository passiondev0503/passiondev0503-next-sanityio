import fetch from 'isomorphic-unfetch';

export default async (_, res) => {
  // const userResponse = await fetch('https://api.github.com/users/leerob');
  // const userReposResponse = await fetch(
  //   'https://api.github.com/users/leerob/repos'
  // );

  // const user = await userResponse.json();
  // const repositories = await userReposResponse.json();

  // const mine = repositories.filter((repo) => !repo.fork);
  // const stars = mine.reduce((accumulator, repository) => {
  //   return accumulator + repository['stargazers_count'];
  // }, 0);

  return res.status(200).json({
    followers: 171,
    stars: 886
  });
};
