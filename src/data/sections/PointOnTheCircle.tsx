import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { VisualOptionCards } from "@/components/organisms";

export const pointOnTheCircleBlocks: ReactElement[] = [
    <StackLayout key="layout-point-circle-heading" maxWidth="xl">
        <Block id="point-circle-heading" padding="md">
            <EditableH2 id="h2-point-circle-heading" blockId="point-circle-heading">
                A Point on the Circle
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-point-circle-setup" maxWidth="xl">
        <Block id="point-circle-setup" padding="sm">
            <EditableParagraph id="para-point-circle-setup" blockId="point-circle-setup">
                Put the turntable on a set of axes, centre at the origin, radius exactly 1. Mark
                the turn angle <InlineFormula latex="\theta" /> from the positive{" "}
                <InlineFormula latex="x" />-axis, going anticlockwise. The minifigure now sits at
                a point with coordinates <InlineFormula latex="(\cos\theta, \sin\theta)" />.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-point-circle-hook" maxWidth="xl">
        <Block id="point-circle-hook" padding="sm">
            <EditableParagraph id="para-point-circle-hook" blockId="point-circle-hook">
                That is not a new definition, it is the old one in disguise: with a hypotenuse of
                1, <InlineFormula latex="\cos\theta = \frac{\text{adjacent}}{1}" /> is simply the
                horizontal distance, and <InlineFormula latex="\sin\theta" /> the vertical one. So
                what happens to those two numbers as the angle turns?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-point-circle-visual" maxWidth="xl">
        <Block id="point-circle-visual" padding="sm">
            <VisualOptionCards
                blockId="point-circle-visual"
                intro="Pick how your students will meet the point on the unit circle."
                cards={[
                    {
                        id: "angle-dial-with-coordinates",
                        title: "A dial that turns the angle, with the point's coordinates shown live",
                        looks: "A circle of radius 1 on x-y axes with a marked point on the rim, a radius line drawn to it, and its coordinates displayed as a decimal pair beside it.",
                        manipulate: "Drag a slider to turn the angle from 0 all the way round to 360 degrees",
                        reveals: "The x-coordinate is always cos of the angle and the y-coordinate is always sin of the angle",
                        recommended: true,
                    },
                    {
                        id: "shadow-projection",
                        title: "The point casting a shadow onto each axis as it turns",
                        looks: "The same circle, with a dropped vertical line onto the x-axis and a horizontal line onto the y-axis, each shadow labelled with its length.",
                        manipulate: "Turn the angle and watch the two shadow lengths stretch and shrink",
                        reveals: "Cosine is the horizontal shadow and sine is the vertical shadow, and they never both get long at once",
                    },
                    {
                        id: "triangle-inside-circle",
                        title: "The right-angled triangle that appears inside the circle",
                        looks: "A radius of length 1 as the hypotenuse, with the horizontal and vertical sides completing a right-angled triangle, all three sides labelled.",
                        manipulate: "Turn the angle and watch the triangle change shape while the hypotenuse stays at 1",
                        reveals: "The familiar SOHCAHTOA triangle is hiding inside the circle, with the hypotenuse fixed at 1",
                    },
                ]}
            />
        </Block>
    </StackLayout>,
];
