import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { IdentityRunningTotal } from "./visuals/IdentityRunningTotal";
import { PracticeQuestions } from "./shared/PracticeQuestions";

export const whyTheIdentityHoldsBlocks: ReactElement[] = [
    <StackLayout key="layout-identity-holds-heading" maxWidth="xl">
        <Block id="identity-holds-heading" padding="md">
            <EditableH2 id="h2-identity-holds-heading" blockId="identity-holds-heading">
                Why the Identity Always Holds
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-identity-holds-derivation" maxWidth="xl">
        <Block id="identity-holds-derivation" padding="sm">
            <EditableParagraph
                id="para-identity-holds-derivation"
                blockId="identity-holds-derivation"
            >
                Apply Pythagoras to the horizontal side, the vertical side and the radius. The
                two shorter sides measure <InlineFormula latex="\cos\theta" /> and{" "}
                <InlineFormula latex="\sin\theta" />, and the radius is 1.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-identity-holds-formula" maxWidth="xl">
        <Block id="identity-holds-formula" padding="lg">
            <FormulaBlock latex="\sin^2\theta + \cos^2\theta = 1" />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-identity-holds-quadrants" maxWidth="xl">
        <Block id="identity-holds-quadrants" padding="sm">
            <EditableParagraph
                id="para-identity-holds-quadrants"
                blockId="identity-holds-quadrants"
            >
                A right-angled triangle can only hold an angle below{" "}
                <InlineFormula latex="90^\circ" />, but the turntable keeps spinning past it. Sweep
                the angle below through all four quadrants and watch the two squared values trade
                size against a total that will not budge.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-identity-holds-visual" maxWidth="xl">
        <Block id="identity-holds-visual" padding="sm" hasVisualization>
            <IdentityRunningTotal />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-identity-holds-signs" maxWidth="xl">
        <Block id="identity-holds-signs" padding="sm">
            <EditableParagraph id="para-identity-holds-signs" blockId="identity-holds-signs">
                Past <InlineFormula latex="90^\circ" /> a coordinate turns negative, yet squaring
                it throws the sign away. The identity holds for every angle, not only the ones a
                right-angled triangle can contain.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-identity-holds-practice" maxWidth="xl">
        <Block id="identity-holds-practice" padding="md">
            <PracticeQuestions
                questions={[
                    {
                        id: "identity-holds-obtuse",
                        prompt: (
                            <span>
                                At <InlineFormula latex="\theta = 210^\circ" /> both coordinates of
                                the point are negative. What is{" "}
                                <InlineFormula latex="\sin^2\theta + \cos^2\theta" /> there?
                            </span>
                        ),
                        choices: [
                            { id: "equals-one", label: "1", correct: true },
                            {
                                id: "equals-minus-one",
                                label: "−1",
                                feedback:
                                    "Squaring a negative number gives a positive result, so neither term can drag the total below zero. Sweep to 210° and read the two squared values.",
                            },
                            {
                                id: "equals-zero",
                                label: "0",
                                feedback:
                                    "The two negatives do not cancel, because both are squared first. Sweep to 210° and compare the two squared values with the total.",
                            },
                            {
                                id: "undefined-no-triangle",
                                label: "It is undefined — 210° will not fit inside a right-angled triangle",
                                feedback:
                                    "That is the belief that the identity only lives inside a right-angled triangle. Sweep past 180° and watch the total: it never leaves 1, because the triangle in the picture just flips into another quadrant.",
                            },
                        ],
                        correctFeedback:
                            "Correct — the sides still have lengths |cos θ| and |sin θ| with a hypotenuse of 1, so Pythagoras still applies. The negative signs vanish the moment you square.",
                        hints: [
                            "Sweep the angle to 210° and read the two squared values in the panel, then add them.",
                            "The triangle is still there in the third quadrant, just pointing the other way. Its sides are still 1, and squaring removes every minus sign.",
                        ],
                    },
                    {
                        id: "identity-holds-find-sine",
                        prompt: (
                            <span>
                                An angle in the second quadrant has{" "}
                                <InlineFormula latex="\cos\theta = -0.28" />. Find{" "}
                                <InlineFormula latex="\sin\theta" /> to two decimal places.
                            </span>
                        ),
                        numericAnswer: 0.96,
                        tolerance: 0.02,
                        placeholder: "e.g. -0.45",
                        correctFeedback:
                            "Correct — sin²θ = 1 − 0.0784 = 0.9216, so sin θ = ±0.96, and the second quadrant sits above the x-axis, which fixes the sign as positive.",
                        hints: [
                            "Substitute into sin²θ + cos²θ = 1 and make sin²θ the subject first.",
                            "sin²θ = 1 − (−0.28)² = 0.9216. Now take the square root — and use the panel above to decide whether sin θ is positive or negative in the second quadrant.",
                            "The square root of 0.9216 is 0.96, and in the second quadrant the point is above the axis, so sin θ = 0.96.",
                        ],
                    },
                    {
                        id: "identity-holds-not-linear",
                        prompt: (
                            <span>
                                A classmate claims that because the squares add to 1, it must be
                                that <InlineFormula latex="\sin\theta + \cos\theta = 1" /> too.
                                Test it at <InlineFormula latex="\theta = 45^\circ" />: what is{" "}
                                <InlineFormula latex="\sin 45^\circ + \cos 45^\circ" /> to two
                                decimal places?
                            </span>
                        ),
                        numericAnswer: 1.41,
                        tolerance: 0.02,
                        placeholder: "e.g. 1.00",
                        correctFeedback:
                            "Correct — 0.71 + 0.71 = 1.41, not 1. One counter-example is enough to sink the claim: it is the squares that add to 1, never the values themselves.",
                        hints: [
                            "Set the angle to 45° above and read cos θ and sin θ from the panel, then add those two numbers, not their squares.",
                            "At 45° both values are about 0.707. Add them and compare the result with 1.",
                        ],
                    },
                ]}
            />
        </Block>
    </StackLayout>,
];
