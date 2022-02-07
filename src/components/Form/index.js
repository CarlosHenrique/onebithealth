import React, {
    useState
} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Share,
    Keyboard,
    Pressable
} from 'react-native';
import ResultImc from './ResultImc';
import styles from './style'


 /* <Button onPress={validationImc} title={textButton}/> */


export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)




    function imcCalculator() {
        let heightFormat = height.replace(",",".")
        return setImc((weight / (heightFormat * heightFormat)).toFixed(2))
    }

    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage("*Campo obrigatório*")
        }

    }

    

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return
        }
        verificationImc()
        setImc(null)
        setTextButton('Calcular')
        setMessageImc("Preencha o peso e a altura!")

    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura:</Text>

                <TextInput style={styles.input} value={height} onChangeText={setHeight} placeholder='Ex: 1.75' keyboardType='numeric' />
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <Text style={styles.formLabel}>Peso:</Text>

                <TextInput style={styles.input} value={weight} onChangeText={setWeight} placeholder='Ex: 75.8' keyboardType='numeric' />
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TouchableOpacity style={styles.buttonCalculator} onPress={validationImc}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </Pressable>
    );
}