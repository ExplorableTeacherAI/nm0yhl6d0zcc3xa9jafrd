import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import {
    EditableH1,
    EditableParagraph,
    InlineFormula,
} from "@/components/atoms";
import { TurntableIllustration } from "./visuals/TurntableIllustration";

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
            <EditableParagraph id="para-unit-circle-opening" blockId="unit-circle-opening">
                <span className="mr-2 text-slate-400">&bull;</span>
                Spin a Lego minifigure on a round baseplate: it stays{" "}
                <strong className="font-semibold text-slate-900">one stud-length from the centre</strong>,
                yet its position keeps changing.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-unit-circle-two-numbers" maxWidth="xl">
        <Block id="unit-circle-two-numbers" padding="sm">
            <EditableParagraph id="para-unit-circle-two-numbers" blockId="unit-circle-two-numbers">
                <span className="mr-2 text-slate-400">&bull;</span>
                Two numbers pin it down: how far across it has moved (the{" "}
                <strong className="font-semibold text-slate-900">cosine</strong>) and how far up
                (the <strong className="font-semibold text-slate-900">sine</strong>) of the turn
                angle.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-unit-circle-illustration" maxWidth="xl">
        <Block id="unit-circle-illustration" padding="sm" hasVisualization>
            <TurntableIllustration />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-unit-circle-promise" maxWidth="xl">
        <Block id="unit-circle-promise" padding="sm">
            <EditableParagraph id="para-unit-circle-promise" blockId="unit-circle-promise">
                <span className="mr-2 text-slate-400">&bull;</span>
                By the end you will explain,{" "}
                <strong className="font-semibold text-slate-900">from the picture alone</strong>,
                why <InlineFormula latex="\sin^2\theta + \cos^2\theta = 1" /> for every angle.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-unit-circle-related" maxWidth="xl">
        <Block id="unit-circle-related" padding="sm">
            <EditableParagraph id="para-unit-circle-related" blockId="unit-circle-related">
                <span className="mr-2 text-slate-400">&bull;</span>
                The same diagram hands you the identities involving{" "}
                <InlineFormula latex="\tan\theta" /> and <InlineFormula latex="\sec\theta" />.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-unit-circle-prerequisites" maxWidth="xl">
        <Block id="unit-circle-prerequisites" padding="sm">
            <EditableParagraph id="para-unit-circle-prerequisites" blockId="unit-circle-prerequisites">
                <span className="mr-2 text-slate-400">&bull;</span>
                You already have what you need: right-angled triangle ratios, Pythagoras&rsquo;
                theorem, plotting points, and rearranging an equation.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
