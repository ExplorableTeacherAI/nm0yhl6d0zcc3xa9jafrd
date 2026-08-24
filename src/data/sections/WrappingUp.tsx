import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";

export const wrappingUpBlocks: ReactElement[] = [
    <StackLayout key="layout-wrapping-up-heading" maxWidth="xl">
        <Block id="wrapping-up-heading" padding="md">
            <EditableH2 id="h2-wrapping-up-heading" blockId="wrapping-up-heading">
                Wrapping Up
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-wrapping-up-summary" maxWidth="xl">
        <Block id="wrapping-up-summary" padding="sm">
            <EditableParagraph id="para-wrapping-up-summary" blockId="wrapping-up-summary">
                You can now take any angle, place it on the unit circle, and say why{" "}
                <InlineFormula latex="\sin^2\theta + \cos^2\theta = 1" /> without quoting a rule
                you were told to memorise. It is Pythagoras on a triangle whose hypotenuse happens
                to be 1, and squaring is what makes the negative coordinates past{" "}
                <InlineFormula latex="90^\circ" /> stop mattering.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-wrapping-up-forward" maxWidth="xl">
        <Block id="wrapping-up-forward" padding="sm">
            <EditableParagraph id="para-wrapping-up-forward" blockId="wrapping-up-forward">
                The bigger idea is that one diagram carried all three identities: change which
                side you call 1, and the same triangle hands you{" "}
                <InlineFormula latex="1 + \tan^2\theta = \sec^2\theta" /> and its partner with cot
                and cosec. That is the picture you should reach for whenever an identity looks
                unfamiliar. Next you will use these to simplify expressions and solve trigonometric
                equations, where the identity becomes the tool rather than the destination.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
