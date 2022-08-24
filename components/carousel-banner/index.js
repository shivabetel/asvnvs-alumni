import { useNavigation } from "@react-navigation/native";
import { useCallback, useRef, useState } from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";

import { colors } from "../../styles/colors";
import Banner from "../banner";

const Circle = ({ selected }) => {
    return (
        <Pressable style={[styles.circle, selected ? styles.carouselActive : {}]}>

        </Pressable>
    )
}

const CarouselBanner = ({ items }) => {
    const flatListRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)
    const onViewRef = useRef(({ changed }) => {
        if (changed[0]?.isViewable) {
            setCurrentIndex(changed[0].index)
        }
    })
    const { navigate } = useNavigation();

    const handleBannerClick = useCallback((target) => {
        navigate(target)
    }, [navigate]);

    return (
        <View>
            <FlatList style={styles.carousel}
                    data={items}
                    renderItem={({ item }) => <Banner imageStyle={{height: 300}} banner={item} onPress={handleBannerClick}/>}
                    keyExtractor={(_, index) => index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    ref={ref => flatListRef.current = ref}
                    onViewableItemsChanged={onViewRef.current} />
                <View style={styles.dots}>
                    {
                        (items || []).map((_, index) => <Circle key={index} selected={currentIndex == index} />)
                    }
                </View>            
        </View>


    )

}

const styles = StyleSheet.create({
    carousel: {
        maxHeight: 300
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20
    },
    circle: {
        width: 10,
        height: 10,
        backgroundColor: 'grey',
        borderRadius: 50,
        marginHorizontal: 5
    },
    carouselActive: {
        backgroundColor: colors.primary700,
        width: 30
    }
})



export default CarouselBanner;