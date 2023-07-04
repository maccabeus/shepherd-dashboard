import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { PADDING_SIDE, PADDING_TINY } from "../../../configs/StyleConstants";

export const useWelcomeWidgetStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display:" flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign:"center",
      padding:PADDING_TINY,
      width:"auto",
      marginLeft:0,
      // backgroundColor:"green"
    },
    text: {
      display:"flex",
      marginBottom:PADDING_TINY,
    },
    info: {
      display:"flex",
      flexDirection: "row",
      alignItems:"center",
      justifyContent:"flex-start",
      // backgroundColor:"yellow",
      // padding:PADDING_TINY
    },
    dot: {
      borderRadius:"100%",
      width:"5px",
      height:"5px",
      backgroundColor:"gray",
      marginLeft:5,
      marginRight:5
      
    },
    icon: {
      // maxwidth:"",
      // height:"10px",
      paddingRight:5
      
    },
    infoItem: {
      paddingRight:5
    }
  })
)