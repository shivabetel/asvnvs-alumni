import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import axiosInstance from "../../api/axiosInstance"

const DataView = ({ dataURL, dataTransformer, preloader, children, style}) => {
    const [content, setContent] = useState();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const ref = useRef()

    const getData = async ( source) => {
        try {
            setLoading(true)
            const { data } = await axiosInstance.get(dataURL, source && {
                cancelToken: source.token
            })
            setContent(dataTransformer ? dataTransformer(data) : data)
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        } catch (error) {
            setLoading(false)
            if (axios.isAxiosError(error)) {
                console.log(error);

            }
            setErrorMessage(`Something went wrong`);
        }

    }

    useEffect(() => {
        console.log("data view useffect");
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        getData(source);
        return () => source.cancel(`api cancelled by the user`)

    }, [dataURL, dataTransformer])

    // useEffect(() => {
    //     ref.current?.scrollTo({
    //         y: 0,
    //         animated: true,
    //       });
    // })
    const handleOnRefresh = () => {
        getData();
    }

    if(loading)
      return preloader

    return (
        <ScrollView 
        ref={ref}
        refreshControl={<RefreshControl onRefresh={handleOnRefresh}/>}
        style={style}>
            { children({content, errorMessage}) }
            
        </ScrollView>
    )
}

export default DataView;