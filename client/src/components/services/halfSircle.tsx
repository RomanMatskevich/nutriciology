import { Text } from "@/types";

interface HalfSircleProps {
  baseCircleRadius: number;
  dotsRadius: number;
  dotsCount: number;
  position: "left" | "right";
  tags: Text[] | null;
}

export default function HalfSircle({
  baseCircleRadius,
  dotsRadius,
  position,
  tags,
}: HalfSircleProps) {
  if (!tags || tags.length > 5) {
    return null;
  }
  const alpha = 2 * 3.1415;
  const anglesConfig =
    position === "left"
      ? [0.42, 0.335, 0.25, 0.165, 0.08]
      : [0.92, 0.835, 0.75, 0.665, 0.58];
  const baseCircleMargin = baseCircleRadius * 1.374;
  const baseCircleDiameter = baseCircleRadius * 2;
  const textStyles =
    position === "left"
      ? {
          marginTop: `-${2 * dotsRadius}px`,
          marginLeft: `${8 * dotsRadius}px`,
        }
      : {
          marginTop: `-${2 * dotsRadius}px`,
          marginRight: `${80 * dotsRadius}px`,
          transform: `translateX(calc(-63vw - ${8 * dotsRadius}px))`,
          textAlign: 'right' as const
        
        };
  const baseCircleStyles =
    position === "left"
      ? {
          width: `${baseCircleDiameter}px`,
          height: `${baseCircleDiameter}px`,
          marginLeft: `-${baseCircleMargin}px`,
        }
      : {
          width: `${baseCircleDiameter}px`,
          height: `${baseCircleDiameter}px`,
          marginRight: `-${baseCircleMargin}px`,
        };
  return (
    <div
      className={`border border-yellow rounded-full relative`}
      style={baseCircleStyles}
    >
      {tags?.map((tag, i) => (
        <div
          className="bg-yellow z-5 absolute rounded-full"
          key={tag.id}
          style={{
            width: `${dotsRadius * 2}px`,
            height: `${dotsRadius * 2}px`,
            top: `${
              baseCircleRadius +
              baseCircleRadius * Math.cos(alpha * anglesConfig[i])
            }px`,
            left: `${
              baseCircleRadius +
              baseCircleRadius * Math.sin(alpha * anglesConfig[i])
            }px`,
            marginTop: `-${dotsRadius}px`,
            marginLeft: `-${dotsRadius}px`,
          }}
        >
          <p
            className={`!w-[63vw] text-xs md:text-base lg:text-xl text-yellow text-left`}
            style={textStyles}
          >
            {tag.text}
          </p>
        </div>
      ))}
    </div>
  );
}
