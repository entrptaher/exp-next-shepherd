import dynamic from "next/dynamic";

const Tour = dynamic(() => import("./Tour"), { ssr: false });
export default (props) => <Tour {...props}/>;
