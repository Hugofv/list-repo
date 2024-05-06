import React from 'react';
import Card from '../../../components/Card';
import './style.css';
import toBRLDate from '../../../utils/toBRLDate';
import { FaCalendar, FaCode, FaCodeBranch, FaSync } from 'react-icons/fa';

interface ListProps {
  repos: any[];
  handleRepo: React.Dispatch<any>;
}

const List: React.FC<ListProps> = ({ repos, handleRepo }) => (
  <div className='list-container'>
    {repos?.map((repo) => (
      <Card key={repo?.id} isClicable onClick={() => handleRepo(repo)}>
        <div className='list-title'>{repo?.name}</div>
        <p className='list-detail'>
          <FaCode />
          <strong>Linguagem:</strong> {repo?.language}
        </p>
        <p className='list-detail'>
          <FaCodeBranch />
          <strong>Branch padrão:</strong> {repo?.default_branch}
        </p>
        <p className='list-detail'>
          <FaCalendar />
          <strong>Criado em:</strong> {toBRLDate(repo?.created_at)}
        </p>
        <p className='list-detail'>
          <FaSync />
          <strong>Última Atualização:</strong> {toBRLDate(repo?.updated_at)}
        </p>
      </Card>
    ))}
  </div>
);

export default List;
