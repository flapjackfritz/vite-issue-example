import { Coordinate } from "ol/coordinate";
import foo from 'react-router';
import bar from "./dep4";
import AsyncSelect from "react-select/async";
import DebouncePromise from "debounce-promise";
import { components } from "react-select";
import { coordinateRelationship } from "ol/extent";

const stub = () => {
  coordinateRelationship;
  AsyncSelect;
  DebouncePromise;
  components.Control;
  coordinateRelationship.apply;
  bar();
}

export default stub;