import { Button } from "@mantine/core";
import { useModal } from "../context/modalContext"
import { colors } from "./colors";



const EndPipeline: React.FC<{content?: string}>= ({content = "End Pipeline"}) => {
  const { openModal } = useModal();

  return (
    <Button
      variant="outline"
      radius={"sm"}
        style={{
        backgroundColor: colors.processColour,
        color: 'black',
        border: '1px solid black'
      }}
      onClick={() => openModal(
        'This is a modal end'
      )}
    >
      {content}
    </Button>
  );
}

export default EndPipeline
