import { Button, Space, Grid, Image, Title } from "@mantine/core";
import { useModal } from "../context/modalContext";
import { colors } from "./colors";
import React from "react";

const EndPipeline: React.FC<{content?: string}> = ({content = "End Pipeline"}) => {
  const { openModal } = useModal();
  
  const handleClick = () => {
    const modalContent = (
      <>
        <Title order={3} mb="md">Mask Output Results</Title>
        <Grid gutter="md" maw={800}>
          <Grid.Col span={6}>
            <Image 
              src="end_pipeline/europe_2_RGBA.jpg" 
              alt="Result 1" 
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image
              src="end_pipeline/europe_2_RGBA_glacier_mask_rgb.jpg"
              alt="Result 1 Mask"
            />
          </Grid.Col>
        </Grid>
        <Space h="md"/>
        <Grid gutter="md" maw={800}>
          <Grid.Col span={6}>
            <Image 
              src="end_pipeline/greenland_27_RGBA.jpg" 
              alt="Result 2" 
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image
              src="end_pipeline/greenland_27_RGBA_glacier_mask_rgb.jpg"
              alt="Result 2 Mask"
            />
          </Grid.Col>
        </Grid>
        <Space h={'sm'} />
        <Title order={3} mb="md">Dataset Output Results</Title>
        <Grid gutter="md" maw={800}>
          <Grid.Col span={6}>
            <Image 
              src="end_pipeline/images_3_RGBA.jpeg" 
              alt="Result 2" 
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Image
              src="end_pipeline/images_4_RGBA.jpeg"
              alt="Result 2 Mask"
            />
          </Grid.Col>
        </Grid>
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
}

export default EndPipeline;
