import {reqAddress,reqCategorys,reqShops,reqShopInfo,reqShopRatings,reqShopGoods,reqSearchShop} from '../api'
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_INFO,RECEIVE_RATINGS,RECEIVE_GOODS,FOOD_INCREMENT,FOOD_DESCREMENT,CLEAR_CART,RECEIVE_SEARCH_SHOPS} from './mutation-types'

export default {
    async getAddress({commit,state}) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        const address = result.data
        commit(RECEIVE_ADDRESS,{address})
    },
    async getCategorys({commit}) {
        const result = await reqCategorys()
        const categorys = result.data
        commit(RECEIVE_CATEGORYS,{categorys})
    },
    async getShops({commit,state}) {
        const {latitude,longitude} = state
        const result = await reqShops({latitude,longitude})
        const shops = result.data
        commit(RECEIVE_SHOPS,{shops})
    },
    async getShopInfo({commit},callback) { 
        const result = await reqShopInfo() 
        const info = result.data 
        commit(RECEIVE_INFO, {info})
        callback && callback()
    },
    async getShopRatings({commit},callback) {
        const result = await reqShopRatings() 
        const ratings = result.data 
        commit(RECEIVE_RATINGS, {ratings})
        callback && callback()
    },
    async getShopGoods({commit},callback) { 
        const result = await reqShopGoods() 
        const goods = result.data 
        commit(RECEIVE_GOODS, {goods})
        callback && callback()
    },
    updateCount({commit},{isupdate,food}) {
        if(isupdate){
            commit(FOOD_INCREMENT, {food})
        }else{
            commit(FOOD_DESCREMENT, {food})
        }   
    },
    clearCart({commit}){
        commit(CLEAR_CART)
    },
    async searchShops({commit, state}, keyword) {
        const geohash =  state.latitude+','+state.longitude
        const result = await reqSearchShop(geohash, keyword) 
        const searchShops = result.data
        commit(RECEIVE_SEARCH_SHOPS, {searchShops}) 
    },

}