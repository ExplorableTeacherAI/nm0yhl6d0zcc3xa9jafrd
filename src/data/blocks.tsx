import { type ReactElement } from "react";

// Initialize variables and their colors from this file's variable definitions
import { useVariableStore, initializeVariableColors } from "@/stores";
import { getDefaultValues, variableDefinitions } from "./variables";

import { unitCircleIntroductionBlocks } from "./sections/UnitCircleIntroduction";
import { pointOnTheCircleBlocks } from "./sections/PointOnTheCircle";
import { whyTheIdentityHoldsBlocks } from "./sections/WhyTheIdentityHolds";
import { whatSinSquaredMeansBlocks } from "./sections/WhatSinSquaredMeans";
import { stretchingToTanAndSecBlocks } from "./sections/StretchingToTanAndSec";
import { wrappingUpBlocks } from "./sections/WrappingUp";

useVariableStore.getState().initialize(getDefaultValues());
initializeVariableColors(variableDefinitions);

export const blocks: ReactElement[] = [
    ...unitCircleIntroductionBlocks,
    ...pointOnTheCircleBlocks,
    ...whyTheIdentityHoldsBlocks,
    ...whatSinSquaredMeansBlocks,
    ...stretchingToTanAndSecBlocks,
    ...wrappingUpBlocks,
];
