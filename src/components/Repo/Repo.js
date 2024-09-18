import React, { useEffect, useState } from 'react';
import './style.css';

const Repo = () => {
  const [repo, setRepo] = useState([]);
  const URL = 'https://api.github.com/users/Caiobaldudev/repos';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRepo(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <>
      {repo.length > 0 ? (
        <div className="wrap">
          <h1>Total: {repo.length}</h1>
          <div className="pageContent">
            {repo.map((repositorio) => {
              const maxDescriptionLength = 100;
              const truncatedDescription =
                repositorio.description?.length > maxDescriptionLength
                  ? repositorio.description.slice(0, maxDescriptionLength) +
                    '...'
                  : repositorio.description;

              return (
                <div className="pageCard" key={repositorio.id}>
                  <div className="contentCard">
                    <h1 className="repoTitle">{repositorio.name}</h1>
                    <p className="repoDesc">{truncatedDescription}</p>
                    <button>
                      <a
                        target="_blank"
                        href={repositorio.html_url}
                        rel="noopener noreferrer"
                        className="buttonLink"
                      >
                        Ver Repositório
                      </a>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1>Nenhum repositório encontrado!</h1>
      )}
    </>
  );
};

export default Repo;
