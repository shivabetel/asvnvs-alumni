import axios from "axios";
import mapValues from "lodash/mapValues";
import apiList from "./api-list";
import { aboutpageMockApiResponse } from "./mock/about";
import { donatePageMockApiResponse } from "./mock/donate";
import { eventsPageMockApiResponse } from "./mock/events";
import { homePageMockApiRespone } from "./mock/home";

const mockEnabled = true;

const mockResponseMap = {
    [apiList.HOME]: homePageMockApiRespone,
    [apiList.ABOUT]: aboutpageMockApiResponse,
    [apiList.DONATE]: donatePageMockApiResponse,
    [apiList.EVENTS]: eventsPageMockApiResponse
}
const instance = axios.create({
    baseURL: 'http://192.168.0.103:1337'
})


const axiosInstance = Object.assign(Object.create(instance), {
    async get(...args) {
        const argsAsArr = Array.prototype.slice.call(args);
        const url = argsAsArr[0];        
        if (mockEnabled) {
            const key = Object.keys(mockResponseMap).find(key => url.includes(key))
            return key ? Promise.resolve({
                status: 200,
                data: mockResponseMap[key]
            }) : Promise.reject({
                status: 404
            })
        } else {
            return instance['get'].call(this, ...args);
        }
    }
})





export default axiosInstance;