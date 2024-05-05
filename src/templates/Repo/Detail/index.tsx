import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import './style.css';

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
        .then((response) => response.text())
        .then((response) => setMarkdown(response));
    }
  }, [repo]);

  return (
    <div className='detail-container'>
      <Markdown>{markdown}</Markdown>
    </div>
  );
};

export default Detail;
