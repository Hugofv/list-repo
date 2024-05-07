import { render, renderHook, screen } from '@testing-library/react';
import Detail from '.';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { useRef } from 'react';

const mockStore = configureStore([thunk]);

describe('Detail tests', () => {
  const mockRepo = {
    id: 12196274,
    node_id: 'MDEwOlJlcG9zaXRvcnkxMjE5NjI3NA==',
    name: 'HelloWorld',
    full_name: 'test/HelloWorld',
    private: false,
    owner: {
      login: 'test',
      id: 383316,
      node_id: 'MDQ6VXNlcjM4MzMxNg==',
      avatar_url: 'https://avatars.githubusercontent.com/u/383316?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/test',
      html_url: 'https://github.com/test',
      followers_url: 'https://api.github.com/users/test/followers',
      following_url: 'https://api.github.com/users/test/following{/other_user}',
      gists_url: 'https://api.github.com/users/test/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/test/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/test/subscriptions',
      organizations_url: 'https://api.github.com/users/test/orgs',
      repos_url: 'https://api.github.com/users/test/repos',
      events_url: 'https://api.github.com/users/test/events{/privacy}',
      received_events_url: 'https://api.github.com/users/test/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/test/HelloWorld',
    description: 'Create hello world',
    fork: false,
    url: 'https://api.github.com/repos/test/HelloWorld',
    forks_url: 'https://api.github.com/repos/test/HelloWorld/forks',
    keys_url: 'https://api.github.com/repos/test/HelloWorld/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/test/HelloWorld/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/test/HelloWorld/teams',
    hooks_url: 'https://api.github.com/repos/test/HelloWorld/hooks',
    issue_events_url:
      'https://api.github.com/repos/test/HelloWorld/issues/events{/number}',
    events_url: 'https://api.github.com/repos/test/HelloWorld/events',
    assignees_url:
      'https://api.github.com/repos/test/HelloWorld/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/test/HelloWorld/branches{/branch}',
    tags_url: 'https://api.github.com/repos/test/HelloWorld/tags',
    blobs_url: 'https://api.github.com/repos/test/HelloWorld/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/test/HelloWorld/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/test/HelloWorld/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/test/HelloWorld/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/test/HelloWorld/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/test/HelloWorld/languages',
    stargazers_url: 'https://api.github.com/repos/test/HelloWorld/stargazers',
    contributors_url:
      'https://api.github.com/repos/test/HelloWorld/contributors',
    subscribers_url: 'https://api.github.com/repos/test/HelloWorld/subscribers',
    subscription_url:
      'https://api.github.com/repos/test/HelloWorld/subscription',
    commits_url: 'https://api.github.com/repos/test/HelloWorld/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/test/HelloWorld/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/test/HelloWorld/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/test/HelloWorld/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/test/HelloWorld/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/test/HelloWorld/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/test/HelloWorld/merges',
    archive_url:
      'https://api.github.com/repos/test/HelloWorld/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/test/HelloWorld/downloads',
    issues_url: 'https://api.github.com/repos/test/HelloWorld/issues{/number}',
    pulls_url: 'https://api.github.com/repos/test/HelloWorld/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/test/HelloWorld/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/test/HelloWorld/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/test/HelloWorld/labels{/name}',
    releases_url: 'https://api.github.com/repos/test/HelloWorld/releases{/id}',
    deployments_url: 'https://api.github.com/repos/test/HelloWorld/deployments',
    created_at: '2013-08-18T14:16:21Z',
    updated_at: '2024-04-14T22:35:40Z',
    pushed_at: '2024-02-01T03:47:43Z',
    git_url: 'git://github.com/test/HelloWorld.git',
    ssh_url: 'git@github.com:test/HelloWorld.git',
    clone_url: 'https://github.com/test/HelloWorld.git',
    svn_url: 'https://github.com/test/HelloWorld',
    homepage: null,
    size: 136,
    stargazers_count: 6,
    watchers_count: 6,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 33,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 13,
    license: {
      key: 'artistic-2.0',
      name: 'Artistic License 2.0',
      spdx_id: 'Artistic-2.0',
      url: 'https://api.github.com/licenses/artistic-2.0',
      node_id: 'MDc6TGljZW5zZTM=',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 33,
    open_issues: 13,
    watchers: 6,
    default_branch: 'master',
  };

  test('should render Detail as loading state', () => {
    const store = mockStore({
      repo: {
        readme: null,
        readmeLoading: true,
        readmeError: false,
      },
    });

    const { result: refDetail } = renderHook(() =>
      useRef<HTMLDivElement>(null)
    );

    render(
      <Provider store={store}>
        <Detail repo={null} refDetail={refDetail.current} />
      </Provider>
    );

    expect(screen.getByTestId(/detail-loading/i)).toBeInTheDocument();
  });

  test('should render Detail as show readme', () => {
    const store = mockStore({
      repo: {
        readme: 'MARKDOWN',
        readmeLoading: false,
        readmeError: false,
      },
    });

    const { result: refDetail } = renderHook(() =>
      useRef<HTMLDivElement>(null)
    );

    render(
      <Provider store={store}>
        <Detail repo={mockRepo} refDetail={refDetail.current} />
      </Provider>
    );

    expect(screen.getByText(/Link/i)).toBeInTheDocument();
  });

  test('should render Detail as select repo', () => {
    const store = mockStore({
      repo: {
        readme: null,
        readmeLoading: false,
        readmeError: false,
      },
    });

    const { result: refDetail } = renderHook(() =>
      useRef<HTMLDivElement>(null)
    );

    render(
      <Provider store={store}>
        <Detail repo={null} refDetail={refDetail.current} />
      </Provider>
    );

    expect(screen.getByText(/Selecione um repositório/i)).toBeInTheDocument();
  });

  test('should render Detail as not found', () => {
    const store = mockStore({
      repo: {
        readme: null,
        readmeLoading: false,
        readmeError: false,
      },
    });

    const { result: refDetail } = renderHook(() =>
      useRef<HTMLDivElement>(null)
    );

    render(
      <Provider store={store}>
        <Detail repo={mockRepo} refDetail={refDetail.current} />
      </Provider>
    );

    expect(screen.getByText(/Readme não encontrado/i)).toBeInTheDocument();
  });
});
