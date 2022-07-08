import React, { useState, useEffect, FC } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  Dimensions
} from 'react-native';


import Congratulations from './Congratulations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import ScannedErrorResult from './ScannedErrorResult';
// import styles from './QR_CodeStyles';
import { redeemPoints, resetRedeemPoint } from '../../redux/actions/Redeem/RedeemPointsAction';
import { useDispatch, useSelector } from 'react-redux';

// const QR_CodeScanner = (props) => {

//   const [scan, setScan] = useState(false);
//   const [result, setResult] = useState();
//   const [productDescription, setProductDescription] = useState('');
//   const [serverResponseCode, setServerResponseCode] = useState('');
//   const redeemPoint = useSelector(state => state.redeemPoint);

//   const dispatch = useDispatch();

//   const onSuccess = async (e) => {
//     await setResult(e.data)
//     await setScan(false)
//   }

//   const startScan = () => {
//     setScan(true)
//     setResult();
//     setProductDescription();
//     setServerResponseCode();
//     dispatch(resetRedeemPoint());
//   };

//   useEffect(() => {
//     awsData();
//     console.log(redeemPoint.responseCode)
//   }, [awsData, result])

//   const awsData = () => {
//     if (result) {
//       dispatch(redeemPoints(result));
//     }
//   }

//   return (
//     <>
//       <SafeAreaView >
//         <View style={styles.constainer}>


//           {!result &&
//             <>
//               <View >
//                 <Text style={styles.headers}>Falcon App</Text>
//                 <Text style={styles.infoTxt}>Align the square over the QR code on your Falcon Brands product to register your purchase.</Text>
//               </View>
//               <View style={styles.body}>
//                 {!scan &&
//                   <>
//                     <View style={styles.scanButton}>
//                       <TouchableOpacity
//                         onPress={startScan}
//                       >
//                         <Text style={styles.scanButtonText}>Start Scan</Text>
//                       </TouchableOpacity>

//                     </View>
//                     <View style={styles.homeButton}>
//                       <TouchableOpacity
//                         onPress={props.backToHomeScreen}
//                       >
//                         <Text style={styles.scanButtonText}>Home</Text>
//                       </TouchableOpacity>
//                     </View>
//                   </>
//                 }
//                 {scan &&
//                   <View style={styles.sectionContainer}>
//                     <QRCodeScanner
//                       reactivate={true}
//                       showMarker={true}
//                       onRead={onSuccess}
//                       topContent={
//                         <Text style={styles.centerText}>
//                           Scan your QRCode!
//                         </Text>
//                       }
//                       bottomContent={
//                         <TouchableOpacity style={styles.buttonTouchable} onPress={() => setScan(false)}>
//                           <Text style={styles.buttonText}>Cancel Scan</Text>
//                         </TouchableOpacity>
//                       }
//                     />
//                   </View>
//                 }
//               </View>
//             </>}
//           {!scan && redeemPoint && redeemPoint.responseCode === 'E001' &&
//             <Congratulations redeemPoint={redeemPoint.data.points} productDescription={redeemPoint.data.prodDesc} startScan={startScan} backToHomeScreen={props.backToHomeScreen} />
//           }
//           {!scan && redeemPoint && redeemPoint.responseCode === 'E002' &&
//             <ScannedErrorResult title='Oops!'
//               des={`
//           This product has already been scanned.
//     Purchases may only be scanned for points once.

//                   If you feel this this is a mistake,
//                   please let us know by emailing
//                   support@falconbrands.com`}
//               startScan={startScan}
//             />
//           }
//           {!scan && redeemPoint && redeemPoint.responseCode === 'E003' &&
//             <ScannedErrorResult title='Sorry!'
//               des={`
//           The code you scanned is invalid.
//           Only Falcon Brands products are
//              eligible for reward points.

//           If you feel this this is a mistake,
//           please let us know by emailing
//           support@falconbrands.com`}
//               startScan={startScan}
//             />
//           }
//         </View>
//       </SafeAreaView>
//     </>
//   );
// };

import { BarCodeScanner } from 'expo-barcode-scanner';

const QR_CodeScanner: FC<any> = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState(`        Align the square over the QR code on your
  Falcon Brands product to register your purchase.`)
  const dispatch = useDispatch();
  const redeemPoint = useSelector(state => state.redeemPoint);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
  };

  useEffect(() => {
    awsData();

  }, [awsData, text])

  const awsData = () => {
    if (text) {
      dispatch(redeemPoints(text));
    }
  }

  const handleSearchAgain = () => {
    setScanned(false);
    dispatch(resetRedeemPoint());
    setText('');

  }
  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>
      {redeemPoint && redeemPoint.responseCode === 'E001' &&
        <Congratulations redeemPoint={redeemPoint.data.points} productDescription={redeemPoint.data.prodDesc} handleSearchAgain={handleSearchAgain} backToHomeScreen={props.backToHomeScreen} />
      }
      {redeemPoint && redeemPoint.responseCode === 'E002' &&
        <ScannedErrorResult title='Oops!'
          des={`
          This product has already been scanned.
    Purchases may only be scanned for points once.

                  If you feel this this is a mistake,
                  please let us know by emailing
                  support@falconbrands.com`}
          startScan={handleSearchAgain}
        />
      }
      {redeemPoint && redeemPoint.responseCode === 'E003' &&
        <ScannedErrorResult title='Sorry!'
          des={`
          The code you scanned is invalid.
          Only Falcon Brands products are
             eligible for reward points.

          If you feel this this is a mistake,
          please let us know by emailing
          support@falconbrands.com`}
          startScan={handleSearchAgain}
        />
      }

      {!scanned && <>
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400, width: 400 }} />
        </View>
        <Text style={styles.maintext}>{text}</Text>

        <View style={styles.btnCont}>
          <TouchableOpacity
            onPress={props.backToHomeScreen}
          >
            <Text style={styles.btnTxt1}>
              Cancel Scan
            </Text>
          </TouchableOpacity>
        </View>
      </>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },
  btnCont: {
    marginBottom: 6,
    width: 300,
    borderWidth: 2, borderRadius: 5,
    height: 50
  },
  btnTxt1: {
    color: "black", marginRight: 70, textAlign: "center",
    fontSize: 20,
    shadowOffset: { width: 56, height: 13 },
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 6,
    marginLeft: 70,
    marginTop: 10
  },
});



export default QR_CodeScanner;