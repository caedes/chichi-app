import { CardMedia } from "@material-ui/core";

import placeholder from "./placeholder.png";

export default function PlaceholderCardMedia(props) {
  return <CardMedia image={placeholder} title={"Image not found"} {...props} />;
}
