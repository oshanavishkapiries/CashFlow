"use client";

import Lottie, { LottieComponentProps } from "lottie-react";
import { CSSProperties } from "react";

interface LottieViewerProps {
  /** JSON animation data or URL to the animation file */
  animationData?: any;
  /** Loop the animation (default: true) */
  loop?: boolean;
  /** Auto play the animation (default: true) */
  autoplay?: boolean;
  /** Width of the animation container */
  width?: string | number;
  /** Height of the animation container */
  height?: string | number;
  /** Additional CSS styles */
  style?: CSSProperties;
  /** CSS class name */
  className?: string;
  /** Animation speed (default: 1) */
  speed?: number;
  /** Callback when animation completes */
  onComplete?: () => void;
  /** Callback when animation loads */
  onLoad?: () => void;
  /** Additional Lottie props */
  lottieProps?: Partial<LottieComponentProps>;
}

const LottieViewer = ({
  animationData,
  loop = true,
  autoplay = true,
  width = 200,
  height = 200,
  style = {},
  className = "",
  //speed = 1,
  onComplete,
  onLoad,
  lottieProps = {},
}: LottieViewerProps) => {
  if (!animationData) {
    return (
      <div
        className={`flex items-center justify-center bg-muted rounded ${className}`}
        style={{ width, height, ...style }}
      >
        <span className="text-muted-foreground text-sm">No animation data</span>
      </div>
    );
  }

  const defaultStyle: CSSProperties = {
    width,
    height,
    ...style,
  };

  return (
    <div className={className} style={defaultStyle}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
        onComplete={onComplete}
        onDOMLoaded={onLoad}
        {...lottieProps}
      />
    </div>
  );
};

export default LottieViewer;
