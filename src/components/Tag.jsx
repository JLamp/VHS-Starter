import styled, { ThemeProvider } from "styled-components";
import { Text as UnstyledText } from "@wistia/vhs";

const StyledTag = styled.div`
  background: ${({ theme }) => theme.background};
  color: {
    ${({ theme }) => theme.foreground}
  }
  padding: 4px 8px;
  //   border: 1px solid ${({ theme }) => theme.foreground};
  border-radius: 4px;
  width: max-content;
`;

const Text = styled(UnstyledText)`
  color: ${({ theme }) => theme.foreground};
`;

const ActiveTheme = {
  background: "#e6f9f3",
  foreground: "#025050",
};

const InactiveTheme = {
  background: "#ebebed",
  foreground: "#37373c",
};

export function Tag({ text }) {
  const THEME = text === "Active" ? ActiveTheme : InactiveTheme;
  return (
    <ThemeProvider theme={THEME}>
      <StyledTag text={text}>
        <Text variant="caption" bold={true}>
          {text}
        </Text>
      </StyledTag>
    </ThemeProvider>
  );
}
