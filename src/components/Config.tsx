import { Button, Code } from "@mantine/core";
import { useModal } from "../context/modalContext";
import { colors } from "./colors";

const Config: React.FC<{ content: string }> = ({ content }) => {
  const { openModal } = useModal();

  const configYamlCode = `
projectName: 'senne-test-439915'

scale: 30

# Dataset Generation Settings
Dataset:
  want: True
  regionName: "alaska"
  region: [-143.7, 60.3, -143, 60.6]
  startDate: "2022-04-01"
  endDate: "2022-07-01"
  imageCollection: 'LANDSAT/LC08/C02/T1_TOA'
  allowedDeadPixels: 10
  allowedCloudCoverage: 10
  cloudModelPath: "/path/to/model.pt"
  output_dir_image: "./dataset/"



# Mask Generation Settings
Mask:
  want: True
  regionName: "alaska"
  region: [-142.2, 61, -141.6, 61.3]
  window: 5
  allowedDeadPixels: 20
  allowedCloudCoverage: 20
  cloudModelPath: "/path/to/model.pt"
  output_dir_mask: "./masks/"
  output_dir_image: "./images_mask/"
`;

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
