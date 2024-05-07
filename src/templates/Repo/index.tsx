import React, { useRef, useState } from 'react';
import SearchInput from '../../components/SearchInput';
import List from './List';
import Detail from './Detail';
import Flex from '../../components/Flex';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { fetchAllRepos } from '../../store/modules/repo/actions';

const Repo: React.FC = () => {
  const [selectedRepo, setSelectedRepo] = useState<any>();

  const dispatch = useDispatch();
  const refDetail = useRef<HTMLDivElement>(null);

  const { repo } = useSelector((state: AppState) => state);
  const { repos } = repo;

  const handleSearch = (username: string) => {
    dispatch(fetchAllRepos(username));
  };

  const handleSelectRepo = (repo: any) => {
    setSelectedRepo(repo);
    refDetail.current?.scrollIntoView()
  };

  return (
    <div>
      <SearchInput onSearch={handleSearch} placeholder='Usúario' />

      <Flex flexWrap='wrap'>
        <List
          repos={repos}
          selectedRepo={selectedRepo}
          handleRepo={handleSelectRepo}
        />

        <Detail refDetail={refDetail} repo={selectedRepo} />
      </Flex>
    </div>
  );
};

export default Repo;
