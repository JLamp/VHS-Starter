import { AppearanceIcon } from "../icons/AppearanceIcon";
import { AudioDescriptionIcon } from "../icons/AudioDescriptionIcon";
import { CaptionsIcon } from "../icons/CaptionsIcon";
import { Tooltip, Box } from "@mui/material";

export function AccessibilityIcons({ input }) {
  const SIZE = 16;
  const DefaultColor = "#c4c4c8";
  return (
    <>
      <Tooltip title="High Contrast Player Color" placement="top" arrow="true">
        <Box>
          <AppearanceIcon
            sx={{
              width: SIZE,
              height: SIZE,
              color: input.includes("High Contrast Player")
                ? "#2C58F6"
                : DefaultColor,
            }}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Captions" placement="top" arrow="true">
        <Box>
          <CaptionsIcon
            sx={{
              width: SIZE,
              height: SIZE,
              color: input.includes("Captions") ? "#279AFF" : DefaultColor,
            }}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Audio Descriptions" placement="top" arrow="true">
        <Box>
          <AudioDescriptionIcon
            sx={{
              width: SIZE,
              height: SIZE,
              color: input.includes("Audio Description")
                ? "#00C481"
                : DefaultColor,
            }}
          />
        </Box>
      </Tooltip>
    </>
  );
}
