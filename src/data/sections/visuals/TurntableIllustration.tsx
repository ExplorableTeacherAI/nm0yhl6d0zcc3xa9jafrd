const PLATE_CENTER_X = 200;
const PLATE_CENTER_Y = 175;
const PLATE_RADIUS_X = 145;
const PLATE_RADIUS_Y = 52;
const PLATE_DEPTH = 14;

// Studs laid out in two rings plus the centre, drawn in the same squashed perspective
const studRings = [
    { radius: 0.42, count: 8 },
    { radius: 0.78, count: 14 },
];

const studs = studRings.flatMap((ring, ringIndex) =>
    Array.from({ length: ring.count }, (_, index) => {
        const theta = (index / ring.count) * Math.PI * 2;
        return {
            key: `stud-${ringIndex}-${index}`,
            x: PLATE_CENTER_X + PLATE_RADIUS_X * ring.radius * Math.cos(theta),
            y: PLATE_CENTER_Y + PLATE_RADIUS_Y * ring.radius * Math.sin(theta),
        };
    }),
);

// Where the minifigure stands: on the rim, up and to the right of the centre
const FIGURE_X = 310;
const FIGURE_Y = 138;

/** A Lego minifigure standing on the rim of a turning circular baseplate. */
export const TurntableIllustration = () => (
    <svg
        viewBox="0 0 400 275"
        className="mx-auto block h-auto w-full max-w-[460px]"
        role="img"
        aria-label="A Lego minifigure standing on the rim of a round baseplate that is spinning"
    >
        {/* Plate side wall */}
        <path
            d={`M ${PLATE_CENTER_X - PLATE_RADIUS_X} ${PLATE_CENTER_Y}
                a ${PLATE_RADIUS_X} ${PLATE_RADIUS_Y} 0 0 0 ${PLATE_RADIUS_X * 2} 0
                v ${PLATE_DEPTH}
                a ${PLATE_RADIUS_X} ${PLATE_RADIUS_Y} 0 0 1 ${-PLATE_RADIUS_X * 2} 0 z`}
            fill="#15803d"
        />
        {/* Plate top */}
        <ellipse
            cx={PLATE_CENTER_X}
            cy={PLATE_CENTER_Y}
            rx={PLATE_RADIUS_X}
            ry={PLATE_RADIUS_Y}
            fill="#22c55e"
            stroke="#166534"
            strokeWidth={2}
        />

        {/* Studs */}
        {studs.map((stud) => (
            <ellipse key={stud.key} cx={stud.x} cy={stud.y} rx={7} ry={3} fill="#4ade80" stroke="#16a34a" strokeWidth={1} />
        ))}
        <ellipse cx={PLATE_CENTER_X} cy={PLATE_CENTER_Y} rx={7} ry={3} fill="#4ade80" stroke="#16a34a" strokeWidth={1} />

        {/* Radius from the centre out to the figure */}
        <line
            x1={PLATE_CENTER_X}
            y1={PLATE_CENTER_Y}
            x2={FIGURE_X}
            y2={FIGURE_Y + 4}
            stroke="#1e293b"
            strokeWidth={2}
            strokeDasharray="6 4"
        />
        <circle cx={PLATE_CENTER_X} cy={PLATE_CENTER_Y} r={4} fill="#1e293b" />
        <text x={252} y={148} fontSize={13} fill="#1e293b" textAnchor="middle" fontWeight={700}>
            1
        </text>

        {/* Minifigure standing on the rim */}
        <g>
            {/* legs */}
            <rect x={FIGURE_X - 11} y={FIGURE_Y - 18} width={22} height={18} rx={2} fill="#2563eb" />
            <rect x={FIGURE_X - 1.5} y={FIGURE_Y - 18} width={3} height={18} fill="#1d4ed8" />
            {/* torso */}
            <path
                d={`M ${FIGURE_X - 12} ${FIGURE_Y - 18} L ${FIGURE_X - 9} ${FIGURE_Y - 40}
                    L ${FIGURE_X + 9} ${FIGURE_Y - 40} L ${FIGURE_X + 12} ${FIGURE_Y - 18} z`}
                fill="#dc2626"
            />
            {/* arms */}
            <rect x={FIGURE_X - 19} y={FIGURE_Y - 39} width={8} height={18} rx={3} fill="#b91c1c" transform={`rotate(-12 ${FIGURE_X - 15} ${FIGURE_Y - 30})`} />
            <rect x={FIGURE_X + 11} y={FIGURE_Y - 39} width={8} height={18} rx={3} fill="#b91c1c" transform={`rotate(12 ${FIGURE_X + 15} ${FIGURE_Y - 30})`} />
            {/* neck + head */}
            <rect x={FIGURE_X - 4} y={FIGURE_Y - 45} width={8} height={6} fill="#eab308" />
            <circle cx={FIGURE_X} cy={FIGURE_Y - 54} r={11} fill="#facc15" stroke="#ca8a04" strokeWidth={1.5} />
            <circle cx={FIGURE_X - 4} cy={FIGURE_Y - 56} r={1.6} fill="#3f3f46" />
            <circle cx={FIGURE_X + 4} cy={FIGURE_Y - 56} r={1.6} fill="#3f3f46" />
            <path d={`M ${FIGURE_X - 4} ${FIGURE_Y - 50} q 4 3 8 0`} fill="none" stroke="#3f3f46" strokeWidth={1.5} strokeLinecap="round" />
            {/* head stud */}
            <ellipse cx={FIGURE_X} cy={FIGURE_Y - 65} rx={5} ry={2.5} fill="#facc15" stroke="#ca8a04" strokeWidth={1.2} />
        </g>

        {/* Spin arrow */}
        <path
            d="M 96 96 A 120 46 0 0 1 300 84"
            fill="none"
            stroke="#6366f1"
            strokeWidth={2.5}
            strokeDasharray="7 5"
        />
        <path d="M 300 84 l -12 -5 l 3 10 z" fill="#6366f1" />
        <text x={196} y={70} fontSize={13} fill="#4f46e5" textAnchor="middle" fontWeight={600}>
            the plate turns
        </text>

        <text x={200} y={262} fontSize={12} fill="#64748b" textAnchor="middle">
            One stud-length from the centre, whichever way the plate is turned
        </text>
    </svg>
);
