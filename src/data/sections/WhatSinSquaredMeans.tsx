import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { SquaresOnTheSides } from "./visuals/SquaresOnTheSides";
import { PracticeQuestions } from "./shared/PracticeQuestions";

export const whatSinSquaredMeansBlocks: ReactElement[] = [
    <StackLayout key="layout-sin-squared-heading" maxWidth="xl">
        <Block id="sin-squared-heading" padding="md">
            <EditableH2 id="h2-sin-squared-heading" blockId="sin-squared-heading">
                What sin&sup2;&theta; Really Means
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-sin-squared-notation" maxWidth="xl">
        <Block id="sin-squared-notation" padding="sm">
            <EditableParagraph id="para-sin-squared-notation" blockId="sin-squared-notation">
                <InlineFormula latex="\sin^2\theta" /> is shorthand for{" "}
                <InlineFormula latex="(\sin\theta)^2" />: <strong className="font-semibold text-slate-900">take the sine first, then square the answer</strong>. It is not <InlineFormula latex="\sin(\theta^2)" />, which would <strong className="font-semibold text-slate-900">square the angle first</strong>, before taking any sine at all. At{" "}
                <InlineFormula latex="\theta = 30^\circ" /> the first gives 0.25 and the second
                gives roughly 0.016 &mdash; nowhere near each other.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-sin-squared-geometry" maxWidth="xl">
        <Block id="sin-squared-geometry" padding="sm">
            <EditableParagraph id="para-sin-squared-geometry" blockId="sin-squared-geometry">
                <strong className="font-semibold text-slate-900">The squaring has a shape</strong>. Build a square on each shorter side of the triangle, the
                way you would tile a Lego plate: one of side <InlineFormula latex="\sin\theta" />,
                one of side <InlineFormula latex="\cos\theta" />. Drag the angle and watch the two areas pour into <strong className="font-semibold text-slate-900">a single unit square</strong>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-sin-squared-visual" maxWidth="xl">
        <Block id="sin-squared-visual" padding="sm" hasVisualization>
            <SquaresOnTheSides />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-sin-squared-practice" maxWidth="xl">
        <Block id="sin-squared-practice" padding="md">
            <PracticeQuestions
                questions={[
                    {
                        id: "sin-squared-evaluate",
                        prompt: (
                            <span>
                                Work out <InlineFormula latex="\sin^2 40^\circ" /> to two decimal
                                places.
                            </span>
                        ),
                        numericAnswer: 0.41,
                        tolerance: 0.02,
                        placeholder: "e.g. 0.55",
                        correctFeedback:
                            "Correct — sin 40° = 0.643 first, then square it to get 0.41. That number is the area of the square standing on the shorter vertical side.",
                        hints: [
                            "Do the two steps in the right order: take the sine of 40° first, then square the answer. Setting the angle to 40° above shows you the size to expect.",
                            "sin 40° = 0.643, and 0.643 × 0.643 gives the answer. If you squared 40 first you were reading the notation the wrong way round.",
                        ],
                    },
                    {
                        id: "sin-squared-partner-area",
                        prompt: (
                            <span>
                                For some acute angle, the square on the horizontal side has area{" "}
                                <InlineFormula latex="\cos^2\theta = 0.36" />. What is{" "}
                                <InlineFormula latex="\sin^2\theta" />?
                            </span>
                        ),
                        numericAnswer: 0.64,
                        tolerance: 0.01,
                        placeholder: "e.g. 0.20",
                        correctFeedback:
                            "Correct — the two areas share a fixed total of 1, so one is always 1 minus the other. No angle needed.",
                        hints: [
                            "Look at the unit square above: if one colour takes 0.36 of it, how much is left for the other?",
                            "sin²θ = 1 − cos²θ = 1 − 0.36.",
                        ],
                    },
                    {
                        id: "sin-squared-simplify",
                        prompt: (
                            <span>
                                Simplify <InlineFormula latex="5 - 5\sin^2\theta" /> into a single
                                term.
                            </span>
                        ),
                        choices: [
                            {
                                id: "five-cos-squared",
                                label: <InlineFormula latex="5\cos^2\theta" />,
                                correct: true,
                            },
                            {
                                id: "cos-squared",
                                label: <InlineFormula latex="\cos^2\theta" />,
                                feedback:
                                    "Close — the identity is right but the factor of 5 has gone missing. Take 5 out as a common factor first and keep it there.",
                            },
                            {
                                id: "five-sin-squared",
                                label: <InlineFormula latex="5\sin^2\theta" />,
                                feedback:
                                    "Check which area is left behind. In the unit square above, taking away the sine part leaves the cosine part, not another sine part.",
                            },
                            {
                                id: "zero",
                                label: <InlineFormula latex="0" />,
                                feedback:
                                    "That would need sin²θ to equal 1 for every angle. Drag the angle above and watch how small the sine square can get.",
                            },
                        ],
                        correctFeedback:
                            "Correct — factor out the 5 to get 5(1 − sin²θ), and 1 − sin²θ is exactly the area left over in the unit square, which is cos²θ.",
                        hints: [
                            "Take out the common factor of 5 first, then look at what is inside the bracket.",
                            "5(1 − sin²θ): the bracket is the leftover area in the unit square above. What is that area called?",
                        ],
                    },
                ]}
            />
        </Block>
    </StackLayout>,
];
