import { Button, Text, Image, Title, Stack } from "@mantine/core";
import { useModal } from "../context/modalContext";
import { colors } from "./colors";
import React from "react";

const QualityFiltering: React.FC<{type: string, content?: string}> = ({type, content = "Quality Filtering"}) => {
  const { openModal } = useModal();
  
  const handleClick = () => {
    let modalContent;
    
    if (type === 'mask') {
      modalContent = (
        <>
          <Title order={3} mb="md">Dead Pixels</Title>
            <Text>No dead pixels in this collection</Text>
          <Title order={3} mb="md">Cloud Segmentation</Title>
          <Stack>
            <Image 
              src="mask_cloud_pred/images_1.jpeg" 
              alt="Result 1" 
            />
            <Image 
              src="mask_cloud_pred/images_2.jpeg" 
              alt="Result 2" 
            />
            <Image 
              src="mask_cloud_pred/images_3.jpeg" 
              alt="Result 3" 
            />
            <Image 
              src="mask_cloud_pred/images_4.jpeg" 
              alt="Result 4" 
            />
            <Image 
              src="mask_cloud_pred/images_5.jpeg" 
              alt="Result 5" 
            />
            <Image 
              src="mask_cloud_pred/images_6.jpeg" 
              alt="Result 6" 
            />
            <Image 
              src="mask_cloud_pred/images_7.jpeg"
              alt="Result 7" 
            />
            <Image 
              src="mask_cloud_pred/images_8.jpeg" 
              alt="Result 8" 
            />
            <Image 
              src="mask_cloud_pred/images_9.jpeg" 
              alt="Result 9" 
            />
          </Stack>
        </>
      );
    } else if (type === 'dataset') {
      modalContent = (
      <>
        <Title order={3} mb="md">Dead Pixels</Title>
          <Stack>
            <Image 
              src="dataset_deadpixels/images_1.jpeg" 
              alt="Result 1" 
            />
            <Image 
              src="dataset_deadpixels/images_2.jpeg" 
              alt="Result 2" 
            />
            <Image 
              src="dataset_deadpixels/images_3.jpeg" 
              alt="Result 3" 
            />
            <Image 
              src="dataset_deadpixels/images_4.jpeg" 
              alt="Result 4" 
            />
            <Image 
              src="dataset_deadpixels/images_5.jpeg" 
              alt="Result 5" 
            />
            <Image 
              src="dataset_deadpixels/images_6.jpeg" 
              alt="Result 6" 
            />
            <Image 
              src="dataset_deadpixels/images_7.jpeg"
              alt="Result 7" 
            />
            <Image 
              src="dataset_deadpixels/images_8.jpeg" 
              alt="Result 8" 
            />
            <Image 
              src="dataset_deadpixels/images_9.jpeg" 
              alt="Result 9" 
            />
          </Stack>
        <Title order={3} mb="md">Cloud Segmentation</Title>
          <Stack>
            <Image 
              src="dataset_cloud_pred/images_1.jpeg" 
              alt="Result 1" 
            />
            <Image 
              src="dataset_cloud_pred/images_2.jpeg" 
              alt="Result 2" 
            />
            <Image 
              src="dataset_cloud_pred/images_3.jpeg" 
              alt="Result 3" 
            />
            <Image 
              src="dataset_cloud_pred/images_4.jpeg" 
              alt="Result 4" 
            />
            <Image 
              src="dataset_cloud_pred/images_5.jpeg" 
              alt="Result 5" 
            />
            <Image 
              src="dataset_cloud_pred/images_6.jpeg" 
              alt="Result 6" 
            />
            <Image 
              src="dataset_cloud_pred/images_7.jpeg"
              alt="Result 7" 
            />
            <Image 
              src="dataset_cloud_pred/images_8.jpeg" 
              alt="Result 8" 
            />
            <Image 
              src="dataset_cloud_pred/images_9.jpeg" 
              alt="Result 9" 
            />
          </Stack>
      </>
      );
    } else {
      modalContent = (
        <>
          <Title order={3} mb="md">Quality Analysis</Title>
          <Text>No specific quality information available for this type.</Text>
        </>
      );
    }
    
    openModal(modalContent, "Pipeline Results");
  };
  
  return (
    <Button
      variant="outline"
      radius="sm"
      style={{
        backgroundColor: colors.moduleColour,
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

export default QualityFiltering;
