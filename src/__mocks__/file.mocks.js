import React from "react";

const FileMock = React.forwardRef((props, ref) => <img ref={ref} {...props} />);
export const ReactComponent = FileMock;
export default FileMock;
