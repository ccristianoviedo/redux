import React from 'react';
import { View, FlatList,StyleSheet} from 'react-native';
import OrderItem from '../components/orderItem';
import {ORDERS} from '../data/orders'

const OrdersScreen = () =>{
    const orders = ORDERS

    const handlerDeleteItem=()=>console.log('Eliminar demasiado');
    
    const renderCartItem = ({item}) =>(
        <OrderItem
            item={item}
            onDelete={handlerDeleteItem}
            />
    )
    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                keyExtractor={(item)=>item.id}
                renderItem={renderCartItem}
                numColumns={1}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:10,
    }
})
export default OrdersScreen;