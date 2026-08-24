import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { UnitCircleTriangle } from "./visuals/UnitCircleTriangle";
import { PracticeQuestions } from "./shared/PracticeQuestions";

export const pointOnTheCircleBlocks: ReactElement[] = [
    <StackLayout key="layout-point-circle-heading" maxWidth="xl">
        <Block id="point-circle-heading" padding="md">
            <EditableH2 id="h2-point-circle-heading" blockId="point-circle-heading">
                A Point on the Circle
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-point-circle-axes" maxWidth="xl">
        <Block id="point-circle-axes" padding="sm">
            <EditableParagraph id="para-point-circle-axes" blockId="point-circle-axes">
                <span className="mr-2 text-slate-400">&bull;</span>
                Axes with the centre at the origin and a <strong className="font-semibold text-slate-900">radius of exactly 1</strong>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-point-circle-angle" maxWidth="xl">
        <Block id="point-circle-angle" padding="sm">
            <EditableParagraph id="para-point-circle-angle" blockId="point-circle-angle">
                <span className="mr-2 text-slate-400">&bull;</span>
                The turn angle <InlineFormula latex="\theta" /> is measured from the positive{" "}
                <InlineFormula latex="x" />-axis, going <strong className="font-semibold text-slate-900">anticlockwise</strong>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-point-circle-setup" maxWidth="xl">
        <Block id="point-circle-setup" padding="sm">
            <EditableParagraph id="para-point-circle-setup" blockId="point-circle-setup">
                <span className="mr-2 text-slate-400">&bull;</span>
                The minifigure stands at the point <InlineFormula latex="(\cos\theta, \sin\theta)" />.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-point-circle-hook" maxWidth="xl">
        <Block id="point-circle-hook" padding="sm">
            <EditableParagraph id="para-point-circle-hook" blockId="point-circle-hook">
                <span className="mr-2 text-slate-400">&bull;</span>
                Drop a vertical line to the <InlineFormula latex="x" />-axis and the old{" "}
                <strong className="font-semibold text-slate-900">right-angled triangle</strong> appears, with the radius as its <strong className="font-semibold text-slate-900">hypotenuse</strong>. Drag the
                angle below.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-point-circle-visual" maxWidth="xl">
        <Block id="point-circle-visual" padding="sm" hasVisualization>
            <UnitCircleTriangle />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-point-circle-reading" maxWidth="xl">
        <Block id="point-circle-reading" padding="sm">
            <EditableParagraph id="para-point-circle-reading" blockId="point-circle-reading">
                <span className="mr-2 text-slate-400">&bull;</span>
                The two shorter sides keep changing, but the <strong className="font-semibold text-slate-900">hypotenuse never leaves 1</strong>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-point-circle-ratios" maxWidth="xl">
        <Block id="point-circle-ratios" padding="sm">
            <EditableParagraph id="para-point-circle-ratios" blockId="point-circle-ratios">
                <span className="mr-2 text-slate-400">&bull;</span>
                So SOHCAHTOA collapses: <InlineFormula latex="\cos\theta" /> is just the{" "}
                <strong className="font-semibold text-slate-900">horizontal side</strong> and <InlineFormula latex="\sin\theta" /> just the{" "}
                <strong className="font-semibold text-slate-900">vertical one</strong>, read straight off the axes.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-point-circle-practice" maxWidth="xl">
        <Block id="point-circle-practice" padding="md">
            <PracticeQuestions
                questions={[
                    {
                        id: "point-circle-quadrant",
                        prompt: (
                            <span>
                                The angle is turned to <InlineFormula latex="160^\circ" />. What is
                                true of the point&rsquo;s coordinates there?
                            </span>
                        ),
                        choices: [
                            {
                                id: "x-negative-y-positive",
                                label: "The x-coordinate is negative and the y-coordinate is positive",
                                correct: true,
                            },
                            {
                                id: "both-positive",
                                label: "Both coordinates are positive",
                                feedback:
                                    "Both are only positive in the first quarter turn. Set the angle to 160° above and look at which side of the y-axis the point has moved to.",
                            },
                            {
                                id: "both-negative",
                                label: "Both coordinates are negative",
                                feedback:
                                    "Check the height of the point. Set the angle to 160° above — is the point above or below the x-axis?",
                            },
                            {
                                id: "x-positive-y-negative",
                                label: "The x-coordinate is positive and the y-coordinate is negative",
                                feedback:
                                    "That describes a point below and to the right. Turn the dial to 160° and watch which way the point has travelled.",
                            },
                        ],
                        correctFeedback:
                            "Correct — past 90° the point crosses to the left of the y-axis, so the horizontal side runs backwards and cos θ is negative, while the point is still above the axis so sin θ stays positive.",
                        hints: [
                            "Turn the dial past 90° and stop at 160°. Compare the point's position to the origin: left or right, above or below?",
                            "At 160° the point sits above the x-axis but to the left of the y-axis, so one coordinate is positive and the other negative.",
                        ],
                    },
                    {
                        id: "point-circle-bigger-turntable",
                        prompt: (
                            <span>
                                The minifigure is moved to a turntable of radius 3 instead of 1. At
                                the same angle <InlineFormula latex="\theta" />, where does it
                                stand?
                            </span>
                        ),
                        choices: [
                            {
                                id: "scaled-coordinates",
                                label: (
                                    <InlineFormula latex="(3\cos\theta,\ 3\sin\theta)" />
                                ),
                                correct: true,
                            },
                            {
                                id: "scaled-angle",
                                label: <InlineFormula latex="(\cos 3\theta,\ \sin 3\theta)" />,
                                feedback:
                                    "The angle has not changed — only the size of the circle. Which part of the triangle above would grow if the hypotenuse were 3?",
                            },
                            {
                                id: "shifted-coordinates",
                                label: (
                                    <InlineFormula latex="(\cos\theta + 3,\ \sin\theta + 3)" />
                                ),
                                feedback:
                                    "Adding 3 would slide the whole circle sideways and upwards. A bigger turntable is an enlargement, not a shift.",
                            },
                            {
                                id: "divided-coordinates",
                                label: (
                                    <InlineFormula latex="\left(\frac{\cos\theta}{3},\ \frac{\sin\theta}{3}\right)" />
                                ),
                                feedback:
                                    "That would make the circle smaller. Check the direction: a radius of 3 is three times bigger than 1.",
                            },
                        ],
                        correctFeedback:
                            "Correct — the triangle is the same shape, just enlarged three times, so both sides are multiplied by 3. That is why the unit circle is worth using: dividing by the radius always brings you back to cos θ and sin θ.",
                        hints: [
                            "Both triangles have the same angle, so they are similar. If the hypotenuse goes from 1 to 3, what happens to the other two sides?",
                            "Every side of a similar triangle is multiplied by the same scale factor — here that factor is 3.",
                        ],
                    },
                    {
                        id: "point-circle-missing-height",
                        prompt: (
                            <span>
                                A point on the unit circle has coordinates{" "}
                                <InlineFormula latex="(-0.6,\ y)" /> and sits above the{" "}
                                <InlineFormula latex="x" />-axis. What is{" "}
                                <InlineFormula latex="y" />?
                            </span>
                        ),
                        numericAnswer: 0.8,
                        tolerance: 0.02,
                        placeholder: "e.g. 0.55",
                        correctFeedback:
                            "Correct — the two sides are 0.6 and y with a hypotenuse of 1, so Pythagoras gives y² = 1 − 0.36 = 0.64 and y = 0.8. You have just used the identity before meeting it.",
                        hints: [
                            "Turn the dial until the horizontal side reads about −0.60, then look at the triangle: which theorem links its three sides?",
                            "The sides are 0.6, y and a hypotenuse of 1. Write down 0.6² + y² = 1² and make y the subject.",
                            "0.36 + y² = 1, so y² = 0.64 and y is the positive square root.",
                        ],
                    },
                ]}
            />
        </Block>
    </StackLayout>,
];
