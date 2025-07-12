import React from "react";
import ListItem1 from "./ListItem1";
import { Daystyle, ListStyle } from "./style";
import ListItem2 from "./ListItem2";
import ListItem3 from "./ListItem3";

const List = () => {
  return (
    <ListStyle>
      <div className="inner">
        <div className="con con1">
          <Daystyle>6.13 fri Line up</Daystyle>
          <ListItem1 />
        </div>
        <div className="con con2">
          <Daystyle>6.14 sat Line up</Daystyle>
          <ListItem2 />
        </div>
        <div className="con con3">
          <Daystyle>6.15 sun Line up</Daystyle>
          <ListItem3 />
        </div>
      </div>
    </ListStyle>
  );
};

export default List;
