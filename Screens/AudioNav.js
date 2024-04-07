import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Voice from '@react-native-voice/voice';
import LottieView from 'lottie-react-native';

export default function AudioNav() {
    const [result, setResult] = React.useState('');
    const [isRecording, setIsRecording] = React.useState(false);
    const [error, setError] = React.useState(null);

        Voice.onSpeechStart = () => setIsRecording(true);

        Voice.onSpeechEnd = () => setIsRecording(false);

        Voice.onSpeechError = err => setError(err.error);

        Voice.onSpeechResults = result => setResult(result.value[0]);


    const startRecording = async () => {
        try {
            await Voice.start('en-US');
        } catch (err) {
            setError(err);
        }
    };

    const stopRecording = async () => {
        try {
            await Voice.stop();
        } catch (error) {
            setError(error);
        }
    };

    return (
        <View>
            <View style={{ marginTop: 270, justifyContent: 'center', alignItems: 'center' }}>
                <LottieView style={{ height: 200, width: 200 }} source={require('../assets/mic_ani.json')} autoPlay loop />
                <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20 }}>Listening...</Text>
                <Text>{result}</Text>
                <Text>{error}</Text>
            </View>
        </View>
    );
}
