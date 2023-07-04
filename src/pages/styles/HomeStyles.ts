import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useHomeStyles = makeStyles((theme: Theme) =>
  createStyles({
    column: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      padding: 20,
      paddingTop:0,
      overflowY: "auto"
    }
  })
)