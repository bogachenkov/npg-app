import { Button, Center, Container, Group, List, Stepper, Text, ThemeIcon, Title } from '@mantine/core';
import React, { useState } from 'react';
import { Server, CircleDot, Database, DeviceDesktop } from 'tabler-icons-react';

const STEPS_MAP = ['Client', 'API', 'Database'];
const STEPS_ITEMS = [
  ['Next.js', 'graphql-codegen', 'Apollo Client', 'Mantine lib for UI', 'Styled-components'],
  ['Graphql', 'Yoga server', 'Prisma'],
  ['PostgreSQL']
];

const Content:React.FC = () => {
  const [active, setActive] = useState(0);
  
  return (
    <Container size={800}>
      <Text align='center' my={32}>
        Docker containers:
      </Text>
      <Stepper active={active} onStepClick={setActive} color='teal'>
        <Stepper.Step icon={<DeviceDesktop size={18} />} completedIcon={<DeviceDesktop size={18} />} label="Client" />
        <Stepper.Step icon={<Server size={18} />} completedIcon={<Server size={18} />} label="API" />
        <Stepper.Step icon={<Database size={18} />} completedIcon={<Database size={18} />} label="Database" />
      </Stepper>
      
      <Title align='center' mt={50}>{STEPS_MAP[active]}</Title>
      <Center mt={20}>
        <List style={{ minHeight: '160px' }} spacing={'xs'} size='md' center icon={
          <ThemeIcon color={'teal'} size={24} radius='xl'>
            <CircleDot size={16} />
          </ThemeIcon>
        }>
          {
            STEPS_ITEMS[active].map(item => <List.Item key={item}>{item}</List.Item>)
          }
        </List>
      </Center>
      <Group position='center' mt={50}>
        <Button onClick={() => setActive(v => v - 1)} disabled={active === 0} variant='outline' color={'teal'}>Prev</Button>
        <Button onClick={() => setActive(v => v + 1)} disabled={active === STEPS_MAP.length - 1} variant='outline' color={'teal'}>Next</Button>
      </Group>
    </Container>
  )
};

export default Content;