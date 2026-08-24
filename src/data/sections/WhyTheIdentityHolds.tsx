import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { VisualOptionCards } from "@/components/organisms";

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
                <InlineFormula latex="90^\circ" />, but the turntable keeps spinning past it. Once{" "}
                <InlineFormula latex="\theta" /> passes <InlineFormula latex="90^\circ" /> a
                coordinate turns negative. Squaring a negative gives a positive, so the total is
                untouched. Does the identity really survive a full turn?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-identity-holds-visual" maxWidth="xl">
        <Block id="identity-holds-visual" padding="sm">
            <VisualOptionCards
                blockId="identity-holds-visual"
                intro="Pick how your students will test the identity beyond 90 degrees."
                cards={[
                    {
                        id: "running-total-all-quadrants",
                        title: "A running total of the two squares as the angle sweeps a full turn",
                        looks: "The unit circle in all four quadrants with the point marked, beside a live sum showing the value of each squared term and their total.",
                        manipulate: "Sweep the angle through all four quadrants and watch the two squared values trade size",
                        reveals: "One term shrinks exactly as much as the other grows, so the total stays pinned at 1 even where a coordinate is negative",
                        targetsMisconception: "Students think the identity only works for angles inside a right-angled triangle",
                        recommended: true,
                    },
                    {
                        id: "quadrant-sign-grid",
                        title: "Four matching triangles, one per quadrant, with their signs shown",
                        looks: "The circle split into quadrants, each showing the same triangle reflected, with the sign of each coordinate labelled.",
                        manipulate: "Step from one quadrant to the next and compare the signs and the squared values",
                        reveals: "Only the signs change between quadrants; the squared lengths, and therefore the sum, are identical",
                        targetsMisconception: "Students think sine and cosine can never be negative",
                    },
                    {
                        id: "stacked-bar-sum",
                        title: "Two stacked bars whose combined height never changes",
                        looks: "A bar for the sine-squared value stacked on a bar for the cosine-squared value, next to the turning circle, with a fixed line drawn at height 1.",
                        manipulate: "Turn the angle and watch the two bars swap heights",
                        reveals: "The stack always reaches the line at 1, no matter which quadrant the angle is in",
                    },
                ]}
            />
        </Block>
    </StackLayout>,
];
