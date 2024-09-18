import React, { useEffect, useState } from 'react';
import './style.css';

const Repo = () => {
  const [repo, setRepo] = useState();
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
      {repo ? (
        <div className='wrap'>
          <h1>Total: {repo.length}</h1>
          <div className="pageContent">
            {repo.map((r) => (
              <div className="pageCard" key={r.id}>
                <div className="contentCard">
                  
                  <h1 className="repoTitle">{r.name}</h1>
                  <p className="repoDesc">{r.description}</p>
                  <button href={r.html_url}>Ver Repositório</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1>Nenhum repositório encontrado!</h1>
      )}
    </>
  );
};

export default Repo;
