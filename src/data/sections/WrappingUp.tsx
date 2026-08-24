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

    <StackLayout key="layout-wrapping-up-can-do" maxWidth="xl">
        <Block id="wrapping-up-can-do" padding="sm">
            <EditableParagraph id="para-wrapping-up-can-do" blockId="wrapping-up-can-do" className="pl-6 -indent-6">
                <span className="mr-2 text-slate-400">&bull;</span>
                You can place any angle on the unit circle and say why{" "}
                <InlineFormula latex="\sin^2\theta + \cos^2\theta = 1" /> &mdash; no memorised rule
                needed.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-wrapping-up-pythagoras" maxWidth="xl">
        <Block id="wrapping-up-pythagoras" padding="sm">
            <EditableParagraph id="para-wrapping-up-pythagoras" blockId="wrapping-up-pythagoras" className="pl-6 -indent-6">
                <span className="mr-2 text-slate-400">&bull;</span>
                It is{" "}
                <strong className="font-semibold text-slate-900">
                    Pythagoras on a triangle whose hypotenuse is 1
                </strong>
                , and <strong className="font-semibold text-slate-900">squaring</strong> is what
                makes the negative coordinates past <InlineFormula latex="90^\circ" /> stop
                mattering.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-wrapping-up-one-diagram" maxWidth="xl">
        <Block id="wrapping-up-one-diagram" padding="sm">
            <EditableParagraph id="para-wrapping-up-one-diagram" blockId="wrapping-up-one-diagram" className="pl-6 -indent-6">
                <span className="mr-2 text-slate-400">&bull;</span>
                <strong className="font-semibold text-slate-900">
                    One diagram carried all three identities
                </strong>
                : change which side you call 1 and the same triangle gives{" "}
                <InlineFormula latex="1 + \tan^2\theta = \sec^2\theta" /> and its cot&ndash;cosec
                partner.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-wrapping-up-next" maxWidth="xl">
        <Block id="wrapping-up-next" padding="sm">
            <EditableParagraph id="para-wrapping-up-next" blockId="wrapping-up-next" className="pl-6 -indent-6">
                <span className="mr-2 text-slate-400">&bull;</span>
                Next: using these identities to simplify expressions and solve trigonometric
                equations, where the identity becomes the tool rather than the destination.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
