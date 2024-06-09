import * as Icons from "./index";

const DynamicIcon = ({ name }: { name: keyof typeof Icons }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    return null;
  }

  return <IconComponent />;
};

export default DynamicIcon;
