import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import ResultImc from './ResultImc';
import styles from './style'

 /* <Button onPress={validationImc} title={textButton}/> */


export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular Novamente")
            return
        } 
        setImc(null)
        setTextButton('Calcular')
        setMessageImc("Preencha o peso e a altura!")
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura:</Text>
                <TextInput style = {styles.input} value={height} onChangeText={setHeight} placeholder='Ex: 1.75' keyboardType='numeric'/>
                <Text style={styles.formLabel}>Peso:</Text>
                <TextInput  style = {styles.input} value={weight} onChangeText={setWeight} placeholder='Ex: 75.8' keyboardType='numeric'/>
               
                <TouchableOpacity style={styles.buttonCalculator} onPress={validationImc}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>  
            <ResultImc messageResultImc = {messageImc} resultImc = {imc}/>   
        </View>
    );
}