import type { ComponentChildren, FunctionalComponent } from "preact";

type IconProps = {
  isOnScreen?: boolean;
  children: ComponentChildren;
};

const Icon: FunctionalComponent<IconProps> = ({
  children,
  isOnScreen = true,
}) => {
  return (
    <i
      data-icon-is-on-screen={isOnScreen}
      className="z-10 bg-white shadow-icon p-3 rounded-lg infra-icon"
    >
      {children}
    </i>
  );
};

export default Icon;
