## SimpleTabs usage
```
<SimpleTabs tabHeight={38}>
  <Tab title="Color">
    <ColourPanner 
      onColourSelect={
        (hex) => {
          this.props.onColourSelect(hex);
        }
      }
    />
  </Tab>
  <Tab title="Width">
    <View>
      <Slider 
        minimumValue={0}
        maximumValue={1000}
        step={1}
        minimumTrackTintColor={'#35a6ff'}
        maximumTrackTintColor={'#484A52'}
        thumbTintColor={'#FFFFFF'}
        onValueChange={(width) => {
          this.props.onWidthChange(width);
        }}
        onSlidingComplete={(width) => {
          this.props.onWidthChangeComplete(width);
        }}
      />
    </View>
  </Tab>
</SimpleTabs>
```

## ColourPanner usage
```
<ColourPanner 
  onColourSelect={
    (hex) => {
      this.props.onColourSelect(hex);
    }
  }
/>
```
