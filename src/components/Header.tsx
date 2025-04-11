import { Flex, Title, Group } from '@mantine/core';

function Header() {
  return (
    <Flex
      h="100%"
      px="md"
      align="center"
      justify="space-between"
    >
      <Group>
        <Title>Dissertation Project</Title>
      </Group>
    </Flex>
  );
}

export default Header;
