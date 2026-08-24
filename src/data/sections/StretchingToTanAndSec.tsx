import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { VisualOptionCards } from "@/components/organisms";

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
            <EditableParagraph id="para-tan-sec-scaling" blockId="tan-sec-scaling">
                Divide every term of <InlineFormula latex="\sin^2\theta + \cos^2\theta = 1" /> by{" "}
                <InlineFormula latex="\cos^2\theta" />. Algebraically that is one line; in the
                picture it is a rescaling, stretching the triangle until its horizontal side has
                length 1 instead of <InlineFormula latex="\cos\theta" />.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tan-sec-formula" maxWidth="xl">
        <Block id="tan-sec-formula" padding="lg">
            <FormulaBlock latex="1 + \tan^2\theta = \sec^2\theta" />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tan-sec-hook" maxWidth="xl">
        <Block id="tan-sec-hook" padding="sm">
            <EditableParagraph id="para-tan-sec-hook" blockId="tan-sec-hook">
                A gym cable running from the pulley at the origin, past the rim of the circle, to
                a bar sliding along a vertical rail: the rail sits at{" "}
                <InlineFormula latex="x = 1" />, the cable length is{" "}
                <InlineFormula latex="\sec\theta" /> and its height on the rail is{" "}
                <InlineFormula latex="\tan\theta" />. Where does the 1 in the identity come from?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-tan-sec-visual" maxWidth="xl">
        <Block id="tan-sec-visual" padding="sm">
            <VisualOptionCards
                blockId="tan-sec-visual"
                intro="Pick how your students will see tan and sec on the same diagram."
                cards={[
                    {
                        id: "tangent-line-segments",
                        title: "The tangent and secant as two lengths on a vertical rail at x = 1",
                        looks: "The unit circle with a vertical line at x = 1; a ray from the centre through the rim meets that line, giving a height labelled tan and a slanted length labelled sec.",
                        manipulate: "Turn the angle and watch both lengths grow as the ray sweeps upward",
                        reveals: "The base of 1, the height tan and the slant sec form a right-angled triangle, so Pythagoras gives the identity directly",
                        recommended: true,
                    },
                    {
                        id: "scaled-triangle-overlay",
                        title: "The original triangle scaled up until its base is 1",
                        looks: "The small triangle inside the circle shown next to an enlarged copy of itself, with matching sides labelled before and after the scaling.",
                        manipulate: "Slide between the original and the enlarged triangle and compare the labels on each side",
                        reveals: "Dividing every side by cos is the same as enlarging the triangle, which turns one identity into the other",
                    },
                    {
                        id: "three-identity-tabs",
                        title: "One circle, three tabs, three identities from the same triangle",
                        looks: "A single unit-circle diagram with tabs that relabel its sides for the sine-cosine, the tan-sec and the cot-cosec versions.",
                        manipulate: "Switch tabs to see which side is set to 1 each time",
                        reveals: "All three identities are the same right-angled triangle with a different side chosen as the unit",
                    },
                ]}
            />
        </Block>
    </StackLayout>,
];
