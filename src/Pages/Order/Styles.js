import { makeStyles } from '@material-ui/styles';
import "../../Themes/Generated/variables.base.scss";
import Colors from "../../Themes/Colors"

export default makeStyles((theme) => ({
    container: {
        width: '100%'
    },
    titleChartTxt: {
        textAlign: 'left',
        [theme.breakpoints.up('sm')]: {
            fontSize: 15,
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: 11,
        },
        marginLeft: 15,
        fontWeight: 700
    },
    formContainer: {
        margin: 0,
        width: '100%',
        marginBottom: 0
    },
    titleTxt: {
        color: '#fff',
        fontSize: 18,
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
        },
    },
    titleBlackTxt: {
        color: '#000',
        fontSize: 16,
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
        },
    },
    titleBlack2Txt: {
        fontSize: 16,
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
        }
    },
    titlePrimaryTxt: {
        color: Colors.primary,
        fontSize: 20,
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
        },
    },
    titleBlack2Txt: {
        color: '#000',
        fontSize: 14,
        fontWeight: 500,
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
        },
    },
    titlePageTxt: {
        color: "#4f4f4f",
        fontWeight: 600,
        fontSize: 16,
        marginRight: 5,
        textDecoration: "none",
        textTransform: "none"
    },
    titleBlack3Txt: {
        color: '#000',
        fontSize: 14,
        marginTop: 15,
        marginLeft: 5,
        fontWeight: 500,
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
        },
    },
    titleBlack4Txt: {
        color: '#000',
        fontSize: 13,
        fontWeight: 300,
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
        },
    },
    titleBlack5Txt: {
        color: '#000',
        fontSize: 16,
        fontWeight: 500,
        marginTop: 10,
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
        },
    },
    titleBlackBoldTxt: {
        color: '#000',
        fontSize: 15,
        marginTop: 20,
        marginLeft: 5,
        fontWeight: 700,
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
        },
    },
    titleBlackBold2Txt: {
        color: '#000',
        fontSize: 13,
        fontWeight: 700,
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
        },
    },
    txtAction: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: 200,
        fontSize: 15
    },
    labelInput: {
        fontSize: 14
    },
    txtContentTable: {
        fontSize: 13
    },
    noTableTxt: {
        fontSize: 13,
        textAlign: "center"
    },
    makeOrderBtn:{
        paddingLeft:100,
        paddingRight:100,
        backgroundColor:Colors.background,
        paddingTop:10,
        textTransform:"none",
        alignSelf:"center",
        borderRadius:10,
        paddingBottom:10
    },
    titleTxt1: {
        fontSize: 17,
        marginLeft: 5,
        fontWeight: 300,
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
        },
    },
    titleTxt2: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: 300,
        color: '#000',
        [theme.breakpoints.down('sm')]: {
            fontSize: 13,
        },
    },
    cardContainer: {
        marginBottom: 10,
        border: '2px solid #d9dddc',
        textAlign: 'left',
    },
    card2Container: {
        padding: 16
    },
    cardTotalPendapatanContainer: {
        paddingTop: 35,
        height: 150
    },
    cardChipTotalContainer: {
        padding: 16,
        height: 170
    },
    card3Container: {
        marginTop: 15,
        padding: 16
    },
    statusTxt: {
        textAlign: 'right',
        marginRight: 10,
        marginTop: 3,
        textTransform: 'none',
        fontSize: 15,
    },
    status2Txt: {
        textAlign: 'center',
        color: "#fff",
        textTransform: 'none',
        fontSize: 12,
    },
    cardContentTxt: {
        fontSize: 10,
        color: '#303030',
        textTransform: 'none',
        //fontWeight: 300,
        //testing responsive
        [theme.breakpoints.down('sm')]: {
            color: 'red',
        },
    },
    formTxt: {
        width: '100%',
        marginRight: '1%',
    },
    formTxt3: {
        width: '4%',
        marginTop: 16,
        marginRight: '1%',
    },
    formSelect: {
        width: '11%',
        marginRight: '1%',
    },
    formTxt2: {
        width: '100%',
        marginTop: 16,
        marginRight: '1%',
    },
    containerBtn: {
        width: '100%',
        marginTop: 10,
    },
    containerLoader: {
        width: '100%',
        marginBottom: 100,
    },
    loader: {
        color: "#fff"
    },

    loaderScreen: {
        textAlign: 'center',
        marginTop: 180,
        color: '#689cf2',
    },
    statusAnswer: {
        paddingTop: 4,
        backgroundColor: '#dbdbdb',
        borderRadius: 3,
    },
    toolbarTxt: {
        fontSize: 12,
        fontWeight: 0,
        textTransform: 'none',
        fontFamily: 'Montserrat',
        textAlign: 'center',
    },
    inputBtn: {
        backgroundColor: Colors.background,
        textTransform: 'none',
        flexDirection: "row",
        marginTop: 15,
        height: 36
    },
    fabLeft: {
        width: 40,
        height: 40,
        paddingLeft: 4,
        position: "absolute",
        top: 270,
        [theme.breakpoints.up("md")]: {
            left: 320,
        },
        [theme.breakpoints.down("md")]: {
            left: 350
        }
    },
    fabRight: {
        width: 40,
        height: 40,
        position: "absolute",
        top: 270,
        [theme.breakpoints.up("md")]: {
            right: 60
        },
        [theme.breakpoints.down("md")]: {
            right: 350
        }
    },
    btnSearch: {
        backgroundColor: Colors.background,
        color: "#fff",
        height: 38,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        marginTop: 15
    },
    multilineColor: {
        width: "100%",
        height: 37,
        backgroundColor: "transparent",
        // borderTopRightRadius:0,
        // borderBottomRightRadius:0,
        color: '#000'
    },
    txtSearch: {
        width: "100%",
        height:37,
        backgroundColor: '#fff'
    },
    containerResponsive: {
        flex: 1,
        // paddingTop:theme.spacing(1),
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        [theme.breakpoints.up("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        },
    },
    containerResponsive2: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6)
    },
    multilineTxt: {
        fontSize: 12,
        width: 220
    },
    inputUpload: {
        display: 'none',
    },
    btnUpload: {
        flexDirection: "column",
        width: 170,
        height: 170,
        border: "1px dashed #BDBDBD",
        borderRadius: 4,
        backgroundColor: '#F2F2F2',
        textTransform: 'none',
    },
    inputTxt: {
        width: "100%",
        height: 40,
        color: '#000'
    },
    formTxt: {
        width: "100%",
    },
    cancelBtn: {
        border: `2px solid ${Colors.background}`,
        textTransform: 'none',
        backgroundColor: "transparent",
        flexDirection: "row",
        marginTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        marginRight: 5,
        borderRadius: 10,
        width: 160,
        height: 36
    },
    submitBtn: {
        backgroundColor: Colors.background,
        textTransform: 'none',
        flexDirection: "row",
        marginTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        width: 160,
        height: 36
    },
    submitBtn2: {
        backgroundColor: "#737373",
        textTransform: 'none',
        flexDirection: "row",
        marginTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        height: 36
    },
    titleCardTotalTxt: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
        color: "#828282"
    },
    contentCardTotalCenterTxt: {
        textAlign: "center",
        fontWeight: 600,
        fontSize: 40
    },
    contentCardTotalLeftTxt: {
        textAlign: "left",
        fontWeight: 600,
        fontSize: 40
    },
    contentCardTotalLeftBlackTxt: {
        textAlign: "left",
        fontWeight: 600,
        fontSize: 35
    },
    contentCardTotalLeftGreenTxt: {
        textAlign: "left",
        fontWeight: 600,
        color: "#27AE60",
        fontSize: 35
    },
    contentCardTotalLeftRedTxt: {
        textAlign: "left",
        fontWeight: 600,
        color: "#EB5757",
        fontSize: 35
    },
    detailCardTotalTxt: {
        textAlign: "center",
        fontSize: 13,
        color: "#828282"
    },
    detailCard2Txt: {
        textAlign: "left",
        fontSize: 13,
        color: "#828282"
    },
    detailCard3Txt: {
        fontSize: 13,
        marginLeft: 10,
        marginTop: 20,
        color: "#000"
    },
    blackTxt: {
        fontSize: 12,
        textTransform: "none",
        color: "#000",
        fontWeight: 600
    },
    menuTxt: {
        fontSize: 22,
        textTransform: "none",
        color: "#585858",
        fontWeight: 600
    },
    strikeThroughGrayRightTxt: {
        fontSize: 12,
        textTransform: "none",
        textDecoration: "line-through",
        color: "#BDBDBD",
        fontWeight: 600
    },
    grayTxt: {
        fontSize: 13,
        color: "#828282"
    },
    gray2Txt: {
        fontSize: 12,
        marginLeft: 11,
        color: "#8B8996",
        textTransform: "none",
        textAlign: "left"
    },
    gray3Txt: {
        fontSize: 15,
        color: "#BDBDBD"
    },
    black1Txt: {
        fontSize: 18,
        color: "#000"
    },
    // Tabs Panel
    root: {
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        },
        [theme.breakpoints.up("sm")]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4)
        },
    },
    titleTabTxt: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5vh"
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "2vh"
        },
        textTransform: "unset"
    },
    top5px: {
        marginTop: 5
    },
    top50px: {
        marginTop: 50
    },
    top45px: {
        marginTop: 45
    },
    top25px: {
        marginTop: 25
    },
    top10px: {
        marginTop: 10
    },
    left10px: {
        marginLeft: 10
    },
    left20px: {
        marginLeft: 20
    },
    spacing: {
        marginLeft: 10,
        marginTop: 6
    },
    spacing2: {
        marginLeft: 7,
        marginRight:7
    },

    spacing3: {
        marginBottom: 20,
        marginTop: 15
    },
    notActiveBtn: {
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 10,
        border: `2px solid ${Colors.primary}`,
        borderRadius: 10,
        textTransform: "none",
        backgroundColor: "transparent"
    },

    activeBtn: {
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 10,
        border: `2px solid ${Colors.primary}`,
        backgroundColor: Colors.background,
        textTransform: "none",
        borderRadius: 10,
    },
    orderPrimaryTxt: {
        color: Colors.primary,
        fontSize: 16,
    },
    orderSnowTxt: {
        color: Colors.snow,
        fontSize: 16,
    },
    containerCardMenu: {
        width: 200,
    },
    cardMenu: {
        padding: 0,
        width: "100%",
        height: 210,
        borderRadius: 10,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
    },
}));
