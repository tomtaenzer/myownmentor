import {createMuiTheme} from "@material-ui/core";

const myMentorTheme = createMuiTheme({


    palette: {
        primary:
            {
                main: "#5e7ea2",
                light: "rgba(94,126,162,0.7)" // grey blue
            },
        secondary:
            {
                main: "#7399c5",
                light: "rgba(115,153,197,0.7)"// light blue
            },
    },  info:
            {
                main: "#747474",
                light: "rgba(116,116,116,0.7)"
            }

});

export default myMentorTheme;