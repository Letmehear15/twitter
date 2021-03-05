import { makeStyles, Theme } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'

export const useHomeStyles = makeStyles((theme:Theme) => ({
    wrapper:{
        paddingTop:"15px"
    },
    menuList: {
        listStyle:'none',
        margin: 0,
        padding: 0,
    },
    menuItem: {
        display:'flex',
        alignItems: 'center',
        marginBottom: '15px',
        cursor:"pointer",
        borderRadius: 20,
        "& div": {
            display: 'flex',
            alignItems: 'center',
            height: 45,
            padding: '0 15px'
        },
        "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: 'rgba(29, 161, 242, .1)',
            transition: 'all .3s'
        },
        "& p": {
            fontSize: '17px',
            fontWeight: 700
        }
    },
    menuIcon: {
        marginRight: theme.spacing(2),
        fontSize:30
    },
    mainHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: 12,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderRadius:'0',
        "& h6": {
            fontWeight:800
        }
    },
    mainWrapper: {
        borderRadius:'0',
        borderBottom: 'none',
    },
    tweetWrapper: {
        textDecoration: 'none',
        color: 'inherit'
        
    },
    tweet: {
        padding: theme.spacing(1),
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        "&:hover": {
            backgroundColor: "#E6ECF0",
            cursor: 'pointer'
        }
    },
    tweetHeader: {
        "& span": {
            color: grey[500]
        }
    },
    tweetButtonWrapper: {
        display:'flex',
        justifyContent:'space-between',
        paddingLeft: 0,
        position: "relative",
        left: -10,
        marginTop: 10
    },
    tweetButon: {
        display:'flex',
        alignItems: 'center'
    },
    tweetButtonCount: {
        color: grey[500],
        fontSize: '19px',
    },
    progressCircular: {
        margin: '0 10px',        
    },
    rightSide: {
        position: 'sticky',
        top: 12,
    },    
    rightSideTrendsWrapper: {
        marginTop: 10,
        backgroundColor: 'rgba(237, 242, 245, .6)',
        padding: theme.spacing(1),
        border: 'none',
        borderRadius: 10,
        "& h6": {
            fontWeight:800
        },
        "& a": {
            textDecoration: 'none',
            color: 'inherit'
        }
    },
    rightSideTrend: {
        borderTop: '1px solid #E6ECF0',
        backgroundColor: 'rgba(237, 242, 245, .6)',
        padding: '10px 0',
        "&:hover": {
            backgroundColor: 'rgba(237, 242, 245, .1)',
            cursor: 'pointer'
        },
    },
    trendHead: {
        color: grey[500]
    },
    trendHashtag: {
        display: 'block',
        marginTop: 5,
        fontWeight: 800,
        fontSize: 18
    },
    trendCountOfPeople: {
        display: 'block',
        marginTop: 5,
        color: grey[500]
    },
    newTweetForm: {
        padding: theme.spacing(1)
    },
    newTweetHeader: {
        display:'flex',
        alignItems: 'flex-start'
    },
    newTweetText: {
        resize: 'none',
        marginLeft: theme.spacing(2),
        border: 'none',
        fontSize: '17px',
        width: '70%',
        outline: 'none'
    },
    newTweetButtons: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        marginLeft: theme.spacing(5),
    },
    loadCenter: {
        textAlign:'center',
        marginTop: 20,
    }
}))