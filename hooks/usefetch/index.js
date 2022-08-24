import axios, { Axios } from "axios";
import { useEffect, useState } from "react"
import axiosInstance from "../../api/axiosInstance";




const useFetch = ({url, transformer, refresh}) => {
console.log("useFetch called::",refresh)
    const [content, setContent] = useState();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    useEffect(() => {
        const getData = async (source) => {
            try {
                setLoading(true)
                const { data } = await axiosInstance.get(url, {
                    cancelToken: source.token
                })
                setContent(transformer ? transformer(data) : data)
                setTimeout(() => {
                    setLoading(false)
                }, 1000)
            } catch (error) {
                setLoading(false)
                if(axios.isAxiosError(error)){
                   console.log(error);

                }
                setErrorMessage(`Something went wrong`);
            }

        }
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        getData(source);
        return () => source.cancel(`api cancelled by the user`)


    }, [url, transformer, refresh])


    return { content, loading, errorMessage }
}


export default useFetch;