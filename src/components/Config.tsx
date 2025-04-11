import { Button } from "@mantine/core";
import { useModal } from "../context/modalContext";
import { colors } from "./colors";

// Update your button components to use different messages
const Config: React.FC<{ content: string }> = ({ content }) => {
  const { openModal } = useModal();

  return (
    <Button 
      variant="outline"
      radius="sm"
      style={{
        backgroundColor: colors.configColour,
        color: 'black',
        minWidth: '200px'
      }}
      onClick={() => openModal(
        'This is the configuration modal',
        'Configuration Details'
      )}
    >
      {content}
    </Button>
  );
}

export default Config
