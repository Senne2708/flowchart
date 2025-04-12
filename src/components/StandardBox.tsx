import { Box } from "@mantine/core";
import { colors } from "./colors";

const StandardBox: React.FC<{ text: string, color: keyof typeof colors }> = ({ text, color }) => {
  return (
    <Box
      style={{
        backgroundColor: colors[color],
        borderRadius: '5px',
        color: 'black',
        minWidth: '38px',
        minHeight: '36px',
        padding:'5px',
        textAlign:'center',
        maxWidth: '120px'
      }}
    >
      {text}
    </Box>
  );
};

export default StandardBox
