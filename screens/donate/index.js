import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Heading from "../../components/heading";

import apiList from "../../api/api-list";
import Banner from "../../components/banner";
import DataView from "../../components/dataview";
import RichText from "../../components/richtext";
import { colors } from "../../styles/colors";
import transformDonatePageContent from "../../api/transformers/donate";
import DonatePreloader from "../../preloaders/donate";
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 




const Donate = () => {
    return (

        <DataView
            dataURL={apiList.DONATE}
            dataTransformer={transformDonatePageContent}
            preloader={<DonatePreloader />}
            style={styles.container}>
            {
                ({ content }) => {
                    return (
                        <View>
                            {/* <LinearGradient style={styles.flexGrow} colors={[colors.linearGradientColor100, colors.linearGradientColor200]}> */}
                            <ImageBackground
                                source={{
                                    uri: content?.backgroundImage[0]?.image?.url
                                }}
                                resizeMode="cover"
                                imageStyle={styles.backgroundImage}
                                style={styles.flexGrow}>
                                <View style={styles.banner}>
                                    <View style={styles.bannerTextContainer}>
                                    </View>
                                </View>
                                {
                                    content?.bannerSection?.length > 0 && content?.bannerSection.map((content, index) => <Banner key={index} imageStyle={{ height: 200 }} banner={content?.banner} />)
                                }
                                {
                                    content?.contentSection?.length > 0 && content?.contentSection.map((content, index) => (
                                        <View key={index} style={styles.content}>
                                            <View>
                                                <View style={styles.captionContainer}>
                                                    <FontAwesome style={styles.captionIcon} name="bank" size={18} color={colors.primary500} />
                                                    <Heading heading={content?.header.title} />
                                                </View>
                                                <RichText text={content?.header.description} appearance="text-s-bold" />
                                            </View>
                                            <View style={styles.listContainer}>
                                                {
                                                    content?.accounts?.length > 0 && content?.accounts.map(({ label, value }, index) => (
                                                        <View key={index} style={styles.listItem}>
                                                            <Text style={styles.title}>{label}</Text>
                                                            <Text style={styles.text}>{value}</Text>
                                                        </View>
                                                    ))


                                                }
                                            </View>


                                            <View style={styles.noteContainer}>
                                                <Octicons style={styles.footerCaptionIcon} name="note" size={24} color={colors.primary500} />
                                                <RichText text={content?.footer.text} appearance="text-m-bold" />
                                            </View>
                                        </View>
                                    ))
                                }


                            </ImageBackground>
                            {/* </LinearGradient> */}
                        </View>
                    )
                }
            }
        </DataView>

    )
}

const styles = StyleSheet.create({
    flexGrow: {
        flex: 1
    },
    backgroundImage: {
        opacity: 0.15
    },
    container: {
        flex: 1,
        // marginHorizontal: 5
    },
    heading: {
        fontSize: 18,
        fontFamily: "opensans-extra-bold",
        paddingVertical: 10
    },
    headingDescription: {
        paddingBottom: 10,
        fontFamily: 'opensans-medium'
    },
    text: {
        fontSize: 14,

        // letterSpacing: 2
    },
    gradientContainer: {
        borderRadius: 10,
        flex: 1

    },
    banner: {
        position: "relative"
    },
    content: {
        flex: 1,
        //justifyContent: 'center',
        margin: 10
    },
    bannerTextContainer: {
        position: 'absolute',
        // flex: 1,
        width: '100%',
        alignItems: 'center',
        top: '30%',
        //left: '50%',
        //right: '25%'
    },
    bannerHeaderText: {
        fontSize: 38,
        color: colors.white
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        // borderBottomWidth: 1,
        paddingVertical: 10,
    },
    title: {
        flex: 1,
        fontFamily: 'opensans-bold',
        color: colors.primary500,
        fontSize: 18,
    },
    text: {
        fontFamily: 'opensans-bold',
        color: colors.primary500,
        fontSize: 16
    },
    listContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: colors.primary500,
        //elevation: 10,
        borderRadius: 10,
        shadowColor: colors.white,
        shadowOpacity: 0.15,
        shadowRadius: 10,
        marginBottom: 10
    },
    noteContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    noteText: {
        fontSize: 16,
        fontFamily: 'opensans-bold'
    },
    captionContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    captionIcon: {
        marginRight: 5
    },
    footerCaptionIcon: {
        marginRight: 10
    }
})

export default Donate;