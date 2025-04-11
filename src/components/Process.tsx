import { Button } from "@mantine/core";
import { colors } from "./colors";

// Process node styles
const Process: React.FC<{ content: string }> = ({ content }) => {
  return (
    <Button 
      variant="outline"
      radius="sm"
      color="gray"
      style={{
        backgroundColor: colors.processColour,
        color: 'black',
        minWidth: '200px'
      }}
    >
      {content}
    </Button>
  );
};

export default Process
