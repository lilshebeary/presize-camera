import React from 'react';
import { Platform } from 'react-native';
import { RNCamera } from 'react-native-camera';

const DESIRED_RATIO = "2:3";

class CameraComponent extends Component {
    state = {}

    prepareRatio = async () => {
        if (Platform.OS === 'ios' && this.cam) {
             const ratios = await this.cam.getSupportedRatiosAsync();

             // See if the current device has your desired ratio, otherwise get the maximum supported one
             // Usually the last element of "ratios" is the maximum supported ratio
             const ratio = ratios.find((ratio) => ratio === DESIRED_RATIO) || ratios[ratios.length - 1];
             
             this.setState({ ratio });
        }
    }

    render() {
        return (
            <RNCamera
                ref={(cam) => this.cam = cam}
                onCameraReady={this.prepareRatio} // You can only get the supported ratios when the camera is mounted
                ratio={this.state.ratio}
            />
        );
}