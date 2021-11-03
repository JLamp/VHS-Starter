import styled from "styled-components";
import { ShareIcon } from "../icons/ShareIcon";
import { AccessibilityIcon } from "../icons/AccessibilityIcon";
import { AnnotationIcon } from "../icons/AnnotationIcon";
import { AppearanceIcon } from "../icons/AppearanceIcon";
import { AudioDescriptionIcon } from "../icons/AudioDescriptionIcon";
import { CallToActionIcon } from "../icons/CallToActionIcon";
import { CaptionsIcon } from "../icons/CaptionsIcon";
import { ChaptersIcon } from "../icons/ChaptersIcon";
import { ControlsIcon } from "../icons/ControlsIcon";
import { EventbriteIcon } from "../icons/EventbriteIcon";
import { PasswordIcon } from "../icons/PasswordIcon";
import { ThumbnailIcon } from "../icons/ThumbnailIcon";
import { TranscriptIcon } from "../icons/TranscriptIcon";
import { TurnstileIcon } from "../icons/TurnstileIcon";
import { Tooltip, Box } from "@mui/material";

export function CustomizeIcons({ input }) {
  const SIZE = 16;
  const DefaultColor = "#c4c4c8";
  return (
    <>
      <Tooltip title="Share" placement="top" arrow="true">
        <Box>
          <ShareIcon
            sx={{
              width: SIZE,
              height: SIZE,
              color: input.includes("Share") ? "#FABE1F" : DefaultColor,
            }}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Annotation Links" placement="top" arrow="true">
        <Box>
          <AnnotationIcon
            sx={{
              width: SIZE,
              height: SIZE,
              color: input.includes("Annotation Link")
                ? "#1E64F0"
                : DefaultColor,
            }}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Call to Action" placement="top" arrow="true">
        <Box>
          <CallToActionIcon
            sx={{
              width: SIZE,
              height: SIZE,
              color: input.includes("Call to Action")
                ? "#279AFF"
                : DefaultColor,
            }}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Turnstile" placement="top" arrow="true">
        <Box>
          <TurnstileIcon
            sx={{
              width: SIZE,
              height: SIZE,
              color: input.includes("Turnstile") ? "#00C481" : DefaultColor,
            }}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Password" placement="top" arrow="true">
        <Box>
          <PasswordIcon
            sx={{
              width: SIZE,
              height: SIZE,
              color: input.includes("Password") ? "#FD47A1" : DefaultColor,
            }}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Chapters" placement="top" arrow="true">
        <Box>
          <ChaptersIcon
            sx={{
              width: SIZE,
              height: SIZE,
              color: input.includes("Chapters") ? "#A475FF" : DefaultColor,
            }}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Eventbrite" placement="top" arrow="true">
        <Box>
          <EventbriteIcon
            sx={{
              width: SIZE,
              height: SIZE,
              color: input.includes("Eventbrite") ? "#FD3B37" : DefaultColor,
            }}
          />
        </Box>
      </Tooltip>
    </>
  );
}
