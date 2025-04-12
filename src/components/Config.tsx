import { Button, Code } from "@mantine/core";
import { useModal } from "../context/modalContext";
import { colors } from "./colors";

const Config: React.FC<{ content: string }> = ({ content }) => {
  const { openModal } = useModal();

  const configYamlCode = `# Google Earth Engine Project Name - Required for authentication
projectName: 'senne-test-439915'

# Satellite imagery collection to use
imageCollection: 'LANDSAT/LC08/C02/T1_TOA'

# Spatial resolution in meters
scale: 30

# Mask Generation Settings
Mask:
  # Enable/disable mask generation
  want: False
  # Geographic region to process
  regionName: "alaska"
  # Bounding box coordinates
  region: [-144.5, 60.3, -144, 61]  
  # Maximum percentage of dead (no-data) pixels allowed in an image
  # Images exceeding this threshold will be discarded
  allowedDeadPixels: 10
  # Maximum cloud coverage percentage allowed
  allowedCloudCoverage: 10
  cloudModelPath: "/path/to/model.pt"
  # Output directory for binary glacier masks
  output_dir_mask: "./masks/"
  # Output directory for the source satellite images
  output_dir_image: "./images_mask/"

# Dataset Generation Settings
Dataset:
  # Enable/disable dataset generation
  want: True
  # Geographic region to process
  regionName: "alaska"
  # Bounding box coordinates
  region: [-150, 59.5, -149.5, 60]
  # Time range for image collection
  startDate: "2022-01-01"
  endDate: "2023-01-01"
  # Maximum percentage of dead (no-data) pixels allowed
  # Higher threshold than mask since this is for training data
  allowedDeadPixels: 10
  checkClouds: true
  cloudModelPath: "/path/to/model.pt"
  allowedCloudCoverage: 10  # Maximum allowed cloud coverage percentage
  # Output directory for processed satellite images
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
