import { debounce } from 'lodash-es';
import bar from "./dep3";
import Layer from "ol/layer/Layer";
import Source from "ol/source/Source";
import moment from "moment";

const stub = () => {
  bar();
  Layer;
  Source;
  moment.utc;
  debounce(() => bar);
}

export default stub;