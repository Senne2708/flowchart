import { Box, Button, Card, Grid, Group, Paper, Space, Stack, Text, Title} from '@mantine/core';
import Config from './Config';
import StandardBox from './StandardBox';

const colors = {
  configColor: 'rgb(60, 145, 230)',    // configcolor
  processColor: 'rgb(255, 153, 0)',    // processcolor
  dataColor: 'rgb(102, 204, 153)',     // datacolor
  decisionColor: 'rgb(255, 102, 102)', // decisioncolor
  moduleColor: 'rgb(204, 153, 255)'    // modulecolor
};



function Flowchart() {
  
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

  return (
    <div>
      <Title order={2} mb="md">Flowchart</Title>
       <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Stack align='center'>
          <Paper shadow="xs" p="md" mt="lg" withBorder>
          <Stack>
            <Text fw={500} mb="sm">Legend:</Text>
            <Group>
              <StandardBox text="" color='processColour'/>
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
              
          </Stack>
        </Paper>

        {/* Main pipeline flow */}
        <Stack align="center" gap="xs">
          <Space h="md" />
          <StandardBox text="Start Pipeline" color='processColour'/>
          <Text>↓</Text>
          <Config content="Load Config (YAML)" />

          <Text>↓</Text>
          <StandardBox text="Initialise EarthDriver" color='processColour'/>
          
          {/* First decision point with three-column grid layout */}
          <Space h="md" />
          <Grid style={{ width: '100%', position: 'relative' }}>
            <Grid.Col span={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box style={{ position: 'relative', top: '110px' }}>
                <StandardBox text="Skip Dataset Processing" color='processColour'/>
              </Box>
            </Grid.Col>
            
            <Grid.Col span={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <Decision content="Dataset Processing?" />
              <Space h="md" />
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
                  <StandardBox text="Process Dataset" color='processColour'/>
                  <Text>↓</Text>
                  <StandardBox text="Initialise Cloud Model" color='processColour'/>
                  <Text>↓</Text>
                  
                  <StandardBox text="Generate & Validate Tiles" color='processColour'/>
                  
                  <Text>↓</Text>
                  
                  <StandardBox text="Create & Download Images" color='processColour'/>
                  
                  <Text>↓</Text>
                  <Module content="Quality Filtering" />
                </Stack>
              </Box>
              <Text>↓</Text>
            </Grid.Col>
            
            <Grid.Col span={2}>
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
              <Space h="md" />
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
                  <StandardBox text="Process Mask" color='processColour' />
                  <Text>↓</Text>
                  <StandardBox text="Initialise Mask Cloud Model" color='processColour'/>
                  <Text>↓</Text>
                  
                  <StandardBox text="Unzip RGI Region Files" color='processColour'/>
                  
                  <Text>↓</Text>
                  
                  <StandardBox text="Generate & Validate Mask Tiles" color='processColour'/>

                  <Text>↓</Text>
                  
                  <StandardBox text="Find Glacier Dates & Select Satellite" color='processColour'/>
                  
                  <Text>↓</Text>
                  <StandardBox text="Create & Download Mask Images" color='processColour'/>
                  <Text>↓</Text>
                  <Module content="Quality Filtering" />
                  <Text>↓</Text>
                  <StandardBox text="Create Glacier Masks" color='processColour'/>
                  <Text>↓</Text>
                  <StandardBox text="Clean Up unzipped RGI Region File" color='processColour'/>
                </Stack>
              </Box>
              <Text>↓</Text>
            </Grid.Col>
            
            <Grid.Col span={2}>
              <Box style={{ position: 'relative', top: '110px', display: 'flex', justifyContent: 'flex-end' }}>
                <StandardBox text="Skip Mask Processing" color='processColour'/>
              </Box>
            </Grid.Col>
          </Grid>

          {/* End point */}
          <StandardBox text="End Pipeline" color='processColour'/>
        </Stack>

        </Stack>
      </Card>
      
    </div>
  );
}

export default Flowchart;
