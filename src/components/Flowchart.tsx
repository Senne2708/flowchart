import { Paper, Text, Button, Stack, Box, Space, Grid, Group } from '@mantine/core';
import '@mantine/core/styles.css';
import React from 'react';

// Define colors to match LaTeX
const colors = {
  configColor: 'rgb(60, 145, 230)',    // configcolor
  processColor: 'rgb(255, 153, 0)',    // processcolor
  dataColor: 'rgb(102, 204, 153)',     // datacolor
  decisionColor: 'rgb(255, 102, 102)', // decisioncolor
  moduleColor: 'rgb(204, 153, 255)'    // modulecolor
};

// Process node styles
const Process: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Button 
      variant="outline"
      radius="sm"
      color="gray"
      style={{
        backgroundColor: colors.processColor,
        color: 'black',
        minWidth: '200px'
      }}
    >
      {content}
    </Button>
  );
};

// Config node with yellowish background
const Config: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Button 
      variant="outline"
      radius="sm"
      style={{
        backgroundColor: colors.configColor,
        color: 'black',
        minWidth: '200px'
      }}
    >
      {content}
    </Button>
  );
};

// Module style for filtering components
const Module: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Button 
      variant="outline"
      radius="sm"
      style={{
        backgroundColor: colors.configColor,
        color: 'black',
        minWidth: '200px'
      }}
    >
      {content}
    </Button>
  );
};

// Diamond shaped decision point
const Decision: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Box
      style={{
        width: 120,
        height: 120,
        backgroundColor: colors.decisionColor,
        transform: 'rotate(45deg)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        marginTop: '10px',
        marginBottom: '10px'
      }}
    >
      <Text style={{ transform: 'rotate(-45deg)', textAlign: 'center', fontSize: '14px' }}>
        {content}
      </Text>
    </Box>
  );
};

// Note component
const Note: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Box
      style={{
        backgroundColor: '#f1f3f5',
        border: '1px dashed #adb5bd',
        borderRadius: '6px',
        padding: '8px',
        fontSize: '14px',
        maxWidth: '180px'
      }}
    >
      {content}
    </Box>
  );
};

// Dashed line component - horizontal
const DashedLineH: React.FC<{ width?: number }> = ({ width = 100 }) => {
  return (
    <Box
      style={{
        height: '1px',
        width: `${width}px`,
        borderBottom: '2px dashed #adb5bd',
        margin: '0 5px'
      }}
    />
  );
};

