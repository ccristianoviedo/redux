import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet} from "react-native";
import CartItem from "../components/CartItem";
import { CART } from "../data/cart";

const CartScreen = () => {

    const items = CART
    const total = 12000

    const handlerConfirmCart =()=> console.log('confirmar carrito');
    const handlerDeleteItem=()=>console.log('Eliminar demasiado');

    const renderItem =(data)=>(
        <CartItem item={data.item} onDelete={handlerDeleteItem}/>
    )
    
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    keyExtractor={item=>item.id}
                    renderItem={renderItem}
                />            
            </View>
            <View style={styles.footer}>
                <TouchableOpacity 
                    style={styles.confirm}
                    onPress={handlerConfirmCart}
                >
                    <View style={styles.total}>
                        <Text style={styles.text}>Total</Text>
                        <Text style={styles.text}>{total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:12,
        paddingBottom:120,
    },
    list:{
        flex:1,
    },
    footer:{
        padding:12,
        borderTopColor:'#ccc',
        borderTopWidth:1,
    },
    corfirm:{
        backgroundColor:'#ccc',
        borderRadius:10,
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    total:{
        flexDirection:'row'
    },
    text:{
        fontSize:18,
        fontFamily:'UbuntuBold',
        padding:8,
    }
})
export default CartScreen;