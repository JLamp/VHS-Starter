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

const AssignIcon = (input) => {
  const SIZE = 16;
  var icon;
  switch (input) {
    case "Accessibility":
      icon = <AccessibilityIcon sx={{ height: SIZE, width: SIZE }} />;
      break;
    case "Appearance":
      icon = <AppearanceIcon sx={{ height: SIZE, width: SIZE }} />;
      break;
    case "Annotation Links":
      icon = <AnnotationIcon sx={{ height: SIZE, width: SIZE }} />;
      break;
    case "Audio Descriptions":
      icon = <AudioDescriptionIcon sx={{ height: SIZE, width: SIZE }} />;
      break;
    case "Call to Action":
      icon = <CallToActionIcon sx={{ height: SIZE, width: SIZE }} />;
      break;
    case "Captions":
      icon = <CaptionsIcon sx={{ height: SIZE, width: SIZE }} />;
      break;
    case "Chapters":
      icon = <ChaptersIcon sx={{ height: SIZE, width: SIZE }} />;
      break;
    case "Controls":
      icon = <ControlsIcon sx={{ height: SIZE, width: SIZE }} />;
      break;
    case "Eventbrite":
      icon = <EventbriteIcon sx={{ height: SIZE, width: SIZE }} />;
      break;
    case "Password":
      icon = <PasswordIcon sx={{ height: SIZE, width: SIZE }} />;
      break;
    case "Share":
      icon = <ShareIcon sx={{ height: SIZE, width: SIZE }} />;
      break;
    case "Thumbnail":
      icon = <ThumbnailIcon sx={{ height: SIZE, width: SIZE }} />;
      break;
    case "Transcript":
      icon = <TranscriptIcon sx={{ height: SIZE, width: SIZE }} />;
      break;
    case "Turnstile":
      icon = <TurnstileIcon sx={{ height: SIZE, width: SIZE }} />;
      break;
    default:
      icon = input;
  }
  return icon;
};

export function MakeIcon({ input }) {
  const Icon = AssignIcon(input);
  return <>{Icon}</>;
}
