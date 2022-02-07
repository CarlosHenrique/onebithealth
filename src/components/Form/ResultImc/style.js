import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  
    resultImc:{
        flex: 1,
        marginTop: 20,
        paddingTop: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    numberImc:{
        fontSize: 38,
        color: '#ff0043',
        fontWeight: 'bold'
    }
    ,
    information:{
        fontSize: 18,
        color: '#ff0043',
        fontWeight: 'bold'
    }
    ,
    boxShareButton: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10
    },
    shared: {
        backgroundColor: "#1877f2",
        borderRadius: 10,
        paddingBottom: 5,
        paddingTop: 5,
    },
    sharedText: {
        color: '#ffff',
        fontWeight:'bold',
        paddingHorizontal: 40,
    }
})

export default styles