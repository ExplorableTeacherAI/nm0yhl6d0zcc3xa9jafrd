import { useEffect, useState } from "react";
import { Button, Slider } from "@/components/atoms";
import { useVar, useSetVar } from "@/stores";

const CENTER_X = 175;
const CENTER_Y = 175;
const RADIUS = 125;

const SIN_COLOR = "#e11d48";
const COS_COLOR = "#0891b2";

const quadrantName = (angle: number): string => {
    if (angle < 90) return "Quadrant 1";
    if (angle < 180) return "Quadrant 2";
    if (angle < 270) return "Quadrant 3";
    return "Quadrant 4";
};

const signWord = (value: number): string => (value < 0 ? "negative" : "positive");

/** Unit circle in all four quadrants with a live running total of the two squares. */
export const IdentityRunningTotal = () => {
    const angle = useVar("identitySweepAngle", 130) as number;
    const setVar = useSetVar();
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (!playing) return undefined;
        const timer = setTimeout(() => {
            setVar("identitySweepAngle", (angle + 2) % 360);
        }, 45);
        return () => clearTimeout(timer);
    }, [playing, angle, setVar]);

    const radians = (angle * Math.PI) / 180;
    const cosValue = Math.cos(radians);
    const sinValue = Math.sin(radians);
    const cosSquared = cosValue * cosValue;
    const sinSquared = sinValue * sinValue;

    const pointX = CENTER_X + RADIUS * cosValue;
    const pointY = CENTER_Y - RADIUS * sinValue;

    return (
        <div className="w-full">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-center">
                <svg
                    viewBox="0 0 350 350"
                    className="h-auto w-full max-w-[330px] shrink-0"
                    role="img"
                    aria-label="Unit circle showing the point in all four quadrants"
                >
                    {/* Quadrant shading */}
                    <rect x={CENTER_X} y={CENTER_Y - RADIUS} width={RADIUS} height={RADIUS} fill="#f1f5f9" />
                    <rect x={CENTER_X - RADIUS} y={CENTER_Y} width={RADIUS} height={RADIUS} fill="#f1f5f9" />

                    {/* Axes */}
                    <line x1={CENTER_X - RADIUS - 20} y1={CENTER_Y} x2={CENTER_X + RADIUS + 20} y2={CENTER_Y} stroke="#cbd5e1" strokeWidth={1.5} />
                    <line x1={CENTER_X} y1={CENTER_Y - RADIUS - 20} x2={CENTER_X} y2={CENTER_Y + RADIUS + 20} stroke="#cbd5e1" strokeWidth={1.5} />

                    {/* Circle */}
                    <circle cx={CENTER_X} cy={CENTER_Y} r={RADIUS} fill="none" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="4 4" />

                    {/* Triangle */}
                    <polygon
                        points={`${CENTER_X},${CENTER_Y} ${pointX},${CENTER_Y} ${pointX},${pointY}`}
                        fill="#6366f1"
                        fillOpacity={0.08}
                    />
                    <line x1={CENTER_X} y1={CENTER_Y} x2={pointX} y2={CENTER_Y} stroke={COS_COLOR} strokeWidth={4} strokeLinecap="round" />
                    <line x1={pointX} y1={CENTER_Y} x2={pointX} y2={pointY} stroke={SIN_COLOR} strokeWidth={4} strokeLinecap="round" />
                    <line x1={CENTER_X} y1={CENTER_Y} x2={pointX} y2={pointY} stroke="#4f46e5" strokeWidth={3} strokeLinecap="round" />
                    <circle cx={pointX} cy={pointY} r={6} fill="#4f46e5" />

                    {/* Quadrant marker */}
                    <text x={CENTER_X} y={22} fontSize={13} fill="#475569" textAnchor="middle" fontWeight={600}>
                        {`${quadrantName(angle)} — θ = ${angle}°`}
                    </text>
                </svg>

                <div className="w-full max-w-[330px] rounded-xl border border-slate-200 bg-white p-4">
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                            <span style={{ color: COS_COLOR }} className="font-medium">
                                cos θ
                            </span>
                            <span className="tabular-nums text-slate-700">
                                {cosValue.toFixed(3)} ({signWord(cosValue)})
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span style={{ color: SIN_COLOR }} className="font-medium">
                                sin θ
                            </span>
                            <span className="tabular-nums text-slate-700">
                                {sinValue.toFixed(3)} ({signWord(sinValue)})
                            </span>
                        </div>
                    </div>

                    <div className="my-3 h-px bg-slate-200" />

                    <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                            <span style={{ color: SIN_COLOR }} className="font-medium">
                                sin²θ
                            </span>
                            <span className="tabular-nums text-slate-700">{sinSquared.toFixed(3)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span style={{ color: COS_COLOR }} className="font-medium">
                                cos²θ
                            </span>
                            <span className="tabular-nums text-slate-700">{cosSquared.toFixed(3)}</span>
                        </div>
                    </div>

                    {/* Stacked bar: the two squares always fill the same total */}
                    <div className="mt-4">
                        <div className="flex h-7 w-full overflow-hidden rounded-md border border-slate-300">
                            <div
                                className="h-full"
                                style={{ width: `${sinSquared * 100}%`, backgroundColor: SIN_COLOR }}
                            />
                            <div
                                className="h-full"
                                style={{ width: `${cosSquared * 100}%`, backgroundColor: COS_COLOR }}
                            />
                        </div>
                        <div className="mt-1 flex justify-between text-xs text-slate-500">
                            <span>0</span>
                            <span>total = 1</span>
                        </div>
                    </div>

                    <div className="mt-4 rounded-lg bg-emerald-50 px-3 py-2 text-center text-sm font-semibold text-emerald-800">
                        sin²θ + cos²θ = {(sinSquared + cosSquared).toFixed(3)}
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-5 flex max-w-[690px] items-center gap-4">
                <span className="w-16 shrink-0 text-sm text-slate-600">Angle θ</span>
                <Slider
                    value={[angle]}
                    min={0}
                    max={359}
                    step={1}
                    onValueChange={(value) => setVar("identitySweepAngle", value[0])}
                    className="flex-1"
                />
                <span className="w-12 shrink-0 text-right text-sm font-medium text-slate-700">{angle}°</span>
                <Button size="sm" variant="outline" onClick={() => setPlaying((value) => !value)}>
                    {playing ? "Pause" : "Sweep"}
                </Button>
            </div>
        </div>
    );
};
