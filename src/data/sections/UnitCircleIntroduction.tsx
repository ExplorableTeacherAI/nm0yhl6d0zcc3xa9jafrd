import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import {
    EditableH1,
    EditableParagraph,
    InlineFormula,
} from "@/components/atoms";

export const unitCircleIntroductionBlocks: ReactElement[] = [
    <StackLayout key="layout-unit-circle-title" maxWidth="xl">
        <Block id="unit-circle-title" padding="md">
            <EditableH1 id="h1-unit-circle-title" blockId="unit-circle-title">
                The Unit Circle
            </EditableH1>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-unit-circle-opening" maxWidth="xl">
        <Block id="unit-circle-opening" padding="sm">
            <EditableParagraph
                id="para-unit-circle-opening"
                blockId="unit-circle-opening"
            >
                Stand a Lego minifigure on the rim of a round turntable baseplate and spin it
                slowly. The figure is always exactly one stud-length from the centre, yet its
                position on the plate keeps changing. Two numbers describe where it is: how far
                across it has moved, and how far up. Those two numbers are the cosine and the
                sine of the turn angle.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-unit-circle-promise" maxWidth="xl">
        <Block id="unit-circle-promise" padding="sm">
            <EditableParagraph
                id="para-unit-circle-promise"
                blockId="unit-circle-promise"
            >
                By the end of this lesson you will be able to read a point off that circle and
                explain, from the picture alone, why{" "}
                <InlineFormula latex="\sin^2\theta + \cos^2\theta = 1" /> for every angle, and
                how the identities involving <InlineFormula latex="\tan\theta" /> and{" "}
                <InlineFormula latex="\sec\theta" /> fall straight out of the same diagram. You
                already have everything you need: the ratios in a right-angled triangle,
                Pythagoras' theorem, plotting points, and rearranging an equation.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
