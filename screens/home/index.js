import { useNavigation } from "@react-navigation/native";
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import apiList from "../../api/api-list";
import { transformHomeContent } from "../../api/transformers/home";
import Button from "../../components/button";
import CarouselBanner from "../../components/carousel-banner";
import DataView from "../../components/dataview";
import Heading from "../../components/heading";
import AppImage from "../../components/image";
import RichText from "../../components/richtext";
import { aboutSection } from "../../content/about";
import HomePreloader from "../../preloaders/home";
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../../styles/colors";
import AppIcon from "../../components";
import { useCallback } from "react";

const width = Dimensions.get('window')

const AboutSection = () => {
    const { navigate } = useNavigation();

    const handleReadMore = () => {
        navigate("About")
    }

    const text = aboutSection?.header?.text.substring(0, 280)
    return (
        <View>
            <Heading heading={aboutSection.header?.title} />
            <View>
                <RichText appearance="text-m" text={`${text}....`} />
                <View style={{ alignItems: 'center' }}>
                    <Button kind="secondary" title="Read more" onPress={handleReadMore} />
                </View>
            </View>
        </View>
    )
}


const Card = ({image, caption, description, target}) => {

    const { navigate } = useNavigation();

    const handleOnPress = useCallback(() => {
        console.log("target:",target)
        navigate && target && navigate(target)
    }, [target. navigate])
    return (
        <Pressable onPress={handleOnPress}>
            <View style={cardStyles.cardContainer}>
                <View>
                    {image}
                </View>
                <View style={cardStyles.content}>

                    <View>
                        <View style={cardStyles.contentHeader}>
                            <AppIcon iconName={caption?.icon?.name} color={colors.primary500} size={22} style={cardStyles.icon} />
                            <Text style={cardStyles.headerText}>{caption?.title}</Text>
                        </View>
                        <View style={cardStyles.description}>
                            <Text style={cardStyles.text}>{description}</Text>
                        </View>
                    </View>
                    <View>
                        <AntDesign name="arrowright" size={24} color={colors.primary500} />
                    </View>
                </View>
            </View>
        </Pressable>

    )

}

const cardStyles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        margin: 10,
        elevation: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    content: {
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    contentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 5
    },
    icon: {
        marginRight: 5
    },
    headerText: {
        fontFamily: 'opensans-bold',
        fontSize: 16
    }
})


const Home = () => {
    return (
        <DataView
            dataURL={apiList.HOME}
            dataTransformer={transformHomeContent}
            preloader={<HomePreloader />}
            style={styles.container}>
            {
                ({ content }) => {
                    console.log("home content::", content)
                    return (
                        <View>
                            {
                                (content?.cardsSection || []).map((cardSection, index) => (
                                    <View key={index}>
                                        {
                                            (cardSection?.cards || []).map((card, index) => (
                                                <Card
                                                    key={index}
                                                    image={<AppImage style={{ width: '100%', height: 200, borderRadius: 10 }} source={{ uri: card?.cardImage }} />}
                                                    caption={card?.caption}
                                                    description={card?.description} 
                                                    target={card?.target}/>
                                            ))
                                        }
                                    </View>

                                ))
                            }

                            {/* <ScrollView style={styles.content}>
                                <AboutSection />
                            </ScrollView> */}
                        </View>
                    )
                }


            }

        </DataView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginHorizontal: 5
    },
    content: {
        marginHorizontal: 10
    }
})

export default Home;