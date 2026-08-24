import { Button, Slider } from "@/components/atoms";
import { useVar, useSetVar } from "@/stores";

const CENTER_X = 200;
const CENTER_Y = 210;
const RADIUS = 140;
const ARC_RADIUS = 34;

const HYPOTENUSE_COLOR = "#4f46e5";
const ADJACENT_COLOR = "#0891b2";
const OPPOSITE_COLOR = "#e11d48";

/** The right-angled triangle hiding inside the unit circle. */
export const UnitCircleTriangle = () => {
    const angle = useVar("unitCircleAngle", 50) as number;
    const setVar = useSetVar();

    const radians = (angle * Math.PI) / 180;
    const cosValue = Math.cos(radians);
    const sinValue = Math.sin(radians);

    const pointX = CENTER_X + RADIUS * cosValue;
    const pointY = CENTER_Y - RADIUS * sinValue;

    const horizontalSign = cosValue >= 0 ? 1 : -1;
    const verticalSign = sinValue >= 0 ? 1 : -1;

    // Angle arc, drawn anticlockwise from the positive x-axis
    const arcEndX = CENTER_X + ARC_RADIUS * cosValue;
    const arcEndY = CENTER_Y - ARC_RADIUS * sinValue;
    const arcPath = `M ${CENTER_X + ARC_RADIUS} ${CENTER_Y} A ${ARC_RADIUS} ${ARC_RADIUS} 0 ${
        angle > 180 ? 1 : 0
    } 0 ${arcEndX} ${arcEndY}`;
    const halfRadians = radians / 2;
    const arcLabelX = CENTER_X + (ARC_RADIUS + 20) * Math.cos(halfRadians);
    const arcLabelY = CENTER_Y - (ARC_RADIUS + 20) * Math.sin(halfRadians);

    // Right-angle marker at the foot of the vertical side
    const markerSize = 11;
    const markerX = pointX - horizontalSign * markerSize;
    const markerY = CENTER_Y - verticalSign * markerSize;

    // Hypotenuse label, pushed off the line so it never sits on top of it
    const midX = (CENTER_X + pointX) / 2;
    const midY = (CENTER_Y + pointY) / 2;
    const legLengthX = pointX - CENTER_X;
    const legLengthY = pointY - CENTER_Y;
    const legLength = Math.hypot(legLengthX, legLengthY) || 1;
    const hypotenuseLabelX = midX + (legLengthY / legLength) * 24;
    const hypotenuseLabelY = midY - (legLengthX / legLength) * 24;

    return (
        <div className="w-full">
            <svg
                viewBox="-80 0 560 440"
                className="mx-auto block h-auto w-full max-w-[620px]"
                role="img"
                aria-label="A right-angled triangle inside the unit circle"
            >
                {/* Axes */}
                <line
                    x1={CENTER_X - RADIUS - 45}
                    y1={CENTER_Y}
                    x2={CENTER_X + RADIUS + 45}
                    y2={CENTER_Y}
                    stroke="#cbd5e1"
                    strokeWidth={1.5}
                />
                <line
                    x1={CENTER_X}
                    y1={CENTER_Y - RADIUS - 45}
                    x2={CENTER_X}
                    y2={CENTER_Y + RADIUS + 45}
                    stroke="#cbd5e1"
                    strokeWidth={1.5}
                />
                <text
                    x={CENTER_X + RADIUS + 52}
                    y={CENTER_Y + 5}
                    fontSize={13}
                    fill="#94a3b8"
                    textAnchor="start"
                >
                    x
                </text>
                <text
                    x={CENTER_X + 10}
                    y={CENTER_Y - RADIUS - 50}
                    fontSize={13}
                    fill="#94a3b8"
                    textAnchor="start"
                >
                    y
                </text>

                {/* The unit circle */}
                <circle
                    cx={CENTER_X}
                    cy={CENTER_Y}
                    r={RADIUS}
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth={1.5}
                    strokeDasharray="4 4"
                />

                {/* Triangle fill */}
                <polygon
                    points={`${CENTER_X},${CENTER_Y} ${pointX},${CENTER_Y} ${pointX},${pointY}`}
                    fill="#6366f1"
                    fillOpacity={0.1}
                />

                {/* Right-angle marker */}
                <polyline
                    points={`${markerX},${CENTER_Y} ${markerX},${markerY} ${pointX},${markerY}`}
                    fill="none"
                    stroke="#64748b"
                    strokeWidth={1.5}
                />

                {/* Adjacent side (cos) */}
                <line
                    x1={CENTER_X}
                    y1={CENTER_Y}
                    x2={pointX}
                    y2={CENTER_Y}
                    stroke={ADJACENT_COLOR}
                    strokeWidth={4}
                    strokeLinecap="round"
                />
                {/* Opposite side (sin) */}
                <line
                    x1={pointX}
                    y1={CENTER_Y}
                    x2={pointX}
                    y2={pointY}
                    stroke={OPPOSITE_COLOR}
                    strokeWidth={4}
                    strokeLinecap="round"
                />
                {/* Hypotenuse (radius = 1) */}
                <line
                    x1={CENTER_X}
                    y1={CENTER_Y}
                    x2={pointX}
                    y2={pointY}
                    stroke={HYPOTENUSE_COLOR}
                    strokeWidth={4}
                    strokeLinecap="round"
                />

                {/* Angle arc */}
                <path d={arcPath} fill="none" stroke="#f59e0b" strokeWidth={2.5} />
                <text
                    x={arcLabelX}
                    y={arcLabelY + 4}
                    fontSize={14}
                    fill="#b45309"
                    textAnchor="middle"
                    fontStyle="italic"
                >
                    θ
                </text>

                {/* The point on the rim */}
                <circle cx={pointX} cy={pointY} r={6} fill={HYPOTENUSE_COLOR} />

                {/* Side labels */}
                <text
                    x={(CENTER_X + pointX) / 2}
                    y={CENTER_Y + (sinValue >= 0 ? 22 : -12)}
                    fontSize={13}
                    fill={ADJACENT_COLOR}
                    textAnchor="middle"
                    fontWeight={600}
                >
                    {`adjacent = cos θ = ${cosValue.toFixed(2)}`}
                </text>
                <text
                    x={pointX + horizontalSign * 12}
                    y={(CENTER_Y + pointY) / 2 + 4}
                    fontSize={13}
                    fill={OPPOSITE_COLOR}
                    textAnchor={horizontalSign > 0 ? "start" : "end"}
                    fontWeight={600}
                >
                    {`opposite = sin θ = ${sinValue.toFixed(2)}`}
                </text>
                <text
                    x={hypotenuseLabelX}
                    y={hypotenuseLabelY + 4}
                    fontSize={13}
                    fill={HYPOTENUSE_COLOR}
                    textAnchor="middle"
                    fontWeight={600}
                >
                    hypotenuse = 1
                </text>

                {/* Coordinate read-out */}
                <text x={-70} y={26} fontSize={14} fill="#334155" textAnchor="start">
                    {`Point: (${cosValue.toFixed(2)}, ${sinValue.toFixed(2)})`}
                </text>
                <text x={-70} y={48} fontSize={14} fill="#334155" textAnchor="start">
                    {`Angle: ${angle}°`}
                </text>
            </svg>

            <div className="mx-auto mt-4 flex max-w-[620px] items-center gap-4">
                <span className="w-16 shrink-0 text-sm text-slate-600">Angle θ</span>
                <Slider
                    value={[angle]}
                    min={0}
                    max={360}
                    step={1}
                    onValueChange={(value) => setVar("unitCircleAngle", value[0])}
                    className="flex-1"
                />
                <span className="w-14 shrink-0 text-right text-sm font-medium text-slate-700">
                    {angle}°
                </span>
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setVar("unitCircleAngle", 50)}
                >
                    Reset
                </Button>
            </div>
        </div>
    );
};
