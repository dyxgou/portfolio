import type { ComponentChildren, FunctionalComponent } from "preact";

type IconProps = {
  isOnScreen?: boolean;
  isDatabase?: boolean;
  children: ComponentChildren;
};

const Icon: FunctionalComponent<IconProps> = ({
  children,
  isOnScreen = true,
  isDatabase = false,
}) => {
  return (
    <i
      data-icon-is-on-screen={isOnScreen}
      data-icon-is-database={isDatabase}
      className="z-10 bg-white shadow-icon p-3 rounded-lg infra-icon"
    >
      {children}
    </i>
  );
};

export default Icon;
