import { useState, type ReactNode } from "react";
import {
    Button,
    Input,
    RadioGroup,
    RadioGroupItem,
    Label,
} from "@/components/atoms";

export interface PracticeChoice {
    id: string;
    label: ReactNode;
    correct?: boolean;
    /** Nudge shown when this wrong option is chosen — sends the student back to the visual */
    feedback?: string;
}

export interface PracticeQuestion {
    id: string;
    prompt: ReactNode;
    /** Multiple-choice options (omit when the question expects a typed number) */
    choices?: PracticeChoice[];
    /** Expected numeric answer for typed-answer questions */
    numericAnswer?: number;
    tolerance?: number;
    placeholder?: string;
    correctFeedback: string;
    /** Progressive help: shown on the second wrong attempt, then the third, and so on */
    hints?: string[];
}

interface PracticeQuestionsProps {
    heading?: string;
    questions: PracticeQuestion[];
}

interface AnswerState {
    value: string;
    attempts: number;
    correct: boolean | null;
    message: string;
}

const emptyState: AnswerState = { value: "", attempts: 0, correct: null, message: "" };

export const PracticeQuestions = ({ heading = "Your turn", questions }: PracticeQuestionsProps) => {
    const [answers, setAnswers] = useState<Record<string, AnswerState>>({});

    const stateFor = (id: string): AnswerState => answers[id] ?? emptyState;

    const check = (question: PracticeQuestion) => {
        const current = stateFor(question.id);
        if (!current.value.trim()) return;

        const attempts = current.attempts + 1;
        let isCorrect = false;

        if (question.choices) {
            isCorrect = Boolean(
                question.choices.find((choice) => choice.id === current.value)?.correct,
            );
        } else if (typeof question.numericAnswer === "number") {
            const parsed = Number(current.value.replace(/[^0-9.eE+-]/g, ""));
            isCorrect =
                Number.isFinite(parsed) &&
                Math.abs(parsed - question.numericAnswer) <= (question.tolerance ?? 0.01);
        }

        let message = question.correctFeedback;
        if (!isCorrect) {
            const choiceFeedback = question.choices?.find(
                (choice) => choice.id === current.value,
            )?.feedback;
            const hints = question.hints ?? [];
            if (attempts === 1 && choiceFeedback) {
                message = choiceFeedback;
            } else {
                const hintIndex = Math.min(Math.max(attempts - 2, 0), hints.length - 1);
                message = hints[hintIndex] ?? choiceFeedback ?? "Not quite — try again.";
            }
        }

        setAnswers((previous) => ({
            ...previous,
            [question.id]: { value: current.value, attempts, correct: isCorrect, message },
        }));
    };

    const setValue = (id: string, value: string) => {
        setAnswers((previous) => ({
            ...previous,
            [id]: { ...stateFor(id), value, correct: null, message: "" },
        }));
    };

    return (
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-5">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                {heading}
            </div>

            <div className="space-y-6">
                {questions.map((question, index) => {
                    const state = stateFor(question.id);
                    return (
                        <div key={question.id} className="space-y-3">
                            <div className="flex gap-2 text-slate-800">
                                <span className="font-semibold text-slate-400">{index + 1}.</span>
                                <div className="leading-relaxed">{question.prompt}</div>
                            </div>

                            {question.choices ? (
                                <RadioGroup
                                    value={state.value}
                                    onValueChange={(value) => setValue(question.id, value)}
                                    className="space-y-2 pl-6"
                                >
                                    {question.choices.map((choice) => (
                                        <div key={choice.id} className="flex items-center gap-2">
                                            <RadioGroupItem
                                                value={choice.id}
                                                id={`${question.id}-${choice.id}`}
                                            />
                                            <Label
                                                htmlFor={`${question.id}-${choice.id}`}
                                                className="cursor-pointer font-normal text-slate-700"
                                            >
                                                {choice.label}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            ) : (
                                <div className="pl-6">
                                    <Input
                                        value={state.value}
                                        onChange={(event) =>
                                            setValue(question.id, event.target.value)
                                        }
                                        placeholder={question.placeholder ?? "Your answer"}
                                        className="w-40 bg-white"
                                    />
                                </div>
                            )}

                            <div className="flex items-center gap-3 pl-6">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => check(question)}
                                    disabled={!state.value.trim()}
                                >
                                    Check
                                </Button>
                            </div>

                            {state.message && (
                                <div
                                    className={`ml-6 rounded-lg border px-3 py-2 text-sm ${
                                        state.correct
                                            ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                                            : "border-amber-200 bg-amber-50 text-amber-800"
                                    }`}
                                >
                                    {state.message}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
