import { ActionIcon, Affix, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { MoonStars, Sun } from 'tabler-icons-react';

const ThemeToggler:React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const light = colorScheme === 'light';

  return (
    <Affix position={{ bottom: 30, right: 30 }}>
      <ActionIcon
        size={36}
        variant='outline'
        color={light ? 'teal' : 'yellow'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        { light ? <MoonStars size={22} /> : <Sun size={22} /> }
      </ActionIcon>
    </Affix>
  )
};

export default ThemeToggler;