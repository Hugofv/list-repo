import React, { useState } from 'react';
import Card from '../../components/Card';
import SearchInput from '../../components/SearchInput';
import List from './List';
import Detail from './Detail';
import Flex from '../../components/Flex';

const Repo: React.FC = () => {
  const [selectedRepo, setSelectedRepo] = useState<any>();

  const gihubRepos = [
    {
      id: 172771462,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNzI3NzE0NjI=',
      name: 'arvoreVendedor',
      full_name: 'Hugofv/arvoreVendedor',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/arvoreVendedor',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/arvoreVendedor',
      forks_url: 'https://api.github.com/repos/Hugofv/arvoreVendedor/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/arvoreVendedor/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/arvoreVendedor/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/arvoreVendedor/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/arvoreVendedor/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/arvoreVendedor/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/arvoreVendedor/deployments',
      created_at: '2019-02-26T18:59:29Z',
      updated_at: '2019-02-27T02:34:28Z',
      pushed_at: '2019-02-27T02:34:26Z',
      git_url: 'git://github.com/Hugofv/arvoreVendedor.git',
      ssh_url: 'git@github.com:Hugofv/arvoreVendedor.git',
      clone_url: 'https://github.com/Hugofv/arvoreVendedor.git',
      svn_url: 'https://github.com/Hugofv/arvoreVendedor',
      homepage: null,
      size: 508,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'PHP',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 151732127,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNTE3MzIxMjc=',
      name: 'blade',
      full_name: 'Hugofv/blade',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/blade',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/blade',
      forks_url: 'https://api.github.com/repos/Hugofv/blade/forks',
      keys_url: 'https://api.github.com/repos/Hugofv/blade/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/blade/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/blade/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/blade/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/blade/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/blade/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/blade/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/blade/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/blade/tags',
      blobs_url: 'https://api.github.com/repos/Hugofv/blade/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/Hugofv/blade/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/Hugofv/blade/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/Hugofv/blade/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/Hugofv/blade/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/Hugofv/blade/languages',
      stargazers_url: 'https://api.github.com/repos/Hugofv/blade/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/blade/contributors',
      subscribers_url: 'https://api.github.com/repos/Hugofv/blade/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/blade/subscription',
      commits_url: 'https://api.github.com/repos/Hugofv/blade/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/blade/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/blade/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/blade/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/blade/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/blade/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/blade/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/blade/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/Hugofv/blade/downloads',
      issues_url: 'https://api.github.com/repos/Hugofv/blade/issues{/number}',
      pulls_url: 'https://api.github.com/repos/Hugofv/blade/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/blade/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/blade/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/Hugofv/blade/labels{/name}',
      releases_url: 'https://api.github.com/repos/Hugofv/blade/releases{/id}',
      deployments_url: 'https://api.github.com/repos/Hugofv/blade/deployments',
      created_at: '2018-10-05T14:22:06Z',
      updated_at: '2018-10-08T14:33:42Z',
      pushed_at: '2018-10-08T14:33:41Z',
      git_url: 'git://github.com/Hugofv/blade.git',
      ssh_url: 'git@github.com:Hugofv/blade.git',
      clone_url: 'https://github.com/Hugofv/blade.git',
      svn_url: 'https://github.com/Hugofv/blade',
      homepage: null,
      size: 10776,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 143956463,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNDM5NTY0NjM=',
      name: 'Buschool',
      full_name: 'Hugofv/Buschool',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/Buschool',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/Buschool',
      forks_url: 'https://api.github.com/repos/Hugofv/Buschool/forks',
      keys_url: 'https://api.github.com/repos/Hugofv/Buschool/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/Buschool/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/Buschool/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/Buschool/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/Buschool/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/Buschool/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/Buschool/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/Buschool/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/Buschool/tags',
      blobs_url: 'https://api.github.com/repos/Hugofv/Buschool/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/Buschool/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/Buschool/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/Hugofv/Buschool/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/Buschool/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/Hugofv/Buschool/languages',
      stargazers_url: 'https://api.github.com/repos/Hugofv/Buschool/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/Buschool/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/Buschool/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/Buschool/subscription',
      commits_url: 'https://api.github.com/repos/Hugofv/Buschool/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/Buschool/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/Buschool/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/Buschool/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/Buschool/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/Buschool/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/Buschool/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/Buschool/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/Hugofv/Buschool/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/Buschool/issues{/number}',
      pulls_url: 'https://api.github.com/repos/Hugofv/Buschool/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/Buschool/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/Buschool/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/Hugofv/Buschool/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/Buschool/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/Buschool/deployments',
      created_at: '2018-08-08T03:30:42Z',
      updated_at: '2018-09-11T22:23:51Z',
      pushed_at: '2019-03-24T17:19:47Z',
      git_url: 'git://github.com/Hugofv/Buschool.git',
      ssh_url: 'git@github.com:Hugofv/Buschool.git',
      clone_url: 'https://github.com/Hugofv/Buschool.git',
      svn_url: 'https://github.com/Hugofv/Buschool',
      homepage: null,
      size: 3009,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 340124307,
      node_id: 'MDEwOlJlcG9zaXRvcnkzNDAxMjQzMDc=',
      name: 'challenge-login',
      full_name: 'Hugofv/challenge-login',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/challenge-login',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/challenge-login',
      forks_url: 'https://api.github.com/repos/Hugofv/challenge-login/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/challenge-login/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/challenge-login/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/challenge-login/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/challenge-login/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/challenge-login/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/challenge-login/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/challenge-login/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/challenge-login/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/challenge-login/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/challenge-login/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/challenge-login/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/challenge-login/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/challenge-login/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/challenge-login/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/challenge-login/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/challenge-login/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/challenge-login/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/challenge-login/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/challenge-login/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/challenge-login/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/challenge-login/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/challenge-login/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/challenge-login/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/challenge-login/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/challenge-login/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/challenge-login/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/challenge-login/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/challenge-login/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/challenge-login/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/challenge-login/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/challenge-login/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/challenge-login/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/challenge-login/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/challenge-login/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/challenge-login/deployments',
      created_at: '2021-02-18T17:22:23Z',
      updated_at: '2021-02-23T11:10:33Z',
      pushed_at: '2021-02-23T11:10:30Z',
      git_url: 'git://github.com/Hugofv/challenge-login.git',
      ssh_url: 'git@github.com:Hugofv/challenge-login.git',
      clone_url: 'https://github.com/Hugofv/challenge-login.git',
      svn_url: 'https://github.com/Hugofv/challenge-login',
      homepage: null,
      size: 12179,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'HTML',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 499871559,
      node_id: 'R_kgDOHctvRw',
      name: 'check-weather',
      full_name: 'Hugofv/check-weather',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/check-weather',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/check-weather',
      forks_url: 'https://api.github.com/repos/Hugofv/check-weather/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/check-weather/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/check-weather/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/check-weather/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/check-weather/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/check-weather/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/check-weather/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/check-weather/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/check-weather/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/check-weather/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/check-weather/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/check-weather/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/check-weather/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/check-weather/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/check-weather/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/check-weather/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/check-weather/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/check-weather/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/check-weather/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/check-weather/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/check-weather/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/check-weather/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/check-weather/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/check-weather/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/check-weather/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/check-weather/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/check-weather/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/check-weather/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/check-weather/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/check-weather/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/check-weather/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/check-weather/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/check-weather/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/check-weather/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/check-weather/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/check-weather/deployments',
      created_at: '2022-06-04T15:56:47Z',
      updated_at: '2022-06-04T15:58:45Z',
      pushed_at: '2022-06-06T23:21:04Z',
      git_url: 'git://github.com/Hugofv/check-weather.git',
      ssh_url: 'git@github.com:Hugofv/check-weather.git',
      clone_url: 'https://github.com/Hugofv/check-weather.git',
      svn_url: 'https://github.com/Hugofv/check-weather',
      homepage: null,
      size: 929,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 232783891,
      node_id: 'MDEwOlJlcG9zaXRvcnkyMzI3ODM4OTE=',
      name: 'desafio-bossabox',
      full_name: 'Hugofv/desafio-bossabox',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/desafio-bossabox',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/desafio-bossabox',
      forks_url: 'https://api.github.com/repos/Hugofv/desafio-bossabox/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/desafio-bossabox/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/desafio-bossabox/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/desafio-bossabox/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/desafio-bossabox/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/desafio-bossabox/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/desafio-bossabox/deployments',
      created_at: '2020-01-09T10:33:48Z',
      updated_at: '2021-02-17T16:59:05Z',
      pushed_at: '2023-01-05T13:24:38Z',
      git_url: 'git://github.com/Hugofv/desafio-bossabox.git',
      ssh_url: 'git@github.com:Hugofv/desafio-bossabox.git',
      clone_url: 'https://github.com/Hugofv/desafio-bossabox.git',
      svn_url: 'https://github.com/Hugofv/desafio-bossabox',
      homepage: null,
      size: 7473,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'HTML',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 26,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 26,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 188728654,
      node_id: 'MDEwOlJlcG9zaXRvcnkxODg3Mjg2NTQ=',
      name: 'dotnet-reactjs',
      full_name: 'Hugofv/dotnet-reactjs',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/dotnet-reactjs',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/dotnet-reactjs',
      forks_url: 'https://api.github.com/repos/Hugofv/dotnet-reactjs/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/dotnet-reactjs/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/dotnet-reactjs/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/dotnet-reactjs/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/dotnet-reactjs/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/dotnet-reactjs/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/dotnet-reactjs/deployments',
      created_at: '2019-05-26T20:29:14Z',
      updated_at: '2019-05-29T02:43:50Z',
      pushed_at: '2022-12-10T15:33:54Z',
      git_url: 'git://github.com/Hugofv/dotnet-reactjs.git',
      ssh_url: 'git@github.com:Hugofv/dotnet-reactjs.git',
      clone_url: 'https://github.com/Hugofv/dotnet-reactjs.git',
      svn_url: 'https://github.com/Hugofv/dotnet-reactjs',
      homepage: null,
      size: 4957,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'C#',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 27,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 27,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 262792594,
      node_id: 'MDEwOlJlcG9zaXRvcnkyNjI3OTI1OTQ=',
      name: 'fake-twitter-api',
      full_name: 'Hugofv/fake-twitter-api',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/fake-twitter-api',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/fake-twitter-api',
      forks_url: 'https://api.github.com/repos/Hugofv/fake-twitter-api/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/fake-twitter-api/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/fake-twitter-api/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/fake-twitter-api/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/fake-twitter-api/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/fake-twitter-api/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-api/deployments',
      created_at: '2020-05-10T13:25:36Z',
      updated_at: '2020-05-14T11:55:45Z',
      pushed_at: '2022-12-12T17:56:45Z',
      git_url: 'git://github.com/Hugofv/fake-twitter-api.git',
      ssh_url: 'git@github.com:Hugofv/fake-twitter-api.git',
      clone_url: 'https://github.com/Hugofv/fake-twitter-api.git',
      svn_url: 'https://github.com/Hugofv/fake-twitter-api',
      homepage: null,
      size: 286,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 6,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 6,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 262796549,
      node_id: 'MDEwOlJlcG9zaXRvcnkyNjI3OTY1NDk=',
      name: 'fake-twitter-app',
      full_name: 'Hugofv/fake-twitter-app',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/fake-twitter-app',
      description: 'Demo application:',
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/fake-twitter-app',
      forks_url: 'https://api.github.com/repos/Hugofv/fake-twitter-app/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/fake-twitter-app/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/fake-twitter-app/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/fake-twitter-app/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/fake-twitter-app/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/fake-twitter-app/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/fake-twitter-app/deployments',
      created_at: '2020-05-10T13:46:08Z',
      updated_at: '2020-05-14T11:43:06Z',
      pushed_at: '2020-05-14T11:43:03Z',
      git_url: 'git://github.com/Hugofv/fake-twitter-app.git',
      ssh_url: 'git@github.com:Hugofv/fake-twitter-app.git',
      clone_url: 'https://github.com/Hugofv/fake-twitter-app.git',
      svn_url: 'https://github.com/Hugofv/fake-twitter-app',
      homepage: 'https://app-fake-twitter.herokuapp.com',
      size: 630,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 193497701,
      node_id: 'MDEwOlJlcG9zaXRvcnkxOTM0OTc3MDE=',
      name: 'flash-card',
      full_name: 'Hugofv/flash-card',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/flash-card',
      description: 'Live demo in:',
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/flash-card',
      forks_url: 'https://api.github.com/repos/Hugofv/flash-card/forks',
      keys_url: 'https://api.github.com/repos/Hugofv/flash-card/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/flash-card/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/flash-card/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/flash-card/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/flash-card/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/flash-card/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/flash-card/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/flash-card/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/flash-card/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/flash-card/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/flash-card/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/flash-card/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/flash-card/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/flash-card/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/Hugofv/flash-card/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/flash-card/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/flash-card/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/flash-card/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/flash-card/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/flash-card/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/flash-card/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/flash-card/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/flash-card/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/flash-card/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/flash-card/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/flash-card/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/flash-card/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/Hugofv/flash-card/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/flash-card/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/flash-card/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/flash-card/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/flash-card/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/flash-card/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/flash-card/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/flash-card/deployments',
      created_at: '2019-06-24T12:05:58Z',
      updated_at: '2019-07-01T16:31:36Z',
      pushed_at: '2023-01-04T01:01:33Z',
      git_url: 'git://github.com/Hugofv/flash-card.git',
      ssh_url: 'git@github.com:Hugofv/flash-card.git',
      clone_url: 'https://github.com/Hugofv/flash-card.git',
      svn_url: 'https://github.com/Hugofv/flash-card',
      homepage: 'https://react-flash-card.herokuapp.com',
      size: 3984,
      stargazers_count: 1,
      watchers_count: 1,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 24,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 24,
      watchers: 1,
      default_branch: 'master',
    },
    {
      id: 297487522,
      node_id: 'MDEwOlJlcG9zaXRvcnkyOTc0ODc1MjI=',
      name: 'fund-list',
      full_name: 'Hugofv/fund-list',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/fund-list',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/fund-list',
      forks_url: 'https://api.github.com/repos/Hugofv/fund-list/forks',
      keys_url: 'https://api.github.com/repos/Hugofv/fund-list/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/fund-list/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/fund-list/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/fund-list/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/fund-list/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/fund-list/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/fund-list/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/fund-list/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/fund-list/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/fund-list/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/fund-list/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/fund-list/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/fund-list/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/fund-list/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/Hugofv/fund-list/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/fund-list/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/fund-list/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/fund-list/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/fund-list/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/fund-list/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/fund-list/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/fund-list/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/fund-list/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/fund-list/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/fund-list/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/fund-list/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/fund-list/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/Hugofv/fund-list/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/fund-list/issues{/number}',
      pulls_url: 'https://api.github.com/repos/Hugofv/fund-list/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/fund-list/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/fund-list/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/Hugofv/fund-list/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/fund-list/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/fund-list/deployments',
      created_at: '2020-09-21T23:49:54Z',
      updated_at: '2020-09-22T01:56:41Z',
      pushed_at: '2020-09-22T01:56:39Z',
      git_url: 'git://github.com/Hugofv/fund-list.git',
      ssh_url: 'git@github.com:Hugofv/fund-list.git',
      clone_url: 'https://github.com/Hugofv/fund-list.git',
      svn_url: 'https://github.com/Hugofv/fund-list',
      homepage: null,
      size: 507,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 145866751,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNDU4NjY3NTE=',
      name: 'Gerar.Excel-.NET-CORE',
      full_name: 'Hugofv/Gerar.Excel-.NET-CORE',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/Gerar.Excel-.NET-CORE',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE',
      forks_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/teams',
      hooks_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/Gerar.Excel-.NET-CORE/deployments',
      created_at: '2018-08-23T14:41:09Z',
      updated_at: '2018-08-23T16:19:53Z',
      pushed_at: '2018-08-23T16:19:51Z',
      git_url: 'git://github.com/Hugofv/Gerar.Excel-.NET-CORE.git',
      ssh_url: 'git@github.com:Hugofv/Gerar.Excel-.NET-CORE.git',
      clone_url: 'https://github.com/Hugofv/Gerar.Excel-.NET-CORE.git',
      svn_url: 'https://github.com/Hugofv/Gerar.Excel-.NET-CORE',
      homepage: null,
      size: 80,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'C#',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 386027020,
      node_id: 'MDEwOlJlcG9zaXRvcnkzODYwMjcwMjA=',
      name: 'home-nubank-flutter',
      full_name: 'Hugofv/home-nubank-flutter',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/home-nubank-flutter',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/home-nubank-flutter',
      forks_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/teams',
      hooks_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/home-nubank-flutter/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/home-nubank-flutter/deployments',
      created_at: '2021-07-14T17:45:01Z',
      updated_at: '2021-07-15T14:07:32Z',
      pushed_at: '2021-07-15T14:07:29Z',
      git_url: 'git://github.com/Hugofv/home-nubank-flutter.git',
      ssh_url: 'git@github.com:Hugofv/home-nubank-flutter.git',
      clone_url: 'https://github.com/Hugofv/home-nubank-flutter.git',
      svn_url: 'https://github.com/Hugofv/home-nubank-flutter',
      homepage: null,
      size: 200,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'Dart',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 575531415,
      node_id: 'R_kgDOIk3plw',
      name: 'hugofv',
      full_name: 'Hugofv/hugofv',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/hugofv',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/hugofv',
      forks_url: 'https://api.github.com/repos/Hugofv/hugofv/forks',
      keys_url: 'https://api.github.com/repos/Hugofv/hugofv/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/hugofv/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/hugofv/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/hugofv/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/hugofv/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/hugofv/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/hugofv/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/hugofv/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/hugofv/tags',
      blobs_url: 'https://api.github.com/repos/Hugofv/hugofv/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/Hugofv/hugofv/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/Hugofv/hugofv/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/Hugofv/hugofv/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/Hugofv/hugofv/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/Hugofv/hugofv/languages',
      stargazers_url: 'https://api.github.com/repos/Hugofv/hugofv/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/hugofv/contributors',
      subscribers_url: 'https://api.github.com/repos/Hugofv/hugofv/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/hugofv/subscription',
      commits_url: 'https://api.github.com/repos/Hugofv/hugofv/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/hugofv/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/hugofv/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/hugofv/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/hugofv/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/hugofv/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/hugofv/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/hugofv/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/Hugofv/hugofv/downloads',
      issues_url: 'https://api.github.com/repos/Hugofv/hugofv/issues{/number}',
      pulls_url: 'https://api.github.com/repos/Hugofv/hugofv/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/hugofv/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/hugofv/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/Hugofv/hugofv/labels{/name}',
      releases_url: 'https://api.github.com/repos/Hugofv/hugofv/releases{/id}',
      deployments_url: 'https://api.github.com/repos/Hugofv/hugofv/deployments',
      created_at: '2022-12-07T18:09:45Z',
      updated_at: '2022-12-07T18:09:45Z',
      pushed_at: '2022-12-07T18:11:43Z',
      git_url: 'git://github.com/Hugofv/hugofv.git',
      ssh_url: 'git@github.com:Hugofv/hugofv.git',
      clone_url: 'https://github.com/Hugofv/hugofv.git',
      svn_url: 'https://github.com/Hugofv/hugofv',
      homepage: null,
      size: 3,
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
    {
      id: 192014126,
      node_id: 'MDEwOlJlcG9zaXRvcnkxOTIwMTQxMjY=',
      name: 'inspiration-react',
      full_name: 'Hugofv/inspiration-react',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/inspiration-react',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/inspiration-react',
      forks_url: 'https://api.github.com/repos/Hugofv/inspiration-react/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/inspiration-react/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/inspiration-react/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/inspiration-react/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/inspiration-react/deployments',
      created_at: '2019-06-14T22:57:16Z',
      updated_at: '2019-06-15T10:43:13Z',
      pushed_at: '2023-01-04T00:40:28Z',
      git_url: 'git://github.com/Hugofv/inspiration-react.git',
      ssh_url: 'git@github.com:Hugofv/inspiration-react.git',
      clone_url: 'https://github.com/Hugofv/inspiration-react.git',
      svn_url: 'https://github.com/Hugofv/inspiration-react',
      homepage: null,
      size: 3447,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 22,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 22,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 196278315,
      node_id: 'MDEwOlJlcG9zaXRvcnkxOTYyNzgzMTU=',
      name: 'list-book-nyt',
      full_name: 'Hugofv/list-book-nyt',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/list-book-nyt',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/list-book-nyt',
      forks_url: 'https://api.github.com/repos/Hugofv/list-book-nyt/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/list-book-nyt/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/list-book-nyt/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/list-book-nyt/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/list-book-nyt/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/list-book-nyt/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/list-book-nyt/deployments',
      created_at: '2019-07-10T21:38:55Z',
      updated_at: '2019-07-11T02:45:29Z',
      pushed_at: '2023-01-04T04:24:35Z',
      git_url: 'git://github.com/Hugofv/list-book-nyt.git',
      ssh_url: 'git@github.com:Hugofv/list-book-nyt.git',
      clone_url: 'https://github.com/Hugofv/list-book-nyt.git',
      svn_url: 'https://github.com/Hugofv/list-book-nyt',
      homepage: null,
      size: 3762,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 23,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 23,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 796394191,
      node_id: 'R_kgDOL3gCzw',
      name: 'list-repo',
      full_name: 'Hugofv/list-repo',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/list-repo',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/list-repo',
      forks_url: 'https://api.github.com/repos/Hugofv/list-repo/forks',
      keys_url: 'https://api.github.com/repos/Hugofv/list-repo/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/list-repo/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/list-repo/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/list-repo/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/list-repo/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/list-repo/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/list-repo/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/list-repo/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/list-repo/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/list-repo/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/list-repo/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/list-repo/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/list-repo/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/list-repo/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/Hugofv/list-repo/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/list-repo/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/list-repo/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/list-repo/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/list-repo/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/list-repo/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/list-repo/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/list-repo/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/list-repo/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/list-repo/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/list-repo/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/list-repo/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/list-repo/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/Hugofv/list-repo/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/list-repo/issues{/number}',
      pulls_url: 'https://api.github.com/repos/Hugofv/list-repo/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/list-repo/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/list-repo/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/Hugofv/list-repo/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/list-repo/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/list-repo/deployments',
      created_at: '2024-05-05T20:00:08Z',
      updated_at: '2024-05-05T20:07:47Z',
      pushed_at: '2024-05-05T20:07:44Z',
      git_url: 'git://github.com/Hugofv/list-repo.git',
      ssh_url: 'git@github.com:Hugofv/list-repo.git',
      clone_url: 'https://github.com/Hugofv/list-repo.git',
      svn_url: 'https://github.com/Hugofv/list-repo',
      homepage: null,
      size: 169,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 148991121,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNDg5OTExMjE=',
      name: 'Loki',
      full_name: 'Hugofv/Loki',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/Loki',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/Loki',
      forks_url: 'https://api.github.com/repos/Hugofv/Loki/forks',
      keys_url: 'https://api.github.com/repos/Hugofv/Loki/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/Loki/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/Loki/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/Loki/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/Loki/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/Loki/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/Loki/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/Loki/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/Loki/tags',
      blobs_url: 'https://api.github.com/repos/Hugofv/Loki/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/Hugofv/Loki/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/Hugofv/Loki/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/Hugofv/Loki/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/Hugofv/Loki/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/Hugofv/Loki/languages',
      stargazers_url: 'https://api.github.com/repos/Hugofv/Loki/stargazers',
      contributors_url: 'https://api.github.com/repos/Hugofv/Loki/contributors',
      subscribers_url: 'https://api.github.com/repos/Hugofv/Loki/subscribers',
      subscription_url: 'https://api.github.com/repos/Hugofv/Loki/subscription',
      commits_url: 'https://api.github.com/repos/Hugofv/Loki/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/Loki/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/Loki/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/Loki/issues/comments{/number}',
      contents_url: 'https://api.github.com/repos/Hugofv/Loki/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/Loki/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/Loki/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/Loki/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/Hugofv/Loki/downloads',
      issues_url: 'https://api.github.com/repos/Hugofv/Loki/issues{/number}',
      pulls_url: 'https://api.github.com/repos/Hugofv/Loki/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/Loki/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/Loki/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/Hugofv/Loki/labels{/name}',
      releases_url: 'https://api.github.com/repos/Hugofv/Loki/releases{/id}',
      deployments_url: 'https://api.github.com/repos/Hugofv/Loki/deployments',
      created_at: '2018-09-16T11:58:34Z',
      updated_at: '2018-09-20T20:28:56Z',
      pushed_at: '2018-09-20T20:28:54Z',
      git_url: 'git://github.com/Hugofv/Loki.git',
      ssh_url: 'git@github.com:Hugofv/Loki.git',
      clone_url: 'https://github.com/Hugofv/Loki.git',
      svn_url: 'https://github.com/Hugofv/Loki',
      homepage: null,
      size: 237,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'C#',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 368202377,
      node_id: 'MDEwOlJlcG9zaXRvcnkzNjgyMDIzNzc=',
      name: 'microfrontends-webpack-docker-poc',
      full_name: 'Hugofv/microfrontends-webpack-docker-poc',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/microfrontends-webpack-docker-poc',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc',
      forks_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/teams',
      hooks_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/microfrontends-webpack-docker-poc/deployments',
      created_at: '2021-05-17T13:49:05Z',
      updated_at: '2021-10-18T13:19:21Z',
      pushed_at: '2021-05-17T13:50:05Z',
      git_url: 'git://github.com/Hugofv/microfrontends-webpack-docker-poc.git',
      ssh_url: 'git@github.com:Hugofv/microfrontends-webpack-docker-poc.git',
      clone_url:
        'https://github.com/Hugofv/microfrontends-webpack-docker-poc.git',
      svn_url: 'https://github.com/Hugofv/microfrontends-webpack-docker-poc',
      homepage: null,
      size: 224,
      stargazers_count: 1,
      watchers_count: 1,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 1,
      default_branch: 'master',
    },
    {
      id: 159946194,
      node_id: 'MDEwOlJlcG9zaXRvcnkxNTk5NDYxOTQ=',
      name: 'parserLog',
      full_name: 'Hugofv/parserLog',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/parserLog',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/parserLog',
      forks_url: 'https://api.github.com/repos/Hugofv/parserLog/forks',
      keys_url: 'https://api.github.com/repos/Hugofv/parserLog/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/parserLog/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/parserLog/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/parserLog/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/parserLog/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/parserLog/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/parserLog/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/parserLog/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/parserLog/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/parserLog/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/parserLog/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/parserLog/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/parserLog/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/parserLog/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/Hugofv/parserLog/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/parserLog/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/parserLog/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/parserLog/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/parserLog/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/parserLog/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/parserLog/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/parserLog/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/parserLog/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/parserLog/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/parserLog/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/parserLog/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/parserLog/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/Hugofv/parserLog/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/parserLog/issues{/number}',
      pulls_url: 'https://api.github.com/repos/Hugofv/parserLog/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/parserLog/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/parserLog/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/Hugofv/parserLog/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/parserLog/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/parserLog/deployments',
      created_at: '2018-12-01T13:14:51Z',
      updated_at: '2018-12-05T15:42:31Z',
      pushed_at: '2018-12-05T15:42:30Z',
      git_url: 'git://github.com/Hugofv/parserLog.git',
      ssh_url: 'git@github.com:Hugofv/parserLog.git',
      clone_url: 'https://github.com/Hugofv/parserLog.git',
      svn_url: 'https://github.com/Hugofv/parserLog',
      homepage: null,
      size: 18350,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'Java',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 364344905,
      node_id: 'MDEwOlJlcG9zaXRvcnkzNjQzNDQ5MDU=',
      name: 'poc-micro-frontend',
      full_name: 'Hugofv/poc-micro-frontend',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/poc-micro-frontend',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/poc-micro-frontend',
      forks_url: 'https://api.github.com/repos/Hugofv/poc-micro-frontend/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/poc-micro-frontend/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/poc-micro-frontend/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/poc-micro-frontend/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend/deployments',
      created_at: '2021-05-04T18:08:32Z',
      updated_at: '2021-05-04T18:41:34Z',
      pushed_at: '2021-05-04T18:41:32Z',
      git_url: 'git://github.com/Hugofv/poc-micro-frontend.git',
      ssh_url: 'git@github.com:Hugofv/poc-micro-frontend.git',
      clone_url: 'https://github.com/Hugofv/poc-micro-frontend.git',
      svn_url: 'https://github.com/Hugofv/poc-micro-frontend',
      homepage: null,
      size: 3,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'Dockerfile',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 364351448,
      node_id: 'MDEwOlJlcG9zaXRvcnkzNjQzNTE0NDg=',
      name: 'poc-micro-frontend-first-app',
      full_name: 'Hugofv/poc-micro-frontend-first-app',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/poc-micro-frontend-first-app',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app',
      forks_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/teams',
      hooks_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-first-app/deployments',
      created_at: '2021-05-04T18:34:30Z',
      updated_at: '2021-05-04T18:40:28Z',
      pushed_at: '2021-05-04T18:40:25Z',
      git_url: 'git://github.com/Hugofv/poc-micro-frontend-first-app.git',
      ssh_url: 'git@github.com:Hugofv/poc-micro-frontend-first-app.git',
      clone_url: 'https://github.com/Hugofv/poc-micro-frontend-first-app.git',
      svn_url: 'https://github.com/Hugofv/poc-micro-frontend-first-app',
      homepage: null,
      size: 377,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 364351905,
      node_id: 'MDEwOlJlcG9zaXRvcnkzNjQzNTE5MDU=',
      name: 'poc-micro-frontend-second-app',
      full_name: 'Hugofv/poc-micro-frontend-second-app',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/poc-micro-frontend-second-app',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app',
      forks_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/teams',
      hooks_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/poc-micro-frontend-second-app/deployments',
      created_at: '2021-05-04T18:36:32Z',
      updated_at: '2021-05-04T18:39:20Z',
      pushed_at: '2021-05-04T18:39:17Z',
      git_url: 'git://github.com/Hugofv/poc-micro-frontend-second-app.git',
      ssh_url: 'git@github.com:Hugofv/poc-micro-frontend-second-app.git',
      clone_url: 'https://github.com/Hugofv/poc-micro-frontend-second-app.git',
      svn_url: 'https://github.com/Hugofv/poc-micro-frontend-second-app',
      homepage: null,
      size: 377,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 233269074,
      node_id: 'MDEwOlJlcG9zaXRvcnkyMzMyNjkwNzQ=',
      name: 'product-list',
      full_name: 'Hugofv/product-list',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/product-list',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/product-list',
      forks_url: 'https://api.github.com/repos/Hugofv/product-list/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/product-list/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/product-list/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/product-list/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/product-list/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/product-list/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/product-list/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/product-list/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/product-list/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/product-list/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/product-list/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/product-list/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/product-list/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/product-list/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/product-list/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/product-list/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/product-list/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/product-list/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/product-list/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/product-list/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/product-list/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/product-list/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/product-list/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/product-list/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/product-list/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/product-list/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/product-list/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/product-list/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/product-list/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/product-list/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/product-list/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/product-list/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/product-list/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/product-list/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/product-list/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/product-list/deployments',
      created_at: '2020-01-11T17:22:39Z',
      updated_at: '2020-01-20T22:56:48Z',
      pushed_at: '2023-01-05T04:59:52Z',
      git_url: 'git://github.com/Hugofv/product-list.git',
      ssh_url: 'git@github.com:Hugofv/product-list.git',
      clone_url: 'https://github.com/Hugofv/product-list.git',
      svn_url: 'https://github.com/Hugofv/product-list',
      homepage: null,
      size: 4731,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 26,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 26,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 187818376,
      node_id: 'MDEwOlJlcG9zaXRvcnkxODc4MTgzNzY=',
      name: 'react-hooks-graphql',
      full_name: 'Hugofv/react-hooks-graphql',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/react-hooks-graphql',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/react-hooks-graphql',
      forks_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/teams',
      hooks_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/react-hooks-graphql/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/react-hooks-graphql/deployments',
      created_at: '2019-05-21T10:48:42Z',
      updated_at: '2019-05-23T00:19:41Z',
      pushed_at: '2023-01-03T22:17:14Z',
      git_url: 'git://github.com/Hugofv/react-hooks-graphql.git',
      ssh_url: 'git@github.com:Hugofv/react-hooks-graphql.git',
      clone_url: 'https://github.com/Hugofv/react-hooks-graphql.git',
      svn_url: 'https://github.com/Hugofv/react-hooks-graphql',
      homepage: null,
      size: 1308,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 35,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 35,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 218976433,
      node_id: 'MDEwOlJlcG9zaXRvcnkyMTg5NzY0MzM=',
      name: 'react-native-background-geolocation',
      full_name: 'Hugofv/react-native-background-geolocation',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/react-native-background-geolocation',
      description:
        'Background and foreground geolocation plugin for React Native. Tracks user when app is running in background.',
      fork: true,
      url: 'https://api.github.com/repos/Hugofv/react-native-background-geolocation',
      forks_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/teams',
      hooks_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/react-native-background-geolocation/deployments',
      created_at: '2019-11-01T11:55:02Z',
      updated_at: '2019-11-01T11:55:03Z',
      pushed_at: '2019-10-03T13:00:22Z',
      git_url:
        'git://github.com/Hugofv/react-native-background-geolocation.git',
      ssh_url: 'git@github.com:Hugofv/react-native-background-geolocation.git',
      clone_url:
        'https://github.com/Hugofv/react-native-background-geolocation.git',
      svn_url: 'https://github.com/Hugofv/react-native-background-geolocation',
      homepage: '',
      size: 1041,
      stargazers_count: 0,
      watchers_count: 0,
      language: null,
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: {
        key: 'apache-2.0',
        name: 'Apache License 2.0',
        spdx_id: 'Apache-2.0',
        url: 'https://api.github.com/licenses/apache-2.0',
        node_id: 'MDc6TGljZW5zZTI=',
      },
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 194932432,
      node_id: 'MDEwOlJlcG9zaXRvcnkxOTQ5MzI0MzI=',
      name: 'snack',
      full_name: 'Hugofv/snack',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/snack',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/snack',
      forks_url: 'https://api.github.com/repos/Hugofv/snack/forks',
      keys_url: 'https://api.github.com/repos/Hugofv/snack/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/snack/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/snack/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/snack/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/snack/issues/events{/number}',
      events_url: 'https://api.github.com/repos/Hugofv/snack/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/snack/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/snack/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/snack/tags',
      blobs_url: 'https://api.github.com/repos/Hugofv/snack/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/Hugofv/snack/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/Hugofv/snack/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/Hugofv/snack/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/Hugofv/snack/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/Hugofv/snack/languages',
      stargazers_url: 'https://api.github.com/repos/Hugofv/snack/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/snack/contributors',
      subscribers_url: 'https://api.github.com/repos/Hugofv/snack/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/snack/subscription',
      commits_url: 'https://api.github.com/repos/Hugofv/snack/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/snack/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/snack/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/snack/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/snack/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/snack/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/Hugofv/snack/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/snack/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/Hugofv/snack/downloads',
      issues_url: 'https://api.github.com/repos/Hugofv/snack/issues{/number}',
      pulls_url: 'https://api.github.com/repos/Hugofv/snack/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/snack/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/snack/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/Hugofv/snack/labels{/name}',
      releases_url: 'https://api.github.com/repos/Hugofv/snack/releases{/id}',
      deployments_url: 'https://api.github.com/repos/Hugofv/snack/deployments',
      created_at: '2019-07-02T20:46:12Z',
      updated_at: '2019-07-04T04:17:11Z',
      pushed_at: '2023-01-04T03:28:54Z',
      git_url: 'git://github.com/Hugofv/snack.git',
      ssh_url: 'git@github.com:Hugofv/snack.git',
      clone_url: 'https://github.com/Hugofv/snack.git',
      svn_url: 'https://github.com/Hugofv/snack',
      homepage: null,
      size: 4330,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'TypeScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 25,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 25,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 188732722,
      node_id: 'MDEwOlJlcG9zaXRvcnkxODg3MzI3MjI=',
      name: 'springboot-reactJS',
      full_name: 'Hugofv/springboot-reactJS',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/springboot-reactJS',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/springboot-reactJS',
      forks_url: 'https://api.github.com/repos/Hugofv/springboot-reactJS/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/springboot-reactJS/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/springboot-reactJS/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/springboot-reactJS/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/springboot-reactJS/deployments',
      created_at: '2019-05-26T21:20:57Z',
      updated_at: '2019-05-28T01:28:05Z',
      pushed_at: '2022-12-10T15:34:38Z',
      git_url: 'git://github.com/Hugofv/springboot-reactJS.git',
      ssh_url: 'git@github.com:Hugofv/springboot-reactJS.git',
      clone_url: 'https://github.com/Hugofv/springboot-reactJS.git',
      svn_url: 'https://github.com/Hugofv/springboot-reactJS',
      homepage: null,
      size: 21901,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'Java',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 1,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 32,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 1,
      open_issues: 32,
      watchers: 0,
      default_branch: 'master',
    },
    {
      id: 637192543,
      node_id: 'R_kgDOJfrJXw',
      name: 'weather-challange',
      full_name: 'Hugofv/weather-challange',
      private: false,
      owner: {
        login: 'Hugofv',
        id: 19415984,
        node_id: 'MDQ6VXNlcjE5NDE1OTg0',
        avatar_url: 'https://avatars.githubusercontent.com/u/19415984?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/Hugofv',
        html_url: 'https://github.com/Hugofv',
        followers_url: 'https://api.github.com/users/Hugofv/followers',
        following_url:
          'https://api.github.com/users/Hugofv/following{/other_user}',
        gists_url: 'https://api.github.com/users/Hugofv/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/Hugofv/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/Hugofv/subscriptions',
        organizations_url: 'https://api.github.com/users/Hugofv/orgs',
        repos_url: 'https://api.github.com/users/Hugofv/repos',
        events_url: 'https://api.github.com/users/Hugofv/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/Hugofv/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/Hugofv/weather-challange',
      description: null,
      fork: false,
      url: 'https://api.github.com/repos/Hugofv/weather-challange',
      forks_url: 'https://api.github.com/repos/Hugofv/weather-challange/forks',
      keys_url:
        'https://api.github.com/repos/Hugofv/weather-challange/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/Hugofv/weather-challange/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/Hugofv/weather-challange/teams',
      hooks_url: 'https://api.github.com/repos/Hugofv/weather-challange/hooks',
      issue_events_url:
        'https://api.github.com/repos/Hugofv/weather-challange/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/Hugofv/weather-challange/events',
      assignees_url:
        'https://api.github.com/repos/Hugofv/weather-challange/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/Hugofv/weather-challange/branches{/branch}',
      tags_url: 'https://api.github.com/repos/Hugofv/weather-challange/tags',
      blobs_url:
        'https://api.github.com/repos/Hugofv/weather-challange/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/Hugofv/weather-challange/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/Hugofv/weather-challange/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/Hugofv/weather-challange/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/Hugofv/weather-challange/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/Hugofv/weather-challange/languages',
      stargazers_url:
        'https://api.github.com/repos/Hugofv/weather-challange/stargazers',
      contributors_url:
        'https://api.github.com/repos/Hugofv/weather-challange/contributors',
      subscribers_url:
        'https://api.github.com/repos/Hugofv/weather-challange/subscribers',
      subscription_url:
        'https://api.github.com/repos/Hugofv/weather-challange/subscription',
      commits_url:
        'https://api.github.com/repos/Hugofv/weather-challange/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/Hugofv/weather-challange/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/Hugofv/weather-challange/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/Hugofv/weather-challange/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/Hugofv/weather-challange/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/Hugofv/weather-challange/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/Hugofv/weather-challange/merges',
      archive_url:
        'https://api.github.com/repos/Hugofv/weather-challange/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/Hugofv/weather-challange/downloads',
      issues_url:
        'https://api.github.com/repos/Hugofv/weather-challange/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/Hugofv/weather-challange/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/Hugofv/weather-challange/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/Hugofv/weather-challange/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/Hugofv/weather-challange/labels{/name}',
      releases_url:
        'https://api.github.com/repos/Hugofv/weather-challange/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/Hugofv/weather-challange/deployments',
      created_at: '2023-05-06T19:44:40Z',
      updated_at: '2023-05-07T00:53:28Z',
      pushed_at: '2023-05-08T12:09:18Z',
      git_url: 'git://github.com/Hugofv/weather-challange.git',
      ssh_url: 'git@github.com:Hugofv/weather-challange.git',
      clone_url: 'https://github.com/Hugofv/weather-challange.git',
      svn_url: 'https://github.com/Hugofv/weather-challange',
      homepage: null,
      size: 160,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'master',
    },
  ];
  return (
    <div>
      <SearchInput placeholder='Usúario' />

      <Flex>
        <List repos={gihubRepos} handleRepo={setSelectedRepo} />

        <Detail repo={selectedRepo} />
      </Flex>
    </div>
  );
};

export default Repo;
