import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { TangentSecantRail } from "./visuals/TangentSecantRail";
import { PracticeQuestions } from "./shared/PracticeQuestions";

export const stretchingToTanAndSecBlocks: ReactElement[] = [
    <StackLayout key="layout-tan-sec-heading" maxWidth="xl">
        <Block id="tan-sec-heading" padding="md">
            <EditableH2 id="h2-tan-sec-heading" blockId="tan-sec-heading">
                Stretching to tan and sec
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tan-sec-scaling" maxWidth="xl">
        <Block id="tan-sec-scaling" padding="sm">
            <EditableParagraph id="para-tan-sec-scaling" blockId="tan-sec-scaling" className="pl-6 -indent-6">
                <span className="mr-2 text-slate-400">&bull;</span>
                Divide every term of <InlineFormula latex="\sin^2\theta + \cos^2\theta = 1" /> by{" "}
                <InlineFormula latex="\cos^2\theta" />.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tan-sec-formula" maxWidth="xl">
        <Block id="tan-sec-formula" padding="lg">
            <FormulaBlock latex="1 + \tan^2\theta = \sec^2\theta" />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tan-sec-rescaling" maxWidth="xl">
        <Block id="tan-sec-rescaling" padding="sm">
            <EditableParagraph id="para-tan-sec-rescaling" blockId="tan-sec-rescaling" className="pl-6 -indent-6">
                <span className="mr-2 text-slate-400">&bull;</span>
                In the picture that is a <strong className="font-semibold text-slate-900">rescaling</strong>: stretch the triangle until its horizontal side
                is 1 instead of <InlineFormula latex="\cos\theta" />.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tan-sec-hook" maxWidth="xl">
        <Block id="tan-sec-hook" padding="sm">
            <EditableParagraph id="para-tan-sec-hook" blockId="tan-sec-hook" className="pl-6 -indent-6">
                <span className="mr-2 text-slate-400">&bull;</span>
                Think of a gym cable from a pulley at the origin to a bar sliding on a rail at{" "}
                <InlineFormula latex="x = 1" />: the <strong className="font-semibold text-slate-900">height of the bar</strong> is{" "}
                <InlineFormula latex="\tan\theta" /> and the <strong className="font-semibold text-slate-900">length of the cable</strong> is{" "}
                <InlineFormula latex="\sec\theta" />.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tan-sec-visual" maxWidth="xl">
        <Block id="tan-sec-visual" padding="sm" hasVisualization>
            <TangentSecantRail />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tan-sec-conclusion" maxWidth="xl">
        <Block id="tan-sec-conclusion" padding="sm">
            <EditableParagraph id="para-tan-sec-conclusion" blockId="tan-sec-conclusion" className="pl-6 -indent-6">
                <span className="mr-2 text-slate-400">&bull;</span>
                Base 1, height <InlineFormula latex="\tan\theta" />, cable{" "}
                <InlineFormula latex="\sec\theta" />: <strong className="font-semibold text-slate-900">Pythagoras on those three lengths</strong> is the
                identity.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tan-sec-the-one" maxWidth="xl">
        <Block id="tan-sec-the-one" padding="sm">
            <EditableParagraph id="para-tan-sec-the-one" blockId="tan-sec-the-one" className="pl-6 -indent-6">
                <span className="mr-2 text-slate-400">&bull;</span>
                The 1 in the identity is simply the <strong className="font-semibold text-slate-900">distance out to the rail</strong>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tan-sec-practice" maxWidth="xl">
        <Block id="tan-sec-practice" padding="md">
            <PracticeQuestions
                questions={[
                    {
                        id: "tan-sec-find-secant",
                        prompt: (
                            <span>
                                For an acute angle with <InlineFormula latex="\tan\theta = 2" />,
                                find <InlineFormula latex="\sec\theta" /> to two decimal places.
                            </span>
                        ),
                        numericAnswer: 2.24,
                        tolerance: 0.02,
                        placeholder: "e.g. 1.80",
                        correctFeedback:
                            "Correct — sec²θ = 1 + 4 = 5, so sec θ = √5 = 2.24. In the picture that is the cable stretching to a bar sitting two units up the rail.",
                        hints: [
                            "Slide the angle until the bar height reads about 2.00, then compare the cable length shown beside it.",
                            "Substitute into 1 + tan²θ = sec²θ: 1 + 2² = 5, so sec θ = √5.",
                        ],
                    },
                    {
                        id: "tan-sec-where-the-one-comes-from",
                        prompt: (
                            <span>
                                In <InlineFormula latex="1 + \tan^2\theta = \sec^2\theta" />,
                                where does the 1 come from?
                            </span>
                        ),
                        choices: [
                            {
                                id: "base-of-triangle",
                                label: "It is the base of the triangle — the distance from the centre out to the rail",
                                correct: true,
                            },
                            {
                                id: "tan-45",
                                label: "It is there because tan 45° = 1",
                                feedback:
                                    "The identity holds at every angle, not only 45°. Drag the angle above and check whether the 1 in the picture ever changes.",
                            },
                            {
                                id: "sec-zero",
                                label: "It is there because sec 0° = 1",
                                feedback:
                                    "That is only one particular angle. Look for a length in the diagram that stays equal to 1 no matter how you drag.",
                            },
                            {
                                id: "just-convention",
                                label: "It is just how the formula is written down",
                                feedback:
                                    "Every term in the identity is a length squared. Find the side of the triangle above whose length is 1.",
                            },
                        ],
                        correctFeedback:
                            "Correct — the horizontal side runs from the centre to the rail at x = 1, so squaring it gives the 1. Pythagoras then supplies the rest.",
                        hints: [
                            "The identity is Pythagoras on the triangle above. Which of its three sides never changes length as you drag?",
                            "The horizontal side always reaches from the centre to the rail at x = 1, and 1² = 1.",
                        ],
                    },
                    {
                        id: "tan-sec-simplify-quotient",
                        prompt: (
                            <span>
                                Simplify{" "}
                                <InlineFormula latex="\dfrac{\sec^2\theta - 1}{\tan^2\theta}" />.
                            </span>
                        ),
                        choices: [
                            { id: "one", label: <InlineFormula latex="1" />, correct: true },
                            {
                                id: "tan-squared",
                                label: <InlineFormula latex="\tan^2\theta" />,
                                feedback:
                                    "Rearrange the identity to see what sec²θ − 1 is equal to, then look at what is left in the fraction.",
                            },
                            {
                                id: "sec-squared",
                                label: <InlineFormula latex="\sec^2\theta" />,
                                feedback:
                                    "Deal with the numerator first: subtracting 1 from sec²θ removes the base of the triangle, leaving one of the other squared sides.",
                            },
                            {
                                id: "zero-value",
                                label: <InlineFormula latex="0" />,
                                feedback:
                                    "Check the numerator at a real angle: set the angle above to 40° and compare sec²θ − 1 with tan²θ. Are they equal, or is one of them zero?",
                            },
                        ],
                        correctFeedback:
                            "Correct — rearranging the identity gives sec²θ − 1 = tan²θ, so the fraction is tan²θ divided by itself. Reading the identity backwards is often the quickest move.",
                        hints: [
                            "Make tan²θ the subject of 1 + tan²θ = sec²θ, then substitute that into the numerator.",
                            "sec²θ − 1 = tan²θ, so the fraction becomes tan²θ ÷ tan²θ.",
                        ],
                    },
                ]}
            />
        </Block>
    </StackLayout>,
];
