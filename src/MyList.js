import React, { PureComponent, useEffect, useRef } from "react";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";

import "./styles.css";

const LOADING = 1;
const LOADED = 2;
let itemStatusMap = {};
let itemSizeMap = {};
let refAll;

const isItemLoaded = (index) => !!itemStatusMap[index];
const loadMoreItems = (startIndex, stopIndex) => {
  for (let index = startIndex; index <= stopIndex; index++) {
    itemStatusMap[index] = LOADING;
  }
  return new Promise((resolve) =>
    setTimeout(() => {
      for (let index = startIndex; index <= stopIndex; index++) {
        itemStatusMap[index] = LOADED;
      }
      resolve();
    }, 1000)
  );
};

class Row extends PureComponent {
  render() {
    const { index, style } = this.props;
    let label;
    if (itemStatusMap[index] === LOADED) {
      label = `Row ${index}`;
    } else {
      label = "Loading...";
    }
    return (
      <li className="ListItem" style={style}>
        {label}
      </li>
    );
  }
}

const MyList = () => (
  <AutoSizer>
    {({ height, width }) => (
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={1000}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <List
            className="List"
            // outerElementType="section"
            // innerElementType="ol"
            height={height}
            itemCount={500}
            itemSize={30}
            // overscanCount={4}
            onItemsRendered={onItemsRendered}
            ref={(r) => {
              ref(r);
              refAll = r;
            }}
            estimatedItemSize={(index) => {
              return index % 2 ? 500 : 100;
            }}
            width={500}
            itemSize={(index) => {
              const size = itemSizeMap[index] ?? 100;
              console.log("size", size);
              return size;
            }}
          >
            {Item}
          </List>
        )}
      </InfiniteLoader>
    )}
  </AutoSizer>
);

const Item = ({ index, style }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    if (!itemRef.current) return;
    if (index % 2 && !itemSizeMap[index]) {
      itemSizeMap[index] = itemRef.current.getBoundingClientRect().height;
      console.log(
        "useEffect",
        itemSizeMap[index],
        refAll.resetAfterIndex(index)
      );
    }
  }, []);

  return (
    <div style={style}>
      <div
        ref={itemRef}
        style={{
          border: "3px solid red",
          minHeight: "100%"
        }}
      >
        <b>{index}</b>
        <div>
          {index % 2
            ? dataLong
            : `adsfadsfaadsfadsfaadsfadsfa adsfadsfa adsfadsfa adsfadsfa adsfadsfa
          adsfadsfa adsfadsfa`}
        </div>
      </div>
    </div>
  );
};

export default MyList;

const dataLong = `2022/04/25 10:12 小川​
​2022/04/25 08:27 小川​

cao: ：　51cm
cao：　25kg
BMI：　19.431011280912337

cao：　61cm
can nang：　75kg
BMI：　16.78255582032645

​2022/04/25 10:14 水野​
​2022/04/25 10:12 水野​

​2022/04/25 08:27 小川​

cao: ：　51cm
cao：　25kg
BMI：　19.431011280912337

cao：　61cm
can nang：　75kg
BMI：　16.78255582032645

​2022/04/25 10:14 水野​
​2022/04/25 10:12 水野​

cao: ：　51cm
cao：　25kg
BMI：　17.40964650995992

cao：　61cm
can nang：　75kg
BMI：　16.52458897839226

​2022/04/25 10:14 小川​

cao: ：　51cm
cao：　25kg
BMI：　16.234019448778064

cao：　61cm
can nang：　75kg
BMI：　17.882725382197123
​2022/04/25 08:27 小川​

cao: ：　51cm
cao：　25kg
BMI：　19.431011280912337
BMI：　17.40964650995992

cao：　61cm
can nang：　75kg
BMI：　16.52458897839226

​2022/04/25 10:14 小川​

cao: ：　51cm
cao：　25kg
BMI：　16.234019448778064

cao：　61cm
can nang：　75kg
BMI：　17.882725382197123
​2022/04/25 08:27 小川​

cao: ：　51cm
cao：　25kg
BMI：　19.431011280912337
BMI：　17.40964650995992

cao：　61cm
can nang：　75kg
BMI：　16.52458897839226

​2022/04/25 10:14 小川​

cao: ：　51cm
cao：　25kg
BMI：　16.234019448778064

cao：　61cm
can nang：　75kg
BMI：　17.882725382197123
​2022/04/25 08:27 小川​

cao: ：　51cm
cao：　25kg
BMI：　19.431011280912337
BMI：　17.40964650995992

cao：　61cm
can nang：　75kg
BMI：　16.52458897839226

​2022/04/25 10:14 小川​

cao: ：　51cm
cao：　25kg
BMI：　16.234019448778064

cao：　61cm
can nang：　75kg
BMI：　17.882725382197123
​2022/04/25 08:27 小川​

cao: ：　51cm
cao：　25kg
BMI：　19.431011280912337
BMI：　17.40964650995992

cao：　61cm
can nang：　75kg
BMI：　16.52458897839226

​2022/04/25 10:14 小川​

cao: ：　51cm
cao：　25kg
BMI：　16.234019448778064

cao：　61cm
can nang：　75kg
BMI：　17.882725382197123
​2022/04/25 08:27 小川​

cao: ：　51cm
cao：　25kg
BMI：　19.431011280912337

cao：　61cm
can nang：　75kg
BMI：　16.78255582032645

​2022/04/25 10:14 水野​
​2022/04/25 10:12 水野​

cao: ：　51cm
cao：　25kg
BMI：　17.40964650995992

cao：　61cm
can nang：　75kg
BMI：　16.52458897839226

​2022/04/25 10:14 小川​

cao: ：　51cm
cao：　25kg
BMI：　16.234019448778064

cao：　61cm
can nang：　75kg
BMI：　17.882725382197123  ​2022/04/25 08:27 小川​

cao: ：　51cm
cao：　25kg
BMI：　19.431011280912337

cao：　61cm
can nang：　75kg
BMI：　16.78255582032645

​2022/04/25 10:14 水野​
​2022/04/25 10:12 水野​

cao: ：　51cm
cao：　25kg
BMI：　17.40964650995992

cao：　61cm
can nang：　75kg
BMI：　16.52458897839226

​2022/04/25 10:14 小川​

cao: ：　51cm
cao：　25kg
BMI：　16.234019448778064

cao：　61cm
can nang：　75kg
BMI：　17.882725382197123
 `;
