import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_INFO,RECEIVE_RATINGS,RECEIVE_GOODS,FOOD_INCREMENT,FOOD_DESCREMENT,CLEAR_CART,RECEIVE_SEARCH_SHOPS} from './mutation-types'
import Vue from 'vue'
export default {
    [RECEIVE_ADDRESS](state,{address}){
        state.address = address
    },
    [RECEIVE_CATEGORYS](state,{categorys}){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state,{shops}){
        state.shops = shops
    },
    [RECEIVE_INFO](state, {info}) { 
        state.info = info 
    },
    [RECEIVE_RATINGS](state, {ratings}) { 
        state.ratings = ratings 
    },
    [RECEIVE_GOODS](state, {goods}) { 
        state.goods = goods 
    },
    [FOOD_INCREMENT](state, {food}) { 
        if(!food.count){
            Vue.set(food,'count',1) //让新增的属性也有数据绑定
            state.cartFoods.push(food)
        }else{
            food.count++
        }
    },
    [FOOD_DESCREMENT](state, {food}) { 
        if(food.count){
            food.count--
            if(food.count==0){
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
        }
    },
    [CLEAR_CART](state) { 
        state.cartFoods.forEach(food=>food.count=0)
        state.cartFoods = [] 
    },
    [RECEIVE_SEARCH_SHOPS](state, {searchShops}) { 
        state.searchShops = searchShops 
    }
}