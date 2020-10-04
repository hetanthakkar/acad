import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {ScrollView, RectButton} from 'react-native-gesture-handler';
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import _ from 'lodash';

import {Colors} from '../constants';
import {BoldText, SemiBoldText, RegularText} from './StyledText';
import GravatarImage from './GravatarImage';
import HighlightableText from './HighlightableText';

import {getContactTwitter} from '../utils';

class AttendeesSearchResultRow extends React.Component {
  constructor(props) {
    super(props);
    const event = this.props.event;
    const SpeakersAndTalks = event && evnt.speakers ? event.speakers : [];
    this.SpeakersData = [{data: SpeakersAndTalks, title: 'Speakers'}];
  }

  render() {
    const {attendee, searchQuery} = this.props;

    let isSpeaker;
    if (
      this.SpeakersData &&
      this.SpeakersData.length &&
      this.SpeakersData.length > 0
    ) {
      isSpeaker = this.SpeakersData[0].data.filter(speaker => {
        return getContactTwitter(attendee) === speaker.twitter;
      })[0]
        ? true
        : false;
    }

    return (
      <RectButton
        onPress={() => this.props.onPress(attendee)}
        activeOpacity={0.05}
        style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={[styles.row, {borderLeftWidth: isSpeaker ? 5 : 0}]}>
          {isSpeaker && (
            <View style={styles.micIcon}>
              <MaterialCommunityIcons
                name="presentation"
                size={32}
                color="#aab8c2"
              />
            </View>
          )}
          <View
            style={[
              styles.rowAvatarContainer,
              {paddingLeft: isSpeaker ? 0 : 5},
            ]}>
            <GravatarImage style={styles.avatarImage} email={attendee.email} />
          </View>
          <View style={styles.rowData}>
            <HighlightableText
              TextComponent={BoldText}
              highlightStyle={{backgroundColor: '#e1e8ed'}}
              searchWords={[searchQuery]}
              textToHighlight={`${attendee.firstName} ${attendee.lastName}`}
            />
            {getContactTwitter(attendee) ? (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Entypo
                  name={'twitter'}
                  size={16}
                  color="#1da1f2"
                  style={{paddingRight: 3}}
                />
                <HighlightableText
                  TextComponent={RegularText}
                  highlightStyle={{backgroundColor: '#e1e8ed'}}
                  searchWords={[searchQuery]}
                  textToHighlight={`@${getContactTwitter(attendee)}`}
                />
              </View>
            ) : null}
          </View>
        </View>
      </RectButton>
    );
  }
}

const AttendeesSearchResultPlaceholderRow = () => (
  <RectButton activeOpacity={0.05} style={{flex: 1, backgroundColor: '#fff'}}>
    <View style={styles.row}>
      <View style={styles.rowAvatarContainer}>
        <MaterialIcons
          name={'account-circle'}
          size={48}
          style={styles.placeholderAvatarImage}
        />
      </View>
      <View style={styles.rowData}>
        <BoldText
          style={{backgroundColor: '#efefef', height: 14, marginBottom: 8}}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </BoldText>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <SemiBoldText style={{color: '#efefef', height: 14, marginRight: 8}}>
            •
          </SemiBoldText>
          <SemiBoldText style={{backgroundColor: '#efefef', height: 14}}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </SemiBoldText>
        </View>
      </View>
    </View>
  </RectButton>
);

export default class AttendeesSearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {attendees, isLoading} = this.props;
    const maybeAttendees = isLoading
      ? _.times(10).map(id => ({id}))
      : attendees;
    const itemRenderer = isLoading
      ? this._renderItemPlaceholder
      : this._renderItem;
    return (
      <FlatList
        renderScrollComponent={props => <ScrollView {...props} />}
        renderItem={itemRenderer}
        data={maybeAttendees}
        keyExtractor={item => `${item.id}`}
        initialNumToRender={10}
        keyboardDismissMode="on-drag"
        style={styles.list}
      />
    );
  }

  _renderItem = ({item: attendee}) => (
    <AttendeesSearchResultRow
      attendee={attendee}
      onPress={this.props.onPress}
      searchQuery={this.props.searchQuery}
    />
  );

  _renderItemPlaceholder = () => <AttendeesSearchResultPlaceholderRow />;

  _handlePressRow = attendee => {
    this.props.navigation.navigate('AttendeeDetail', {attendee});
  };
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eee',
    borderLeftColor: Colors.blue,
    flexDirection: 'row',
  },
  rowAvatarContainer: {
    paddingVertical: 5,
    paddingRight: 10,
    paddingLeft: 5,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  placeholderAvatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    color: '#efefef',
  },
  rowData: {
    flex: 1,
  },
  list: {
    paddingTop: 80,
  },
  micIcon: {
    position: 'absolute',
    right: 24,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    top: 10,
  },
});
