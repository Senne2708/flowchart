import { Button } from "@mantine/core";
import { useModal } from "../context/modalContext"
import { colors } from "./colors";



const QualityFiltering: React.FC<{ content?: string }> = ({ content }) => {
  const { openModal } = useModal();

  return (
    <Button
      variant="outline"
      radius={"sm"}
        style={{
        backgroundColor: colors.moduleColour,
        color: 'black',
        border: '1px solid black'
      }}
      onClick={() => openModal(
        'This is a modal',
        'Quality Filtering'
      )}
      miw={140}
    >
      {content}
    </Button>
  );
}

export default QualityFiltering
