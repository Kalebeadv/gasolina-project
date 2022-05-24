



class MyScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lastRefresh: Date(Date.now()).toString(),
        }
        this.refreshScreen = this.refreshScreen.bind(this)
    }

    refreshScreen() {
        this.setState({ lastRefresh: Date(Date.now()).toString() })
    }

    render() {
        return (
            <View>
                <Text>My Screen</Text>
                <Text>Last Refresh: {this.state.lastRefresh}</Text>
                <Button onPress={this.refreshScreen} title="Refresh Screen" />
            </View>
        )
    }
}
