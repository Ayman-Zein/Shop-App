import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ItemsSeparator from '../components/ItemsSeparator';
import ListItem from '../components/ListItem';
import ListItemDelete from '../components/ListItemDelete';

import Screen from '../components/Screen';

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
		image: require('../assets/mosh.jpg'),
		desc: 'description here '
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
		image: require('../assets/mosh.jpg'),
		desc: 'description here '
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item',
		image: require('../assets/mosh.jpg'),
		desc: 'description here '
	}
];
const MessagesScreen = () => {
	const [ messages, setMessages ] = useState(DATA);
	const [ refreshing, setRefreshing ] = useState(false);

	const handleDelete = (item) => {
		setMessages(messages.filter((msg) => msg.id !== item.id));
	};
	return (
		<Screen>
			<FlatList
				data={messages}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.desc}
						image={item.image}
						onPress={() => console.log('pressed', item)}
						renderRightActions={() => <ListItemDelete onPress={() => handleDelete(item)} />}
					/>
				)}
				keyExtractor={(item) => item.id}
				ItemSeparatorComponent={ItemsSeparator}
				refreshing={refreshing}
				onRefresh={() => setMessages(DATA)}
			/>
		</Screen>
	);
};

export default MessagesScreen;

const styles = StyleSheet.create({});
