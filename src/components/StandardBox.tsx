import { Box } from "@mantine/core";
import { colors } from "./colors";

const StandardBox: React.FC<{ text: string, color: keyof typeof colors }> = ({ text, color }) => {
  return (
    <Box
      style={{
        backgroundColor: colors[color], // Access the color value using the key
        border: '1px dashed #adb5bd',
        borderRadius: '6px',
        padding: '8px',
        fontSize: '14px',
        maxWidth: '180px'
      }}
    >
      {text}
    </Box>
  );
};

export default StandardBox
