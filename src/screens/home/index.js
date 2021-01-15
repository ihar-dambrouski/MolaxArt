import React, { useCallback } from 'react';
import { Text, View, Button } from 'react-native';
import { inject, observer } from 'mobx-react'; // 6.x or mobx-react-lite@1.4.0

const Home = ({ root: { filteredLists, addList, lists } }) => {
  // const { filteredLists, addList, lists } = ListStor;
  const handleAddItemInList = useCallback(() => {
    addList('@123asfs');
  }, [addList]);

  return (
    <View>

      <Text>Hello</Text>
      <Button onPress={handleAddItemInList} title="Press mee" />
      {lists.map((item) => <Text>{item}</Text>)}
    </View>
  );
};

export default inject('root')(observer(Home));
