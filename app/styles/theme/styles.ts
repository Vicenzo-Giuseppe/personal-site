import { mode, GlobalStyles } from "@chakra-ui/theme-tools"

export const styles: GlobalStyles = {
  global: (props) => ({
    body: {
      color: mode("#EAFF00", "white")(props),
      bg: mode("#201e23", "#white")(props),
    },
  }),
}
