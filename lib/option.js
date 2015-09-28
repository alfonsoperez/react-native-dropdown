const React = require('react-native');

const {
  StyleSheet,
  Component,
  View,
  Text
} = React;

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

class Option extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style, styleText } = this.props;

    return (
      <View style={[ styles.container, style ]}>
        <Text style={ styleText }>{this.props.children.toString()}</Text>
      </View>
    );
  }
}

Option.propTypes = {
  children: React.PropTypes.object.isRequired
};

module.exports = Option;
