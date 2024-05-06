import React, { useEffect } from 'react';
import Markdown from 'react-markdown';
import ReactLoading from 'react-loading';

import './style.css';
import Flex from '../../../components/Flex';
import { FaLink } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store';
import { getReadme } from '../../../store/modules/repo/actions';

interface DetailProps {
  repo: any;
}

const Detail: React.FC<DetailProps> = ({ repo }) => {
  const dispatch = useDispatch();
  const { repo: repoState } = useSelector((state: AppState) => state);
  const { readme, readmeLoading, readmeError } = repoState;

  useEffect(() => {
    if (repo) {
      dispatch(getReadme(repo?.owner?.login, repo?.name, repo.default_branch));
    }
  }, [repo]);

  if (readmeLoading && !readmeError) {
    return (
      <div className='detail-container'>
        <Flex justifyContent='center' alignItems='center'>
          <ReactLoading type='spin' color='#fff' />
        </Flex>
      </div>
    );
  }

  return (
    <div className='detail-container'>
      {repo ? (
        <Flex>
          <Flex alignItems='center' gap='8px'>
            <FaLink />
            <strong>Link: </strong>
            <a href={repo?.url}>aqui</a>
          </Flex>
        </Flex>
      ) : null}

      {readme ? (
        <Markdown>{readme}</Markdown>
      ) : repo ? (
        <span>Readme não encontrado</span>
      ) : (
        <span>Selecione um repositório</span>
      )}
    </div>
  );
};

export default Detail;
