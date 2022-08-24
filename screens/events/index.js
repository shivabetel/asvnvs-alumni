import { Entypo, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import randomColor from "randomcolor";
import { useRef, useState } from "react";
import { Dimensions, FlatList, Image, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

import apiList from "../../api/api-list";
import transformEventsContent from "../../api/transformers/events";
import DataView from "../../components/dataview";
import AppImage from '../../components/image';
import EventsPreloader from "../../preloaders/events";
import { colors } from "../../styles/colors";

const { width } = Dimensions.get('window')
const height = width * 100 / 60

randomColor({
    luminosity: 'dark'
});


const Circle = ({ active }) => {
    return <View style={[styles.circle, active ? styles.active : '']}></View>
}


const ImageViewModal = ({
    handleOnClose,
    images = []
}) => {
    return (


        <Modal visible={true}
            animationType="slide"
            transparent
            onRequestClose={handleOnClose}
            style={{flex: 1, justifyContent: 'flex-end', alignItems:'center', backgroundColor: 'black'}}
        >
            <SafeAreaView style={{ width, height, flex: 1 }}>
                <Pressable  onPress={handleOnClose}>
                    <Ionicons name="arrow-back" size={24} color={colors.white} />
                </Pressable>
                <ScrollView
                    centerContent
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    pagingEnabled
                    style={{ width, height, backgroundColor: 'black' }}
                >
                    {
                        (images || []).map(image => <AppImage style={{ width, height, backgroundColor: 'black' }} source={{ uri: image?.url }} resizeMode="contain" />)
                    }
                </ScrollView>
            </SafeAreaView>

        </Modal>
    )
}

const CarouselImages = ({ images = [] }) => {
    const flatListRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)
    const onViewRef = useRef(({ changed }) => {
        changed[0]?.isViewable && setCurrentIndex(changed[0].index)
    })
    const [showModal, setShowModal] = useState(false)

    const handleOnPress = () => {
        console.log("handleOnPress:",handleOnPress)
        setShowModal(true)
    }
    return (
        <View>
            <FlatList style={styles.carousel}
                data={images}
                renderItem={({ item }) => (
                    <Pressable onPress={handleOnPress}>
                        <AppImage style={styles.image} source={{
                            uri: item.url
                        }}
                            resizeMode="cover" />
                    </Pressable>
                )}
                keyExtractor={(_, index) => index}
                horizontal
                showsHorizontalScrollIndicator={true}
                pagingEnabled
                ref={ref => flatListRef.current = ref}
                onViewableItemsChanged={onViewRef.current}
            />
            <View style={styles.carouselPagination}>
                {
                    images.map((_, index) => <Circle key={index} active={index == currentIndex} />)
                }
            </View>
            {
                showModal && <ImageViewModal handleOnClose={() => setShowModal(false)} images={images} />
            }
        </View>

    )
}

const Events = () => {

    return (
        <DataView
            dataURL={apiList.EVENTS}
            dataTransformer={transformEventsContent}
            preloader={<EventsPreloader />}
            style={styles.container}>
            {
                ({ content }) => (
                    <View>

                        <View>
                            {
                                content?.upcomingEventsSection?.length > 0 && (
                                    <View>
                                        <View style={styles.bannerTextContainer}>
                                            <View style={styles.bannerTextRowContainer}>
                                                <MaterialIcons name="event" size={24} color={colors.primary500} style={styles.bannerIcon} />
                                                <Text style={styles.bannerHeaderText}>7ನೇ ಸ್ನೇಹ ಸಮ್ಮಿಲನ ಕಾರ್ಯಕ್ರಮ</Text>
                                            </View>
                                            <View style={styles.bannerTextRowContainer}>
                                                <Fontisto style={styles.bannerIcon} name="date" size={24} color={colors.primary500} />
                                                <Text style={styles.bannerText}>11-09-2022 ಬೆಳಗ್ಗೆ 10.00 ಗಂಟೆಗೆ</Text>
                                            </View>
                                            <View style={styles.bannerTextRowContainer}>
                                                <Entypo style={styles.bannerIcon} name="location" size={24} color={colors.primary500} />
                                                <Text style={styles.bannerText}>ಗಾಂಧಿ ಬಜಾರ್ ಶ್ರೀ ನಗರೇಶ್ವರ ಸ್ವಾಮಿ ಕಲ್ಯಾಣ ಮಂಟಪ</Text>
                                            </View>
                                        </View>
                                        <View>
                                            {
                                                content?.upcomingEventsSection.map((upcomingEvent, index) => <AppImage key={index} resizeMode="cover" style={{ width: '100%', height: 300 }} source={{ uri: upcomingEvent?.banner?.bannerImage }} />)
                                            }
                                        </View>
                                    </View>

                                )

                            }
                        </View>
                        <View style={styles.pastEventsContainer}>
                            <View style={styles.eventsTitleContainer}>
                                <MaterialIcons name="event" size={20} color={colors.primary500} style={styles.titleIcon} />
                                <Text style={styles.title}>ARCHIVES</Text>
                            </View>
                            {
                                content?.pastEventsSection?.length > 0 && (
                                    content?.pastEventsSection.map(eventsContent => {
                                        return (eventsContent?.eventsBlock || []).map((event, index) => {
                                            return (
                                                <View key={index}>
                                                    <View style={[styles.header]}>
                                                        <View style={[styles.caption, {
                                                            backgroundColor: randomColor({
                                                                luminosity: 'dark'
                                                            })
                                                        }]}>
                                                            <Text style={styles.captionText}>{event?.header?.title?.substr(0, 1)}</Text>
                                                        </View>
                                                        <Text style={styles.headerText}>{event?.header?.title}</Text>
                                                    </View>
                                                    <CarouselImages images={event?.images} />
                                                    <View style={styles.footer}>
                                                        {/* <Text style={styles.headerText}>{event?.footer?.title}</Text> */}
                                                        <Text style={styles.footerText}>{event?.footer?.text}</Text>
                                                    </View>
                                                </View>


                                            )
                                        })
                                    })
                                )
                            }
                        </View>
                    </View>
                )
            }
        </DataView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20
        // marginHorizontal: 5
    },
    eventContainer: {
    },
    image: {
        width,
        height: 250
    },
    carousel: {
        maxHeight: 250,
    },
    header: {
        marginVertical: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontFamily: 'opensans-bold',
        fontSize: 18,
        color: colors.primary500,
    },
    circle: {
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#c7c7c7',
        marginRight: 5
    },
    active: {
        backgroundColor: colors.primary500
    },
    carouselPagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10
    },
    footer: {
        paddingLeft: 20
    },
    footerText: {
        fontSize: 16,
        fontFamily: 'opensans-regular'
    },
    caption: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    captionText: {
        fontSize: 18,
        fontFamily: 'opensans-bold',
        color: colors.white
    },
    eventsTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        // borderBottomWidth: 1,
        // borderBottomColor: colors.primary500
    },
    title: {
        fontFamily: 'opensans-bold',
        fontSize: 18,
        color: colors.primary500
    },
    titleIcon: {
        marginRight: 10
    },
    bannerTextContainer: {
        position: 'absolute',
        top: 10,
        zIndex: 100,
        paddingHorizontal: 10
    },
    bannerTextRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5
    },
    bannerText: {
        width: 180,
        fontSize: 16,
        fontFamily: 'opensans-bold',
        color: colors.primary500
    },
    bannerHeaderText: {
        fontSize: 16,
        fontFamily: 'opensans-bold',
        color: colors.primary500
    },
    bannerIcon: {
        marginRight: 10
    }
})

export default Events;