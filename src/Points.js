import React, {Component} from 'react';
import { Text , View  , Image , TouchableOpacity } from 'react-native';
import Cards from './Cards';
import firebase from 'firebase';
import CardSection from './CardSection';
import drawerbutton from './Logo/drawerbutton.png';

class Points extends Component{
    state = {
        points:''
    }
    componentWillMount(){
        uid = firebase.auth().currentUser.uid
        firebase.database().ref('users/' + uid).on('value',(data) => {
            const user = data.toJSON()
            this.setState({
                points: user.points,
            })
        })

    }
    render(){
        return(
            <View>
            <View style = {{flex: -1, 
                backgroundColor : '#fff', 
                paddingBottom: 10,
                borderColor :'black',
                shadowColor: '#000',
                shadowOffset: { width: 0 , height: 2},
                shadowOpacity: 0.9,
                shadowRadius: 2,
                elevation: 10,
                marginBottom: 10,
                flexDirection:'row',
                alignItems:'center',
                }}>
                <View style = {{alignItems:'flex-start',paddingLeft:10,justifyContent:'center',paddingTop:10}}>
                <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()}>
                <Image source ={drawerbutton} style = {{alignItems:'flex-start'}}/>
                </TouchableOpacity>
                </View>
                <View style = {{justifyContent:'center',alignItems:'center',paddingLeft:90,}}>
                <Text style = {styles.textStyle}>Points</Text>
                </View>
            </View>
            <Cards>
                <View style = {{padding:10 , paddingBottom:3,}}>
                    <Text style ={{alignItems:'center',
                    justifyContent:'center',
                    fontWeight:'400',
                    fontSize:25,
                    color:'green',}}>Active Points</Text>
                    </View>
                <View style = {{padding:10 , paddingTop:3,}}>
                    <Text style ={{alignItems:'center',
                    justifyContent:'center',
                    color:'green',}}>{this.state.points }</Text>
                </View>
            </Cards>
            <Cards>
                <View style = {{padding:10 , paddingBottom:3,}}>
                <Text style ={{alignItems:'center',
                justifyContent:'center',
                fontWeight:'400',
                fontSize:25,}}>FAQ</Text>
                </View>
                <View style = {{paddingLeft:5}}>
                    <Text>1.Question</Text>
                    <Text>Answer</Text>
                </View>
            </Cards>
            </View>
        );
    }
}

const styles = {
    textStyle : {
        alignSelf : 'center',
        fontSize : 20,
        paddingTop : 10,
        color:'black',

    },
};
export default Points;