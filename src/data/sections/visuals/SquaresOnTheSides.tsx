import { Slider } from "@/components/atoms";
import { useVar, useSetVar } from "@/stores";

const SCALE = 110;
const ORIGIN_X = 40;
const ORIGIN_Y = 130;

const SIN_COLOR = "#e11d48";
const COS_COLOR = "#0891b2";

/** A square built on each shorter side of the triangle, tiling exactly one unit square. */
export const SquaresOnTheSides = () => {
    const angle = useVar("squaresAngle", 35) as number;
    const setVar = useSetVar();

    const radians = (angle * Math.PI) / 180;
    const cosValue = Math.cos(radians);
    const sinValue = Math.sin(radians);
    const cosSquared = cosValue * cosValue;
    const sinSquared = sinValue * sinValue;

    const footX = ORIGIN_X + cosValue * SCALE;
    const pointY = ORIGIN_Y - sinValue * SCALE;

    const cosSide = cosValue * SCALE;
    const sinSide = sinValue * SCALE;

    // Right-hand panel: one unit square split by area
    const unitX = 40;
    const unitY = 40;
    const sinHeight = sinSquared * SCALE;
    const cosHeight = cosSquared * SCALE;

    return (
        <div className="w-full">
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-center">
                <div className="w-full max-w-[330px]">
                    <svg
                        viewBox="0 0 250 290"
                        className="h-auto w-full"
                        role="img"
                        aria-label="A square built on each shorter side of the right-angled triangle"
                    >
                        {/* Quarter arc of the unit circle */}
                        <path
                            d={`M ${ORIGIN_X + SCALE} ${ORIGIN_Y} A ${SCALE} ${SCALE} 0 0 0 ${ORIGIN_X} ${ORIGIN_Y - SCALE}`}
                            fill="none"
                            stroke="#94a3b8"
                            strokeWidth={1.5}
                            strokeDasharray="4 4"
                        />

                        {/* Square on the adjacent side */}
                        <rect
                            x={ORIGIN_X}
                            y={ORIGIN_Y}
                            width={cosSide}
                            height={cosSide}
                            fill={COS_COLOR}
                            fillOpacity={0.22}
                            stroke={COS_COLOR}
                            strokeWidth={1.5}
                        />
                        {/* Square on the opposite side */}
                        <rect
                            x={footX}
                            y={pointY}
                            width={sinSide}
                            height={sinSide}
                            fill={SIN_COLOR}
                            fillOpacity={0.22}
                            stroke={SIN_COLOR}
                            strokeWidth={1.5}
                        />

                        {/* Triangle */}
                        <polygon
                            points={`${ORIGIN_X},${ORIGIN_Y} ${footX},${ORIGIN_Y} ${footX},${pointY}`}
                            fill="#6366f1"
                            fillOpacity={0.12}
                        />
                        <line x1={ORIGIN_X} y1={ORIGIN_Y} x2={footX} y2={ORIGIN_Y} stroke={COS_COLOR} strokeWidth={4} strokeLinecap="round" />
                        <line x1={footX} y1={ORIGIN_Y} x2={footX} y2={pointY} stroke={SIN_COLOR} strokeWidth={4} strokeLinecap="round" />
                        <line x1={ORIGIN_X} y1={ORIGIN_Y} x2={footX} y2={pointY} stroke="#4f46e5" strokeWidth={3} strokeLinecap="round" />
                        <circle cx={footX} cy={pointY} r={5} fill="#4f46e5" />

                        {/* Square labels */}
                        <text
                            x={ORIGIN_X + cosSide / 2}
                            y={ORIGIN_Y + cosSide / 2 + 4}
                            fontSize={12}
                            fill={COS_COLOR}
                            textAnchor="middle"
                            fontWeight={700}
                        >
                            {`cos²θ = ${cosSquared.toFixed(2)}`}
                        </text>
                        <text
                            x={footX + sinSide / 2}
                            y={pointY + sinSide / 2 + 4}
                            fontSize={12}
                            fill={SIN_COLOR}
                            textAnchor="middle"
                            fontWeight={700}
                        >
                            {`sin²θ = ${sinSquared.toFixed(2)}`}
                        </text>

                        <text x={125} y={278} fontSize={12} fill="#64748b" textAnchor="middle">
                            {`A square on each shorter side (θ = ${angle}°)`}
                        </text>
                    </svg>
                </div>

                <div className="w-full max-w-[330px]">
                    <svg
                        viewBox="0 0 250 290"
                        className="h-auto w-full"
                        role="img"
                        aria-label="One unit square filled by the two areas"
                    >
                        {/* The unit square, filled from the bottom by the two areas */}
                        <rect
                            x={unitX}
                            y={unitY + SCALE - sinHeight}
                            width={SCALE}
                            height={sinHeight}
                            fill={SIN_COLOR}
                            fillOpacity={0.35}
                        />
                        <rect
                            x={unitX}
                            y={unitY + SCALE - sinHeight - cosHeight}
                            width={SCALE}
                            height={cosHeight}
                            fill={COS_COLOR}
                            fillOpacity={0.35}
                        />
                        <rect
                            x={unitX}
                            y={unitY}
                            width={SCALE}
                            height={SCALE}
                            fill="none"
                            stroke="#334155"
                            strokeWidth={2}
                        />

                        <text x={unitX + SCALE / 2} y={unitY + SCALE - sinHeight / 2 + 4} fontSize={12} fill="#9f1239" textAnchor="middle" fontWeight={700}>
                            {sinSquared.toFixed(2)}
                        </text>
                        <text x={unitX + SCALE / 2} y={unitY + SCALE - sinHeight - cosHeight / 2 + 4} fontSize={12} fill="#155e75" textAnchor="middle" fontWeight={700}>
                            {cosSquared.toFixed(2)}
                        </text>

                        {/* Side labels of the unit square */}
                        <text x={unitX - 8} y={unitY + SCALE / 2 + 4} fontSize={12} fill="#475569" textAnchor="end">
                            1
                        </text>
                        <text x={unitX + SCALE / 2} y={unitY - 10} fontSize={12} fill="#475569" textAnchor="middle">
                            1
                        </text>

                        <text x={125} y={unitY + SCALE + 34} fontSize={13} fill="#334155" textAnchor="middle" fontWeight={600}>
                            {`${sinSquared.toFixed(2)} + ${cosSquared.toFixed(2)} = ${(sinSquared + cosSquared).toFixed(2)}`}
                        </text>
                        <text x={125} y={278} fontSize={12} fill="#64748b" textAnchor="middle">
                            The two areas fill one unit square
                        </text>
                    </svg>
                </div>
            </div>

            <div className="mx-auto mt-2 flex max-w-[690px] items-center gap-4">
                <span className="w-16 shrink-0 text-sm text-slate-600">Angle θ</span>
                <Slider
                    value={[angle]}
                    min={5}
                    max={85}
                    step={1}
                    onValueChange={(value) => setVar("squaresAngle", value[0])}
                    className="flex-1"
                />
                <span className="w-12 shrink-0 text-right text-sm font-medium text-slate-700">{angle}°</span>
            </div>
        </div>
    );
};
