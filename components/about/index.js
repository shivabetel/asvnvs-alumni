import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import apiList from "../../api/api-list";
import transformAboutContent from "../../api/transformers/about";
import AboutPreloader from "../../preloaders/about";


import { colors } from "../../styles/colors";
import Banner from "../banner";
import DataView from "../dataview";
import Heading from "../heading";
import RichText from "../richtext";

const AboutSection = ({ showBanner = true }) => {
    return (
        <DataView
            dataURL={apiList.ABOUT}
            dataTransformer={transformAboutContent}
            preloader={<AboutPreloader />}
            style={styles.container}>
            {
                ({ content }) => {
                    return (
                        <View>
                            {showBanner && content?.bannerSection && (
                                (content?.bannerSection || []).map((content, index) => <Banner key={index} imageStyle={{ height: 200 }} banner={content?.banner} />)
                            )}
                            <ScrollView style={styles.content}>
                                {
                                    content?.contentSection && (
                                        (content?.contentSection || []).map(({ contentBlock }, index) => (
                                            <View key={index}>
                                                <View style={styles.captionContainer}>
                                                    <Image style={styles.captionIcon} source={require('../../assets/icon.png')} resizeMode="cover"/>
                                                    <Heading heading={contentBlock?.header?.title} appearance="heading-l" color={colors.primary500} />
                                                </View>
                                                <RichText appearance="text-m" text={contentBlock?.text} />
                                            </View>
                                        ))
                                    )
                                }

                            </ScrollView>
                        </View>
                    )
                }
            }

        </DataView>
    )
}


export default AboutSection;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    banner: {
        position: "fixed",
        top: 0
    },
    gradientContainer: {
        height: 300
    },
    content: {
        padding: 10
    },
    heading: {
        fontSize: 18,
        fontFamily: "opensans-extra-bold",
        paddingVertical: 10
    },
    text: {
        fontSize: 14,
        fontFamily: 'opensans-regular'
    },
    captionContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    captionIcon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10
    }
})