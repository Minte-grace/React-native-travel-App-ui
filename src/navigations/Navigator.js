import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const stackNavigatorOption = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Detail:{screen:Detail}
},
    {defaultNavigationOptions:stackNavigatorOption}
);
export default createAppContainer(AppNavigator);
