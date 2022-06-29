import { ActionIcon, Group, Title} from '@mantine/core';
import React from 'react';
import { GitFork } from 'tabler-icons-react';

const NavbarMain:React.FC = () => {
  return (
    <Group sx={{ height: '100%' }} px={10} position='apart' spacing={'sm'}>
      <Title order={2}>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</Title>
      <Group>
        <a href="https://github.com/bogachenkov/npg-app">
          <ActionIcon variant='outline' color={'teal'} size={36}>
            <GitFork />
          </ActionIcon>
        </a>
      </Group>
    </Group>
  )
};

export default NavbarMain;