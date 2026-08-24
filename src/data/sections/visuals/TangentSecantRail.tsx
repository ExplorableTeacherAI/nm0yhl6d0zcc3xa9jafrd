import { Slider } from "@/components/atoms";
import { useVar, useSetVar } from "@/stores";

const ORIGIN_X = 60;
const ORIGIN_Y = 250;
const SCALE = 95;

const TAN_COLOR = "#e11d48";
const SEC_COLOR = "#4f46e5";
const BASE_COLOR = "#0891b2";

/** The tangent and secant read off a vertical rail at x = 1. */
export const TangentSecantRail = () => {
    const angle = useVar("tangentRailAngle", 40) as number;
    const setVar = useSetVar();

    const radians = (angle * Math.PI) / 180;
    const tanValue = Math.tan(radians);
    const secValue = 1 / Math.cos(radians);

    const railX = ORIGIN_X + SCALE;
    const railTopY = ORIGIN_Y - tanValue * SCALE;

    const rimX = ORIGIN_X + SCALE * Math.cos(radians);
    const rimY = ORIGIN_Y - SCALE * Math.sin(radians);

    const arcRadius = 30;
    const arcPath = `M ${ORIGIN_X + arcRadius} ${ORIGIN_Y} A ${arcRadius} ${arcRadius} 0 0 0 ${
        ORIGIN_X + arcRadius * Math.cos(radians)
    } ${ORIGIN_Y - arcRadius * Math.sin(radians)}`;

    return (
        <div className="w-full">
            <svg
                viewBox="0 0 330 300"
                className="mx-auto block h-auto w-full max-w-[560px]"
                role="img"
                aria-label="The tangent and secant as lengths on a vertical rail at x equals 1"
            >
                {/* Axes */}
                <line x1={ORIGIN_X - 30} y1={ORIGIN_Y} x2={230} y2={ORIGIN_Y} stroke="#cbd5e1" strokeWidth={1.5} />
                <line x1={ORIGIN_X} y1={30} x2={ORIGIN_X} y2={ORIGIN_Y + 25} stroke="#cbd5e1" strokeWidth={1.5} />

                {/* Quarter of the unit circle */}
                <path
                    d={`M ${ORIGIN_X + SCALE} ${ORIGIN_Y} A ${SCALE} ${SCALE} 0 0 0 ${ORIGIN_X} ${ORIGIN_Y - SCALE}`}
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth={1.5}
                    strokeDasharray="4 4"
                />

                {/* The rail at x = 1 */}
                <line x1={railX} y1={ORIGIN_Y} x2={railX} y2={30} stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="6 4" />
                <text x={railX + 6} y={ORIGIN_Y + 18} fontSize={12} fill="#64748b" textAnchor="start">
                    x = 1
                </text>

                {/* Triangle fill */}
                <polygon
                    points={`${ORIGIN_X},${ORIGIN_Y} ${railX},${ORIGIN_Y} ${railX},${railTopY}`}
                    fill="#6366f1"
                    fillOpacity={0.08}
                />

                {/* Right-angle marker at the foot of the rail */}
                <polyline
                    points={`${railX - 11},${ORIGIN_Y} ${railX - 11},${ORIGIN_Y - 11} ${railX},${ORIGIN_Y - 11}`}
                    fill="none"
                    stroke="#64748b"
                    strokeWidth={1.5}
                />

                {/* Base of length 1 */}
                <line x1={ORIGIN_X} y1={ORIGIN_Y} x2={railX} y2={ORIGIN_Y} stroke={BASE_COLOR} strokeWidth={4} strokeLinecap="round" />
                {/* Tangent height */}
                <line x1={railX} y1={ORIGIN_Y} x2={railX} y2={railTopY} stroke={TAN_COLOR} strokeWidth={4} strokeLinecap="round" />
                {/* Secant: the cable from the origin to the bar */}
                <line x1={ORIGIN_X} y1={ORIGIN_Y} x2={railX} y2={railTopY} stroke={SEC_COLOR} strokeWidth={4} strokeLinecap="round" />

                {/* Angle arc */}
                <path d={arcPath} fill="none" stroke="#f59e0b" strokeWidth={2.5} />
                <text
                    x={ORIGIN_X + (arcRadius + 16) * Math.cos(radians / 2)}
                    y={ORIGIN_Y - (arcRadius + 16) * Math.sin(radians / 2) + 4}
                    fontSize={13}
                    fill="#b45309"
                    textAnchor="middle"
                    fontStyle="italic"
                >
                    θ
                </text>

                {/* Where the cable crosses the rim of the circle */}
                <circle cx={rimX} cy={rimY} r={4.5} fill="#94a3b8" />
                {/* The sliding bar on the rail */}
                <circle cx={railX} cy={railTopY} r={6} fill={SEC_COLOR} />

                {/* Labels */}
                <text x={(ORIGIN_X + railX) / 2} y={ORIGIN_Y + 20} fontSize={12} fill={BASE_COLOR} textAnchor="middle" fontWeight={700}>
                    base = 1
                </text>
                <text x={railX + 10} y={(ORIGIN_Y + railTopY) / 2 + 4} fontSize={12} fill={TAN_COLOR} textAnchor="start" fontWeight={700}>
                    {`tan θ = ${tanValue.toFixed(2)}`}
                </text>
                <text
                    x={(ORIGIN_X + railX) / 2 - 14}
                    y={(ORIGIN_Y + railTopY) / 2 - 6}
                    fontSize={12}
                    fill={SEC_COLOR}
                    textAnchor="end"
                    fontWeight={700}
                >
                    {`sec θ = ${secValue.toFixed(2)}`}
                </text>

                <text x={165} y={288} fontSize={13} fill="#334155" textAnchor="middle" fontWeight={600}>
                    {`1 + ${(tanValue * tanValue).toFixed(2)} = ${(secValue * secValue).toFixed(2)}`}
                </text>
            </svg>

            <div className="mx-auto mt-3 flex max-w-[560px] items-center gap-4">
                <span className="w-16 shrink-0 text-sm text-slate-600">Angle θ</span>
                <Slider
                    value={[angle]}
                    min={10}
                    max={65}
                    step={1}
                    onValueChange={(value) => setVar("tangentRailAngle", value[0])}
                    className="flex-1"
                />
                <span className="w-12 shrink-0 text-right text-sm font-medium text-slate-700">{angle}°</span>
            </div>
        </div>
    );
};
