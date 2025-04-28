import { Button, Space, Grid, Image, Title, Group } from "@mantine/core";
import { useModal } from "../context/modalContext";
import { colors } from "./colors";
import React from "react";

const EndPipeline: React.FC<{content?: string}> = ({content = "End Pipeline"}) => {
  const { openModal } = useModal();
  
  // Generate mask data for all 9 images
  const maskImages = Array.from({ length: 9 }, (_, i) => {
    const imageNum = i + 1; // Start from 1
    return {
      image: `mask_images/images_${imageNum}_RGBA.jpeg`,
      mask: `mask_masks/images_${imageNum}_RGBA_glacier_mask_rgb.jpeg`,
      altImage: `Result ${imageNum}`,
      altMask: `Result ${imageNum} Mask`
    };
  });
  
  // Specify only the dataset images that exist (1, 3, and 9)
  const datasetImageNumbers = [1, 3, 9];
  const datasetImages = datasetImageNumbers.map(imageNum => ({
    image: `dataset_images/images_${imageNum}_RGBA.jpeg`,
    altImage: `Dataset Image ${imageNum}`
  }));

  const handleClick = () => {
    const modalContent = (
      <>
        <Title order={3} mb="md">Mask Output Results</Title>
        {maskImages.map((item, index) => (
          <React.Fragment key={`mask-${index}`}>
            <Grid gutter="md" maw={800}>
              <Grid.Col span={6}>
                <Image 
                  src={item.image} 
                  alt={item.altImage} 
                />
              </Grid.Col>
              <Grid.Col span={6}>
                <Image
                  src={item.mask}
                  alt={item.altMask}
                />
              </Grid.Col>
            </Grid>
            {index < maskImages.length - 1 && <Space h="md" />}
          </React.Fragment>
        ))}
        
        <Space h="sm" />
        <Title order={3} mb="md">Dataset Output Results</Title>
        <Grid gutter="md" maw={800}>
          {datasetImages.map((item, index) => (
            <Grid.Col span={6} key={`dataset-${index}`}>
              <Image 
                src={item.image}
                alt={item.altImage}
              />
            </Grid.Col>
          ))}
        </Grid>
        
        <Space h="xl" />
        <Title order={3} mb="md">Download Results</Title>
        <Group>
          <Button 
            component="a"
            href="/mask_image_metadata.csv"
            download
            variant="filled"
            color="blue"
          >
            Download Mask Results CSV
          </Button>
          <Button 
            component="a"
            href="/dataset_image_metadata.csv"
            download
            variant="filled"
            color="teal"
          >
            Download Dataset Results CSV
          </Button>
        </Group>
      </>
    );
    
    openModal(modalContent, "Pipeline Results");
  };
  
  return (
    <Button
      variant="outline"
      radius="sm"
      style={{
        backgroundColor: colors.processColour,
        color: 'black',
        border: '1px solid black',
      }}
      onClick={handleClick}
      miw={140}
    >
      {content}
    </Button>
  );
};

export default EndPipeline;
