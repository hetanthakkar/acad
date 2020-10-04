import React from 'react';
import {Alert, Clipboard, View, AsyncStorage, StyleSheet} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {sendEmail, openTwitter, getContactTwitter} from '../utils';

import {SemiBoldText} from './StyledText';
import ContactCard from './ContactCard';
import {FontSizes, Colors} from '../constants';

export default class MyContacts extends React.Component {
  state = {
    contacts: [],
  };
  async getContacts() {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore2019:contacts');
      this.setState({contacts: JSON.parse(value)});
    } catch (err) {
      return [];
    }
  }

  constructor(props) {
    super(props);
    this.contacts = this.props.contacts;
    this.tickets = this.props.tickets;
    // console.log("tickets from MyContacts", this.tickets);
  }
  componentDidMount() {
    this.getContacts();
  }
  render() {
    const contacts = this.props.contacts;
    return (
      <View style={[{marginHorizontal: 10}, this.props.style]}>
        <SemiBoldText style={{fontSize: FontSizes.title}}>
          My Contacts
        </SemiBoldText>
        {contacts && contacts.length > 0 ? (
          <ClipBorderRadius>
            <RectButton
              style={styles.bigButton}
              onPress={this._handlePressCopyEmails}
              underlayColor="#fff">
              <SemiBoldText style={styles.bigButtonText}>
                {'Copy all emails to clipboard'}
              </SemiBoldText>
            </RectButton>
          </ClipBorderRadius>
        ) : null}
        {this.props.contacts.map(contact => (
          <ContactCard
            key={contact.id + contact.email}
            contact={contact}
            tickets={this.props.tickets}
            style={{marginTop: 10, marginBottom: 10}}
          />
        ))}
      </View>
    );
  }

  _handlePressCopyEmails = () => {
    let contacts = 'first name,last name,email,twitter\n';
    this.props.contacts.map(contact => {
      contacts +=
        contact.firstName +
        ',' +
        contact.lastName +
        ',' +
        contact.email +
        ',' +
        getContactTwitter(contact) +
        ' \n';
    });
    Clipboard.setString(contacts);
    Alert.alert(
      'Contacts copied',
      'Your contacts have been copied in csv format, you can past them anywhere',
      [{text: 'OK', onPress: () => Clipboard.setString(contacts)}]
    );
  };
}

const ClipBorderRadius = ({children, style}) => {
  return (
    <View style={[{borderRadius: BORDER_RADIUS, overflow: 'hidden'}, style]}>
      {children}
    </View>
  );
};

const BORDER_RADIUS = 3;

const styles = StyleSheet.create({
  bigButton: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 15,
    height: 50,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  bigButtonText: {
    fontSize: FontSizes.normalButton,
    color: '#fff',
    textAlign: 'center',
  },
});
