import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { VisualOptionCards } from "@/components/organisms";

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
                <InlineFormula latex="(\sin\theta)^2" />: take the sine first, then square the
                answer. It is not <InlineFormula latex="\sin(\theta^2)" />, which would square the
                angle before taking any sine at all. At{" "}
                <InlineFormula latex="\theta = 30^\circ" /> the first gives 0.25 and the second
                gives roughly 0.016 &mdash; nowhere near each other.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-sin-squared-geometry" maxWidth="xl">
        <Block id="sin-squared-geometry" padding="sm">
            <EditableParagraph id="para-sin-squared-geometry" blockId="sin-squared-geometry">
                The squaring has a shape. Build a square on each of the two shorter sides of the
                triangle, the way you would tile a Lego plate: one square of side{" "}
                <InlineFormula latex="\sin\theta" />, one of side{" "}
                <InlineFormula latex="\cos\theta" />. Together they tile exactly one unit square.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-sin-squared-visual" maxWidth="xl">
        <Block id="sin-squared-visual" padding="sm">
            <VisualOptionCards
                blockId="sin-squared-visual"
                intro="Pick how your students will see what squaring a sine actually does."
                cards={[
                    {
                        id: "areas-tile-unit-square",
                        title: "Two squares built on the triangle's sides, filling one unit square",
                        looks: "The triangle inside the circle with a shaded square growing out of each shorter side, and a separate unit square that the two areas pour into.",
                        manipulate: "Turn the angle and watch one square swell as the other shrinks",
                        reveals: "The two areas always fill the unit square exactly, which is the identity as a picture rather than a formula",
                        recommended: true,
                    },
                    {
                        id: "two-readings-compared",
                        title: "A side-by-side comparison of the two ways students read the notation",
                        looks: "Two labelled tracks for the same angle: one squares the sine value, the other squares the angle first, each showing its running result.",
                        manipulate: "Change the angle and compare the two results at each step",
                        reveals: "Squaring the angle instead of the sine gives a completely different number, so the order of operations matters",
                        targetsMisconception: "Students read sin squared theta as the sine of theta squared",
                    },
                    {
                        id: "area-bar-tug-of-war",
                        title: "A single bar of length one split between the two squared areas",
                        looks: "One bar representing an area of 1, divided into a sine-squared portion and a cosine-squared portion, each labelled with its value.",
                        manipulate: "Turn the angle and watch the split slide back and forth",
                        reveals: "The two squared values share a fixed total of 1, so knowing one immediately gives the other",
                    },
                ]}
            />
        </Block>
    </StackLayout>,
];
