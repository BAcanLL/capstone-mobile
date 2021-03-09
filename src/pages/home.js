import React from 'react';
import { observer, useLocalStore } from 'mobx-react';
import { useContext } from 'react';
import { RootStoreContext } from '../index';
import { Buttons, ButtonWrapper, Wrapper } from './home.style';
import DeviceManager from '../molecules/device-manager';
import SentimentCollection from '../organisms/sentiment-collection';
import HomeStore from './home.store';
import Button, { BUTTON_SIZES } from '../atoms/button';
import { COLORS } from '../atoms/palette';

const TAKE = 'Take';
const COLLECT_DATA = 'Collect Data';

const Home = observer(() => {
  const { rootStore, apiStore } = useContext(RootStoreContext);
  const store = useLocalStore(HomeStore, { rootStore, apiStore });

  return (
    <Wrapper>
      <DeviceManager
        name={rootStore.user.firstName}
        onSettingsPress={() => store.setSettingsVisible(true)}
        onEditPress={store.onEditPress}
        onProfilePress={store.onProfilePress}
      />
      <SentimentCollection />
      <Buttons>
        <ButtonWrapper>
          <Button
            onPress={store.onMedicationPress}
            text={TAKE}
            size={BUTTON_SIZES.large}
            icon="pill"
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            onPress={store.onCollectDataPress}
            text={COLLECT_DATA}
            color={COLORS.blue}
            size={BUTTON_SIZES.large}
            icon="data"
          />
        </ButtonWrapper>
      </Buttons>
    </Wrapper>
  );
});

export default Home;
