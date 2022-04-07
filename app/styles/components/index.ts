import {
  ThemeComponents as ThemeProps,
  ComponentMultiStyleConfig as MultiStyleConfig,
} from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import Header from "./header"

const IconButton: MultiStyleConfig = {
  parts: ["_Box"],
  baseStyle: (props) => ({
    _Box: {
      bgColor: "aquamarine",
    },
  }),
}

const Button = {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "base",
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
  },
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "purple.500",
      color: "purple.500",
    },
    solid: {
      bg: "purple.500",
      color: "white",
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
}

const Text = {
  baseStyle: {
    fontFamily: "Fira Code",
  },
}

const Heading = {
  baseStyle: {
    fontFamily: "Fira Code",
  },
}

const Input = {
  baseStyle: {
    field: {
      fontFamily: "Fira Code",
      bg: "#4b4b4f",
      borderColor: "#4b4b4f",
      borderWidth: 3,
      ":focus": {
        borderColor: "#a970ff",
        bg: "#000",
      },
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {
    variant: null,
  },
}

const components: ThemeProps = {
  IconButton,
  Header,
  Button,
  Text,
  Heading,
  Input,
}

export { components }
