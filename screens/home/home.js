import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";

import apiList from "../../api/api-list";
import { transformHomeContent } from "../../api/transformers/home";
import Button from "../../components/button";
import CarouselBanner from "../../components/carousel-banner";
import DataView from "../../components/dataview";
import Heading from "../../components/heading";
import RichText from "../../components/richtext";
import { aboutSection } from "../../content/about";
import HomePreloader from "../../preloaders/home";

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


const Home = () => {
    return (
        <DataView
            dataURL={apiList.HOME}
            dataTransformer={transformHomeContent}
            preloader={<HomePreloader />}
            style={styles.container}>
            {
                ({ content }) => {
                    console.log("home content::",content)
                    return (
                        <View>
                            {
                                (content?.carouselBannerSection || []).map((carouselSection, index) => <CarouselBanner key={index} items={carouselSection?.carouselBanners} />)
                            }

                            <ScrollView style={styles.content}>
                                <AboutSection />
                            </ScrollView>
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