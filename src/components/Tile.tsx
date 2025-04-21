import { Button } from "@mantine/core";
import { useModal } from "../context/modalContext";
import { colors } from "./colors";
import React from "react";

const Tiles: React.FC<{type: string}> = ({type}) => {
  const { openModal } = useModal();
  let html_path: string = '';
  
  if (type === 'dataset') {
    html_path = 'geemap_visualisation_dataset.html';
  } else if (type === 'mask') {
    html_path = 'geemap_visualisation_mask.html';
  }
  
  const mapContent = (
    <div style={{ width: "100vw", height: "70vh", maxWidth: "100%" }}>
      <iframe 
        src={html_path}
        style={{ width: "100%", height: "100%", border: "none" }} 
        title="Map"
      />
    </div>
  );
    
  return (
    <Button
      variant="outline"
      radius="sm"
      style={{
        backgroundColor: colors.processColour,
        color: 'black',
        border: '1px solid black',
        lineHeight: '1.3',
        padding: '12px 16px',
        height: 'auto',
        minHeight: '80px',
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'normal'
      }}
      miw={140}
      onClick={() => openModal(
        mapContent,
        "Splitting Large Bounding Box"
      )}
    >
      Generate
      <br />
      &
      <br />
      Validate Tiles
    </Button>
  );
};

export default Tiles;
