import dynamic from "next/dynamic";

const Tour = dynamic(() => import("./Context"), { ssr: false });
export default (props) => <Tour {...props}/>;
