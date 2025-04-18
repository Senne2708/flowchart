import { Box, Card, Grid, Group, Paper, Space, Stack, Text, Title} from '@mantine/core';
import Config from './Config';
import StandardBox from './StandardBox';
import QualityFiltering from './QualityFiltering';
import EndPipeline from './EndPipeline';
import Tiles from './Tile';

const colors = {
  configColor: 'rgb(60, 145, 230)',    // configcolor
  processColor: 'rgb(255, 153, 0)',    // processcolor
  dataColor: 'rgb(102, 204, 153)',     // datacolor
  decisionColor: 'rgb(255, 102, 102)', // decisioncolor
  moduleColor: 'rgb(204, 153, 255)'    // modulecolor
};

function Flowchart() {

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
        <Stack align='center' w={'100%'}>
          <Paper shadow="xs" p="md" mt="lg" withBorder w={'100%'}>
          <Stack>
            <Text fw={500} mb="sm">Legend:</Text>
            <Group>
              <StandardBox text="" color='processColour'/>
              <Text>Process</Text>
              
              <Box
                style={{
                  backgroundColor: colors.configColor,
                  borderRadius: '5px',
                  minWidth: '38px',
                  minHeight: '36px',
                  padding:'5px',
                  textAlign:'center',
                }}
              />
              <Text>Config</Text>
              
              <Box
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: colors.decisionColor,
                  transform: 'rotate(45deg)'
                }}
              />
              <Text>Decision</Text>
              <Box
                style={{
                  backgroundColor: colors.moduleColor,
                  borderRadius: '5px',
                  minWidth: '38px',
                  minHeight: '36px',
                  padding:'5px',
                  textAlign:'center',
                }}
              />
              <Text>Quality Filter</Text>
            </Group>
            <Text fs={'bold'}> Note: Any box with a black boundary is interactive</Text>
          </Stack>
        </Paper>

        {/* Main pipeline flow */}
        <Stack align="center" gap="xs" w={'100%'}>
          <Space h="md" />
          <StandardBox text="Start Pipeline" color='processColour'/>
          <Text>↓</Text>
          <Config content="Load Config (YAML)" />

          <Text>↓</Text>
          <StandardBox text="Initialise EarthDriver" color='processColour'/>
          <Text>↓</Text>
          
          {/* First decision point with three-column grid layout */}
          <Space h="md" />
          <Grid style={{ width: '100%', position: 'relative' }}>
            <Grid.Col span={2} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Group>
                <Text>↓</Text>
                <Text>No</Text>
              </Group>
            </Grid.Col>
            
            <Grid.Col span={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <Decision content="Dataset Processing?" />
            </Grid.Col>
            
            <Grid.Col span={2}></Grid.Col>
          </Grid>

          {/* Yes path for first decision */}
          <Grid style={{ width: '100%', position: 'relative' }}>
            <Grid.Col span={2} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}} >              
              <Text>↓</Text>
            </Grid.Col>
            <Grid.Col span={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
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
                  
                  <Tiles type="dataset"/>
                  
                  <Text>↓</Text>
                  
                  <StandardBox text="Create & Download Images" color='processColour'/>
                  
                  <Text>↓</Text>
                  <QualityFiltering type="dataset" content="Quality Filter" />
                </Stack>
              </Box>
              <Text>↓</Text>
            </Grid.Col>
            <Grid.Col span={2}></Grid.Col>
          </Grid>

          {/* Second decision point with three-column grid layout */}
          <Space h="md" />
          <Grid style={{ width: '100%', position: 'relative'}}>
            <Grid.Col  variant='outline' span={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Group>
                <Text>→</Text>
              </Group>
            </Grid.Col>
            
            <Grid.Col span={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <Decision content="Mask Processing?" />
            </Grid.Col>
            
            <Grid.Col span={2} style={{display:'flex'}}>
              <Group>
                <Text>No</Text>
                <Text>↓</Text>
              </Group>
            </Grid.Col>
          </Grid>

          {/* Yes path for second decision */}
          <Grid style={{ width: '100%', position: 'relative'}}>
            <Grid.Col span={2}>
              
            </Grid.Col>
            <Grid.Col span={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
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
                  
                  <Tiles type="mask"/>
                  <Text>↓</Text>
                  
                  <StandardBox text="Find Glacier Dates & Select Satellite" color='processColour'/>
                  
                  <Text>↓</Text>
                  <StandardBox text="Create & Download Mask Images" color='processColour'/>
                  <Text>↓</Text>
                  <QualityFiltering type="mask" content="Quality Filter" />
                  <Text>↓</Text>
                  <StandardBox text="Create Glacier Masks" color='processColour'/>
                  <Text>↓</Text>
                  <StandardBox text="Clean Up unzipped RGI Region File" color='processColour'/>
                </Stack>
              </Box>
              <Text>↓</Text>
            </Grid.Col>
            <Grid.Col span={2} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}} >              
              <Text>↓</Text>
            </Grid.Col>
          </Grid>

          {/* End point */}
          <Grid style={{ width: '100%', position: 'relative'}}>
            <Grid.Col span={2} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}></Grid.Col>
            <Grid.Col span={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <EndPipeline/>
            </Grid.Col>
            <Grid.Col span={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Group>
                <Text>←</Text>
              </Group>
            </Grid.Col>
          </Grid>
        </Stack>
        <Space h={'lg'} />

        </Stack>
      </Card>
      
    </div>
  );
}

export default Flowchart;