const Flowchart = () => {
  return (
    <div style={{ padding: '10px', maxWidth: '1920px', margin: '0 auto' }}>
      <Paper shadow="md" p="lg" radius="md">
        <Text size="xl" mb="md" fw={700}>
          Satellite Image Processing Pipeline
        </Text>

        {/* Legend */}
        <Paper shadow="xs" p="md" mt="lg" withBorder>
          <Stack>
            <Text fw={500} mb="sm">Legend:</Text>
            <Group>
              <Process content="" />
              <Text>Process</Text>
            </Group>
              
            <Group>
              <Config content="" />
              <Text>Config</Text>
            </Group>
              
            <Group>
              <Box
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: 'white',
                  border: '1px solid #228be6',
                  transform: 'rotate(45deg)'
                }}
              />
              <Text>Decision</Text>
            </Group>
              
            <Group>
              <Module content="" />
              <Text>Filtering</Text>
            </Group>
              
            <Group>
              <Note content="" />
              <Text>Note</Text>
            </Group>
              
            <Group>
              <DashedLineH width={40} />
              <Text>Dashed Connection</Text>
            </Group>
          </Stack>
        </Paper>

        {/* Main pipeline flow */}
        <Stack align="center" gap="xs">
          <Space h="md" />
          <Process content="Start Pipeline" />
          <Text>↓</Text>
          <Config content="Load Config (YAML)" />
          <Text>↓</Text>
          <Process content="Initialise EarthDriver" />
          
          {/* First decision point with three-column grid layout */}
          <Space h="md" />
          <Grid style={{ width: '100%', position: 'relative' }}>
            <Grid.Col span={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box style={{ position: 'relative', top: '110px' }}>
                <Process content="Skip Dataset Processing" />
              </Box>
            </Grid.Col>
            
            <Grid.Col span={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <Decision content="Dataset Processing?" />
              <Text>↓</Text>      
              <Text size="sm">Yes</Text>
              <Text>↓</Text>
              
              {/* Dataset processing branch */}
              <Box style={{
                border: '1px solid #4dabf7',
                backgroundColor: '#e7f5ff',
                borderRadius: '8px',
                padding: '15px',
                margin: '10px 0',
                width: '90%',
                maxWidth: '400px',
                position: 'relative'
              }}>
                <Text c="blue" fw={500} mb="sm">Dataset Processing Module</Text>
                <Stack align="center" gap="xs">
                  <Process content="Process Dataset" />
                  <Text>↓</Text>
                  <Process content="Initialise Cloud Model" />
                  <Text>↓</Text>
                  
                  {/* Process with Note connection */}
                  <Box style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Process content="Generate & Validate Tiles" />
                    <Box style={{ position: 'absolute', right: '-160px', top: '10px', display: 'flex', alignItems: 'center' }}>
                      <DashedLineH width={60} />
                      <Note content="Tile Validation (Boundary Check)" />
                    </Box>
                  </Box>
                  
                  <Text>↓</Text>
                  
                  {/* Process with Note connection */}
                  <Box style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Process content="Create & Download Images" />
                    <Box style={{ position: 'absolute', right: '-210px', top: '10px', display: 'flex', alignItems: 'center' }}>
                      <DashedLineH width={60} />
                      <Note content="Satellite Selection Date Filtering" />
                    </Box>
                  </Box>
                  
                  <Text>↓</Text>
                  <Module content="Quality Filtering" />
                </Stack>
              </Box>
              <Text>↓</Text>
            </Grid.Col>
            
            <Grid.Col span={2}>
              {/* No branch dashed line */}
              <Box style={{ 
                position: 'absolute', 
                left: '25%', 
                top: '110px', 
                width: '150px', 
                height: '1px', 
                borderTop: '2px dashed #adb5bd' 
              }} />
              <Box style={{ position: 'absolute', left: '25%', top: '110px' }}>
                <Text size="sm">No</Text>
              </Box>
            </Grid.Col>
          </Grid>

          {/* Second decision point with three-column grid layout */}
          <Space h="md" />
                    
          <Grid style={{ width: '100%', position: 'relative' }}>
            <Grid.Col span={2}>
              <Box style={{ height: '100%' }}></Box>
            </Grid.Col>
            
            <Grid.Col span={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <Decision content="Mask Processing?" />
              <Text>↓</Text>
              <Text size="sm">Yes</Text>
              <Text>↓</Text>
              
              {/* Mask processing branch */}
              <Box style={{
                border: '1px solid #20c997',
                backgroundColor: '#e6fcf5',
                borderRadius: '8px',
                padding: '15px',
                margin: '10px 0',
                width: '90%',
                maxWidth: '400px',
                position: 'relative'
              }}>
                <Text c="teal" fw={500} mb="sm">Mask Processing Module</Text>
                <Stack align="center" gap="xs">
                  <Process content="Process Mask" />
                  <Text>↓</Text>
                  <Process content="Initialise Mask Cloud Model" />
                  <Text>↓</Text>
                  
                  {/* Process with Note connection */}
                  <Box style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Process content="Unzip RGI Region Files" />
                    <Box style={{ position: 'absolute', left: '-160px', top: '10px', display: 'flex', alignItems: 'center' }}>
                      <Note content="RGI Glacier Outlines" />
                      <DashedLineH width={60} />
                    </Box>
                  </Box>
                  
                  <Text>↓</Text>
                  
                  {/* Process with Note connection */}
                  <Box style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Process content="Generate & Validate Mask Tiles" />
                    <Box style={{ position: 'absolute', left: '-160px', top: '10px', display: 'flex', alignItems: 'center' }}>
                      <Note content="Tile Validation (Boundary Check)" />
                      <DashedLineH width={60} />
                    </Box>
                  </Box>
                  
                  <Text>↓</Text>
                  
                  {/* Process with Note connection */}
                  <Box style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Process content="Find Glacier Dates & Select Satellite" />
                    <Box style={{ position: 'absolute', left: '-210px', top: '10px', display: 'flex', alignItems: 'center' }}>
                      <Note content="process_tiles_with_glaciers() get_satellite()" />
                      <DashedLineH width={30} />
                    </Box>
                  </Box>
                  
                  <Text>↓</Text>
                  <Process content="Create & Download Mask Images" />
                  <Text>↓</Text>
                  <Module content="Quality Filtering" />
                  <Text>↓</Text>
                  <Process content="Create Glacier Masks" />
                  <Text>↓</Text>
                  <Process content="Clean Up unzipped RGI Region File" />
                </Stack>
              </Box>
              <Text>↓</Text>
            </Grid.Col>
            
            <Grid.Col span={2}>
              {/* No branch dashed line */}
              <Box style={{ 
                position: 'absolute', 
                right: '25%', 
                top: '110px', 
                width: '150px', 
                height: '1px', 
                borderTop: '2px dashed #adb5bd' 
              }} />
              <Box style={{ position: 'absolute', right: '25%', top: '110px' }}>
                <Text size="sm">No</Text>
              </Box>
              <Box style={{ position: 'relative', top: '110px', display: 'flex', justifyContent: 'flex-end' }}>
                <Process content="Skip Mask Processing" />
              </Box>
            </Grid.Col>
          </Grid>

          {/* Common path down */}
          <Box style={{ position: 'relative', width: '100%', height: '80px' }}>
            {/* Skip Dataset Processing line */}
            <Box style={{ 
              position: 'absolute',
              left: '25%',
              top: '-300px',
              height: '300px',
              width: '1px',
              borderLeft: '2px dashed #adb5bd'
            }} />
            
            {/* Skip Mask Processing line */}
            <Box style={{ 
              position: 'absolute',
              right: '25%',
              top: '-300px',
              height: '300px',
              width: '1px',
              borderLeft: '2px dashed #adb5bd'
            }} />
            
            {/* Horizontal connector at bottom */}
            <Box style={{ 
              position: 'absolute',
              left: '25%',
              right: '25%',
              bottom: '20px',
              height: '1px',
              borderBottom: '2px dashed #adb5bd'
            }} />
          </Box>

          {/* End point */}
          <Process content="End Pipeline" />
        </Stack>

        {/* Additional notes for configuration */}
        <Box style={{ marginTop: '40px' }}>
          <Group >
            <Box style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
              <Note content="config.yaml" />
              <DashedLineH width={20} />
              <Text>→ Load Config</Text>
            </Box>
            
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Note content="Earth Engine Authentication" />
              <DashedLineH width={20} />
              <Text>→ Initialise EarthDriver</Text>
            </Box>
          </Group>
        </Box>
      </Paper>
    </div>
  );
};

export default Flowchart;
