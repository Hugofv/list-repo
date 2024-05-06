import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import './style.css';
import Flex from '../../../components/Flex';
import { FaLink } from 'react-icons/fa';

interface DetailProps {
  repo: any;
}

const Detail: React.FC<DetailProps> = ({ repo }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    if (repo) {
      fetch(
        `https://raw.githubusercontent.com/${repo?.owner?.login}/${repo?.name}/${repo.default_branch}/README.md`
      )
        .then((response) => {
          return response.text();
        })
        .then((response) => setMarkdown(response));
    }
  }, [repo]);

  return (
    <div className='detail-container'>
      <Flex>
        <Flex alignItems='center' gap='8px'>
          <FaLink />
          <strong>Link: </strong>
          <a href={repo?.url}>aqui</a>
        </Flex>
      </Flex>
      {markdown ? <Markdown>{markdown}</Markdown> : null}
    </div>
  );
};

export default Detail;
