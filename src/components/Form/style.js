import reactDom from 'react-dom'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        flex:1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        paddingTop: 30,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    form: {
        width: '100%',
        height: 'auto',
        
    },
    formLabel: {
        color: '#000000',
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingTop: 12,
        paddingBottom: 12,
        marginLeft: 12,
       marginVertical: 20
    },
    textButtonCalculator: {
        fontSize: 20,
        color: '#ffffff',
    },
    errorMessage: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'red',
        paddingLeft: 20,
        fontStyle: 'italic'
    }

})

export default styles