import React from 'react';
import { Paper, Text, Button, Group, Stack, Box } from '@mantine/core';
import '@mantine/core/styles.css';

const Flowchart: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <Paper shadow="md" p="lg" radius="md">
        <Text size="xl" mb="md" fw={700}>
          Satellite Image Processing Pipeline
        </Text>

        {/* Main pipeline flow */}
        <Stack align="center" gap="xs">
          <Button color="blue" radius="md">Start Pipeline</Button>
          <Text>↓</Text>
          <Button color="gray" radius="md">Load Config (YAML)</Button>
          <Text>↓</Text>
          <Button color="blue" radius="md">Initialise EarthDriver</Button>
          <Text>↓</Text>
          
          {/* Decision point */}
          <Box style={{ position: 'relative', margin: '20px 0' }}>
            <Button color="orange" radius="md">Dataset Processing?</Button>
            <Group justify="center" mt="xs">
              <Button color="blue" radius="md" style={{ marginRight: '100px' }}>Yes</Button>
              <Button color="blue" radius="md">No</Button>
            </Group>
          </Box>

          {/* Dataset processing branch */}
          <Box style={{ 
            border: '1px solid #4dabf7', 
            backgroundColor: '#f1f8ff',
            borderRadius: '8px',
            padding: '15px',
            margin: '10px 0'
          }}>
            <Text c="blue" fw={500} mb="sm">Dataset Processing Module</Text>
            <Stack align="center" gap="xs">
              <Button color="blue" radius="md">Process Dataset</Button>
              <Text>↓</Text>
              <Button color="blue" radius="md">Initialise Cloud Model</Button>
              <Text>↓</Text>
              <Button color="blue" radius="md">Generate & Validate Tiles</Button>
              <Text>↓</Text>
              <Button color="blue" radius="md">Create & Download Images</Button>
              <Text>↓</Text>
              <Button color="orange" variant="light" radius="md">Quality Filtering</Button>
            </Stack>
          </Box>

          {/* Second decision point */}
          <Box style={{ position: 'relative', margin: '20px 0' }}>
            <Button color="orange" radius="md">Mask Processing?</Button>
            <Group justify="center" mt="xs">
              <Button color="blue" radius="md" style={{ marginRight: '100px' }}>Yes</Button>
              <Button color="blue" radius="md">No</Button>
            </Group>
          </Box>

          {/* Mask processing branch */}
          <Box style={{ 
            border: '1px solid #20c997', 
            backgroundColor: '#f0fdf4',
            borderRadius: '8px',
            padding: '15px',
            margin: '10px 0'
          }}>
            <Text c="teal" fw={500} mb="sm">Mask Processing Module</Text>
            <Stack align="center" gap="xs">
              <Button color="blue" radius="md">Process Mask</Button>
              <Text>↓</Text>
              <Button color="blue" radius="md">Initialise Mask Cloud Model</Button>
              <Text>↓</Text>
              <Button color="blue" radius="md">Unzip RGI Region Files</Button>
              <Text>↓</Text>
              <Button color="blue" radius="md">Generate & Validate Mask Tiles</Button>
              <Text>↓</Text>
              <Button color="blue" radius="md">Find Glacier Dates & Select Satellite</Button>
              <Text>↓</Text>
              <Button color="blue" radius="md">Create & Download Mask Images</Button>
              <Text>↓</Text>
              <Button color="orange" variant="light" radius="md">Quality Filtering</Button>
              <Text>↓</Text>
              <Button color="blue" radius="md">Create Glacier Masks</Button>
              <Text>↓</Text>
              <Button color="blue" radius="md">Clean Up unzipped RGI Region File</Button>
            </Stack>
          </Box>

          {/* End point */}
          <Text>↓</Text>
          <Button color="blue" radius="md" mt="md">End Pipeline</Button>
        </Stack>

        {/* Legend */}
        <Paper shadow="xs" p="md" mt="lg" withBorder>
          <Text fw={500} mb="sm">Legend:</Text>
          <Group>
            <Button color="blue" size="xs" radius="md">Process</Button>
            <Button color="gray" size="xs" radius="md">Config</Button>
            <Button color="orange" size="xs" radius="md">Decision</Button>
            <Button color="orange" variant="light" size="xs" radius="md">Filtering</Button>
          </Group>
        </Paper>
      </Paper>
    </div>
  );
};

export default Flowchart;
