import React from 'react';
import ReactLoading from 'react-loading';
import Card from '../../../components/Card';
import toBRLDate from '../../../utils/toBRLDate';
import { FaCalendar, FaCode, FaCodeBranch, FaSync } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';
import Flex from '../../../components/Flex';
import './style.css';

interface ListProps {
  repos: any[];
  selectedRepo: any;
  handleRepo: React.Dispatch<any>;
}

const List: React.FC<ListProps> = ({ repos, selectedRepo, handleRepo }) => {
  const { repo: repoState } = useSelector((state: AppState) => state);
  const { loading } = repoState;
  
  if (loading) {
    return (
      <div className='list-container' data-testid='list-loading'>
        <Flex justifyContent='center' alignItems='center'>
          <ReactLoading type='spin' color='#fff' />
        </Flex>
      </div>
    );
  }

  return (
    <div className='list-container'>
      {repos?.length ? (
        repos?.map((repo, i) => (
          <Card
            isClicable
            key={repo?.id}
            testId={`repo-${i}`}
            active={repo?.id === selectedRepo?.id}
            onClick={() => handleRepo(repo)}
          >
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
        ))
      ) : (
        <span>Nenhum repositório encontrado, verifique o usuário</span>
      )}
    </div>
  );
};

export default List;
