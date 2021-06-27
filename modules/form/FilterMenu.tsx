import { Button, Container, Box, Heading, VStack, Checkbox, Flex } from "@chakra-ui/react"
import { useForm } from "react-hook-form";

import { useStore } from '../../hooks/useStore';
import { PostFetchOptions } from '../../types'
import { StatsQuestions } from './StatsQuestions';

export const FilterMenu: React.FC = () => {

    const state = useStore();
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm();

    const onSubmit = (data: PostFetchOptions) => {
        state.setActFilter(data.actFilter);
        state.setSatFilter(data.satFilter);
        state.setGpaFilter(data.gpaFilter);
        if (data.actScore) state.setActScore(data.actScore);
        if (data.satScore) state.setSatScore(data.satScore);
        if (data.gpa) state.setGpa(data.gpa);
        state.setStoreChange();
    }

    const reset = () => {
        state.setActFilter(false);
        state.setSatFilter(false);
        state.setGpaFilter(false);
        state.setActScore(36);
        state.setSatScore(1600);
        state.setGpa(5);
        state.setStoreChange();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4} alignItems="flex-start">
                <Heading as="h1" size="xs" color="gray.500" letterSpacing="wide">SORT</Heading>
                <VStack alignItems="flex-start">
                    <Checkbox colorScheme="teal" {...register("satFilter")}>SAT Score</Checkbox>
                    <Checkbox colorScheme="teal" {...register("actFilter")}>ACT Score</Checkbox>
                    <Checkbox colorScheme="teal" {...register("gpaFilter")}>GPA</Checkbox>
                </VStack>
                <Heading as="h1" size="xs" color="gray.500" letterSpacing="wide">FILTER</Heading>
                <VStack alignItems="flex-start" width="full">
                    <StatsQuestions register={register} errors={errors} />
                </VStack>
                <Flex width="full" justify="space-between">
                    <Button variant="outline" size="sm" colorScheme="teal" type="submit">Apply constraints</Button>
                    <Button variant="link" size="sm" colorScheme="teal" onClick={ reset }>Reset</Button>
                </Flex>
            </VStack>
        </form>
    )

}
