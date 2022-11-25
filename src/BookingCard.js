import React, {Component} from 'react';
import { Text , View , Image , TouchableOpacity , ScrollView } from 'react-native';
import Logo from './Logo/nearme.png';
import Cards from './Cards';
import CardSection from './CardSection';
import jaihind from './Logo/jaihind.jpg';
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';


export default class OutletCard extends Component{
    render(){
        const { headerStyle , textStyle , imageStyle } = styles;
        return(
            <View>
                <Cards>
                    <CardSection>
                        <Image style = {imageStyle} source = {{uri:this.props.outlet.image}} />
                        <View style = {{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            paddingLeft: 5
                        }}>
                            <Text style = {{fontSize:20,
                                color:'black',
                                fontWeight:'bold'
                                }}>{this.props.outlet.outlet}</Text>
                            <Text>Date : {this.props.outlet.date}</Text>
                            <Text>Time : {this.props.outlet.time}</Text>
                        </View>
                    </CardSection>
                </Cards>
            </View>
        );
    }
}





const styles = {
    headerStyle : {border:2,
        height:50,
        backgroundColor :'#fff',
        borderColor :'black',
        shadowColor: '#000',
        shadowOffset: { width: 0 , height: 2},
        shadowOpacity: 0.9,
        shadowRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10

    },
    textStyle : {
        fontSize : 20,
        color: 'black'
    },
    imageStyle :{
        height: 60,
        width: 80,
        margin: 5
    },
    
};
