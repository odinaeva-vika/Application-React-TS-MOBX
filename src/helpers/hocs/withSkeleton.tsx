import Skeleton from "../../widgets/Skeleton";
import { SkeletonType } from "../../interfaces";

export interface Props {
  isLoading: boolean;
}

function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  count: number,
  type?: SkeletonType
) {
  return function withSkeleton(props: Props & P) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }

    return <Component {...(restProps as P)} />;
  };
}

export default withSkeleton;
