import { Box, FormLabel, NumberInput, NumberInputField, Text } from "@chakra-ui/react";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form"
import { FormError } from "../../ui/FormError";

interface StatsQuestionsProps {
    errors: DeepMap<Record<string, any>, FieldError>;
    register: UseFormRegister<Record<string, any>>;
}

export const StatsQuestions: React.FC<StatsQuestionsProps> = ({ errors, register }) => {
    return (
        <>
            <Box width="full">
                <FormLabel>SAT Score</FormLabel>
                <NumberInput min={0} max={1600} focusBorderColor="teal.400">
                    <NumberInputField
                        id="satScore"
                        {...register("satScore", {
                            min: { value: 0, message: "Score can't be below than 0" },
                            max: { value: 1600, message: "Score can't be higher than 1600" },
                        })}
                    />
                </NumberInput>
            </Box>
            <Box width="full">
                <FormLabel>ACT Score</FormLabel>
                <NumberInput min={0} max={36} focusBorderColor="teal.400">
                    <NumberInputField
                        id="actScore"
                        {...register("actScore", {
                            min: { value: 0, message: "Score can't be below than 0" },
                            max: { value: 36, message: "Score can't be higher than 36" },
                        })}
                    />
                </NumberInput>
            </Box>
            <Box width="full">
                <FormLabel>GPA</FormLabel>
                <NumberInput min={0} max={5} focusBorderColor="teal.400">
                    <NumberInputField
                        id="gpa"
                        {...register("gpa")}
                    />
                </NumberInput>
            </Box>
        </>
    )
}