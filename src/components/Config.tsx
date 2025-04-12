import { Button, Code } from "@mantine/core";
import { useModal } from "../context/modalContext";
import { colors } from "./colors";

const Config: React.FC<{ content: string }> = ({ content }) => {
  const { openModal } = useModal();

  const configYamlCode = `
projectName: 'senne-test-439915'
imageCollection: 'LANDSAT/LC08/C02/T1_TOA'

scale: 30

Mask:
  want: False
  regionName: "alaska"
  region: [-144.5, 60.3, -144, 61]  
  allowedDeadPixels: 10
  allowedCloudCoverage: 10
  cloudModelPath: "/path/to/model.pt"
  output_dir_mask: "./masks/"
  output_dir_image: "./images_mask/"

Dataset:
  want: True
  regionName: "alaska"
  region: [-150, 59.5, -149.5, 60]
  startDate: "2022-01-01"
  endDate: "2023-01-01"
  allowedDeadPixels: 10
  checkClouds: true
  cloudModelPath: "/path/to/model.pt"
  allowedCloudCoverage: 10
  output_dir_image: "./dataset/"`;

  // Create a formatted code block for the modal
  const codeModalContent = (
    <div style={{ maxHeight: '70vh', overflow: 'auto' }}>
      <pre
        style={{
          backgroundColor: '#f5f5f5',
          padding: '16px',
          borderRadius: '4px',
          fontFamily: 'monospace',
          fontSize: '14px',
          whiteSpace: 'pre-wrap',
          overflowX: 'auto',
          border: '1px solid #ddd'
        }}
      >
        <Code>{configYamlCode}</Code>
      </pre>
    </div>
  );

  return (
    <Button 
      variant="outline"
      radius="sm"
      style={{
        backgroundColor: colors.configColour,
        color: 'black',
        border: '1px solid black'
      }}
      onClick={() => openModal(
        codeModalContent,
        'Configuration Example'
      )}
      miw={140}
    >
      {content}
    </Button>
  );
}

export default Config;
