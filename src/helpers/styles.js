
import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    text: {
        color: '#FFFFFF',
        fontSize: wp('1.5%')
    },

    pageContainer: {
        height: hp('90%'),
        flexDirection: 'column'
    },
    pageContainerLive: {
        backgroundColor: '#1e1e28'
    },
    pageContainerBlind: {
        backgroundColor: '#141630'
    },
    pageContainerPatch: {
        backgroundColor: '#290703'
    },
    pageContainerEdit: {
    backgroundColor: '#15152d'
    },
    height50: {
        flexBasis: '50%'
    },
    height100: {
        flexBasis: '100%'
    },
    header: {
        backgroundColor: '#15152d',
        color: 'white',
        fontSize: wp('1.8%'),
        fontWeight: 'bold'
    },
    rowHeader: {
        height: hp('10%'),
        alignItems: 'flex-end',
        borderBottomColor: '#297efd',
        borderBottomWidth: hp('0.4%'),
    },
    headerImage: {
        maxHeight: '90%',
        maxWidth: '100%',
        padding: hp('0.5%'),
        margin: hp('0.25%'),
        alignSelf: 'center',
        resizeMode: 'contain'
        
    },
    p0: {
        padding: 0
    },
    appNav: {
        flexDirection: 'row',
    },
    row_single_remote: {
        height: hp('9.9%')
    },
    row_double_remote: {
        height: hp('19.8%')
    },
    row_half_remote: {
        height: hp('4.8%')
    },

    row_half_focus: {
        height: hp('4.5%')
    },
    row_single_focus: {
        height: hp('9.3%')
    },
    row_double_focus: {
        height: hp('18.6')
    },
    row_half_facepanel: {
        height: hp('4.43')
    },
    row_single_facepanel: {
        height: hp('8.86')
    },
    row_double_facepanel: {
        height: hp('17.71')
    },
    row_single_ds: {
        height: hp('9.18')
    },
    row_double_ds: {
        height: hp('18.39')
    },
    row_half_ds: {
        height: hp('4.51')
    },


    row_half_playback: {
        height: hp('4.92')
    },
    row_single_playback: {
        height: hp('9.84')
    },
    row_top_playback: {
        height: hp('12.3')
    },
    row_double_playback: {
        height: hp('19.68')
    },
    row_fader_playback: {
        height: hp('39.36')
    },


    enc_col: {
        width: '20.833333%'
    },
    enc_row_focus: {
        height: '41%'
    },


    row_single_encoder: {
        flexBasis: '12.2%'
    },

    row_layout_encoder: {
        flexBasis: '9.5%'
    },

    row_half_encoder: {
        flexBasis: '4.55%'
    },

    enc_row_encoder: {
        height: '87.8%'
    },


    enc_col_encoder: {
        width: wp('22.8%')
    },
   

    faderContainer: {
        width: '100%',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#15152d',
    },

    faderHandle: {
        alignSelf: 'center',
        resizeMode: 'contain'
    },

    faderPercentageContainer: {
        width: "100%",
        height: "100%",
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },

    faderPercentageText: {
        fontSize: wp('1.8%'),
        fontWeight: "bold",
        textAlign: 'center',
        color: '#ffffff'
    },
    faderPageLabel: {
        fontSize: wp('1.8%'),
        fontWeight: "bold",
        textAlign: 'center',
        color: '#ffffff',
        width: '100%',
    },


    oscLogCont: {
        height: '100%',
        width: '100%',
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: 'black',
        padding: 4,
        marginLeft: 4
    },
    oscLog: {

    },
    oscLogText: {
        color: '#ffffff',
        fontSize: wp('2.8%'),
    },
    

    /* BUTTONS */
    btn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderWidth: hp('0.18%'),
        borderRadius: hp('0.5%'),
        padding: hp('0.35%')
    },
    btnText: {
        fontSize: wp('1.4%'),
        textAlign: 'center'
    },
    labeltext: {
        color: '#FFFFFF'
    },
    btnlabel: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      /*  width: '100%',
        height: '100%' */
    },

    /* style 1 - RED */
    btn1: {
        borderColor: '#c61c00',
        backgroundColor: '#290703'
    },
    btn1Text: {
        color: '#cccccc'
    },
    btn1Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#290703'
    },
    btn1TextPressed: {
        color: '#eaa906'
    },
    btn1Latched: {
        borderColor: '#c61c00',
        backgroundColor: '#480600'
    },
    btn1TextLatched: {
        color: '#c11d1d'
    },
    /* style 2 - ORANGE */
    btn2: {
        borderColor: '#eb750d',
        backgroundColor: '#2d0f00'
    },
    btn2Text: {
        color: '#cccccc'
    },
    btn2Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#2d0f00'
    },
    btn2TextPressed: {
        color: '#eaa906'
    },
    btn2Latched: {
        borderColor: '#eb750d',
        backgroundColor: '#732600'
    },
    btn2TextLatched: {
        color: '#c11d1d'
    },
    /* style 3 - YELLOW */
    btn3: {
        borderColor: '#eaa906',
        backgroundColor: '#2e2405'
    },
    btn3Text: {
        color: '#cccccc'
    },
    btn3Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#2e2405'
    },
    btn3TextPressed: {
        color: '#eaa906'
    },
    btn3Latched: {
        borderColor: '#eaa906',
        backgroundColor: '#583800'
    },
    btn3TextLatched: {
        color: '#eaa906'
    },

    /* style 4 - GREEN */
    btn4: {
        borderColor: '#49bb11',
        backgroundColor: '#0a1704'
    },
    btn4Text: {
        color: '#cccccc'
    },
    btn4Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#0a1704'
    },
    btn4TextPressed: {
        color: '#eaa906'
    },
    btn4Latched: {
        borderColor: '#49bb11',
        backgroundColor: '#143b06'
    },
    btn4TextLatched: {
        color: '#49bb11'
    },

    /* style 5 */
    btn5: {
        borderColor: '#07bbff',
        backgroundColor: '#0d2130'
    },
    btn5Text: {
        color: '#cccccc'
    },
    btn5Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#0d2130'
    },
    btn5TextPressed: {
        color: '#eaa906'
    },
    btn5Latched: {
        borderColor: '#07bbff',
        backgroundColor: '#004a51'
    },
    btn5TextLatched: {
        color: '#07bbff'
    },

    /* style 6 - CYAN */
    btn6: {
        borderColor: '#299cd1',
        backgroundColor: '#111922'
    },
    btn6Text: {
        color: '#cccccc'
    },
    btn6Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#111922'
    },
    btn6TextPressed: {
        color: '#eaa906'
    },
    btn6Latched: {
        borderColor: '#299cd1',
        backgroundColor: '#0a2d4e'
    },
    btn6TextLatched: {
        color: '#299cd1'
    },

    /* style 7 - LT BLUE */
    btn7: {
        borderColor: '#4b5cb0',
        backgroundColor: '#141630'
    },
    btn7Text: {
        color: '#cccccc'
    },
    btn7Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#141630'
    },
    btn7TextPressed: {
        color: '#eaa906'
    },
    btn7Latched: {
        borderColor: '#071a5a',
        backgroundColor: '#4b5cb0'
    },
    btn7TextLatched: {
        color: '#8397ff'
    },

    /* style 8 - BLUE*/
    btn8: {
        borderColor: '#6aa6ff',
        backgroundColor: '#090922'
    },
    btn8Text: {
        color: '#cccccc'
    },
    btn8Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#090922'
    },
    btn8TextPressed: {
        color: '#eaa906'
    },
    btn8Latched: {
        borderColor: '#6aa6ff',
        backgroundColor: '#000044'
    },
    btn8TextLatched: {
        color: '#6aa6ff'
    },

    /* style 9 - PURPLE */
    btn9: {
        borderColor: '#a665ff',
        backgroundColor: '#1a0420'
    },
    btn9Text: {
        color: '#cccccc'
    },
    btn9Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#1a0420'
    },
    btn9TextPressed: {
        color: '#eaa906'
    },
    btn9Latched: {
        borderColor: '#a665ff',
        backgroundColor: '#420b51'
    },
    btn9TextLatched: {
        color: '#a665ff'
    },

    /* style 10 - MAG */
    btn10: {
        borderColor: '#c318b0',
        backgroundColor: '#1b031a'
    },
    btn10Text: {
        color: '#cccccc'
    },
    btn10Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#1b031a'
    },
    btn10TextPressed: {
        color: '#eaa906'
    },
    btn10Latched: {
        borderColor: '#c318b0',
        backgroundColor: '#460043'
    },
    btn10TextLatched: {
        color: '#c318b0'
    },

    /* style 11 - BLACK */
    btn11: {
        borderColor: '#cccccc',
        backgroundColor: '#111111'
    },
    btn11Text: {
        color: '#cccccc'
    },
    btn11Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#111111'
    },
    btn11TextPressed: {
        color: '#eaa906'
    },
    btn11Latched: {
        borderColor: '#ffffff',
        backgroundColor: '#202020'
    },
    btn11TextLatched: {
        color: '#ffffff'
    },

    /* style 12 - GREY */
    btn12: {
        borderColor: '#bababa',
        backgroundColor: '#28282e'
    },
    btn12Text: {
        color: '#cccccc'
    },
    btn12Pressed: {
        borderColor: '#eaa906',
        backgroundColor: '#28282e'
    },
    btn12TextPressed: {
        color: '#eaa906'
    },
    btn12Latched: {
        borderColor: '#bababa',
        backgroundColor: '#4d4d51'
    },
    btn12TextLatched: {
        color: '#bababa'
    },

    /* INFO PANELS */
    info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderWidth: hp('0.3%'),
        paddingLeft: wp('0.2%')
    },
    infoText: {
        fontSize: wp('1.4%')
    },
    info1: {
        borderColor: '#c61c00',
        backgroundColor: '#000000'
    },
    info1Text: {
        color: '#cccccc'
    },
    info3: {
        borderColor: '#eaa906',
        backgroundColor: '#000000'
    },
    info3Text: {
        color: '#cccccc'
    },
    infoBlind: {
        borderColor: '#4b5cb0',
        backgroundColor: '#141630' 
    },
    infoPatch: {
        borderColor: '#dd0000',
        backgroundColor: '#290703'
    },



    qListContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderWidth: 2,
        borderColor: '#4b5cb0',
    },
    qListCurrentContainer: {
        display: 'flex',
        width: '100%',
        height: '50%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#000000',
        padding: 10
    },
    qListPendingContainer: {
        display: 'flex',
        width: '100%',
        height: '50%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10
    },
    qListCurrentLabel: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    qListPendingLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#aaaaaa'
    },
    qListCurrentTime: {
        fontSize: 16,
        color: '#cccccc'
    },
    qListPendingTime: {
        fontSize: 16,
        color: '#aaaaaa'
    },

    showNameView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    showNameText: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    showNameText_Alert: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff0000'
    },

    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#15152dcc',
    },

    modalContainer: {
        backgroundColor: '#00000099',
        borderColor: '#297efd',
        borderWidth: 2,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    w80: {
        width: '80%'
    },

    w10: {
        width: '10%'
    },

    h100: {
        height: '100%'
    },
    h50: {
        height: '50%'
    },
    h25: {
        height: '25%'
    },
    h20: {
        height: '20%'
    },
    h80: {
        height: '80%'
    },
    h10: {
        height: '10%'
    },
    h90: {
        height: '90%'
    },


    /* LAYOUTS AND MENUS */
    layoutMenu: {
        height: hp('82%'),
        bottom: hp('7%'),
        width: wp('20%'),
        borderColor: "#aaaaaa", 
        borderWidth: hp('0.3%'), 
        backgroundColor: '#333333',
        flexDirection: 'column',
        justifyContent: 'space-evenly'

    },
    layoutSaveMenu: {
        position: 'absolute', 
        left: wp('10%'),
        padding: hp('0.6%')
    },
    layoutLabelMenu: {
        position: 'absolute',
        left: wp('20%'),
        padding: hp('0.6%')
    },
    layoutDeleteMenu: {
        position: 'absolute',
        left: wp('30%'),
        padding: hp('0.6%')
    },
    row_single_layouts: {
        height: hp('9.3%')
    },
    layoutBtnActive: {
        borderColor: '#ffffff99',
        backgroundColor: '#58585e'
    },



    /* BOOTSTRAP FOR DUMMIES */
    row: {
        flexbasis: 1,
        flexDirection: 'row'
    },
    col: {
        height: '100%',
        padding: hp('0.3%')
    },
    col1: {
        width: '8.3333333%',
    },
    colds5: {
        width: '14.2857143%',
    },
    coldsSelect: {
        width: '12.5%',
    },
    col2: {
        width: '16.666666%',
    },
    col3: {
        width: '25%',
    },
    col4: {
        width: '33.33333333%',
    },
    col5: {
        width: '41.666666667%',
    },
    col6: {
        width: '50%'
    },
    col7: {
        width: '58.3333333%',
    },
    col8: {
        width: '66.666666%',
    },
    col9: {
        width: '75%',
    },
    col10: {
        width: '83.33333333%',
    },
    col11: {
        width: '91.666666667%',
    },
    col12: {
        width: '100%'
    },
});

export default styles;
