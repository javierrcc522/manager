import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
<<<<<<< HEAD
=======
    //primitive tags like view or text can be overrident from left to right. left begin default right is the better option
>>>>>>> bec208d01272527e2c0db9f2f442e56082c300e5
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};


export { CardSection };
