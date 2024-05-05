import React from 'react';
import Card from '../../../components/Card';
import './style.css';
import toBRLDate from '../../../utils/toBRLDate';

interface ListProps {
  repos: any[];
  handleRepo: React.Dispatch<any>;
}

const List: React.FC<ListProps> = ({ repos, handleRepo }) => (
  <div className='list-container'>
    {repos.map((repo) => (
      <Card key={repo?.id} isClicable onClick={() => handleRepo(repo)}>
        <span className='list-title'>{repo?.name}</span>
        <p>
          <strong>Linguagens:</strong> {repo?.language}
        </p>
        <p>
          <strong>Branch padrão:</strong> {repo?.default_branch}
        </p>
        <p>
          <strong>Criado em:</strong> {toBRLDate(repo?.created_at)}
        </p>
        <p>
          <strong>Última Atualização:</strong> {toBRLDate(repo?.updated_at)}
        </p>
      </Card>
    ))}
  </div>
);

export default List;
