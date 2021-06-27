import { useState } from 'react';
import { Container, Box, Input, Textarea, FormLabel, Button, Text, VStack, HStack, Heading } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { StatsQuestions } from "./StatsQuestions";
import { FormError } from "../../ui/FormError";

interface MainFormProps {
    closeModal?: () => void;
}

export const MainForm: React.FC<MainFormProps> = ({ closeModal }) => {

    const [ submitting, setSubmitting ] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data: any) => {
        try {
            setSubmitting(true);
            const res = await fetch("/api/submitForm", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            setSubmitting(false);
        }
        catch (err) {
            console.log(err);
        }
        closeModal && closeModal();
    }

    return (
        <Container maxW="container.lg">

            <form onSubmit={handleSubmit(onSubmit)}>

                <VStack spacing="6">

                    <Box width="full">
                        <FormLabel><Text as="span" color="red">*</Text>Enter the name of the college:</FormLabel>
                        <Input 
                            autoComplete="off" 
                            {...register("school", {
                                required: { value: true, message: "Please enter the school's name"}
                            })} 
                            focusBorderColor="teal.400"
                        />
                        {errors.school && errors.school.message && <FormError>{errors.school.message}</FormError>}
                    </Box>
                    <Box width="full">
                        <FormLabel><Text as="span" color="red">*</Text>High school:</FormLabel>
                        <Input 
                            autoComplete="off" 
                            {...register("highSchool", {
                                required: { value: true, message: "Please enter your high school's name"}
                            })} 
                            focusBorderColor="teal.400"
                        />
                        {errors.highSchool && errors.highSchool.message && <FormError>{errors.highSchool.message}</FormError>}
                    </Box>
                    

                    <HStack width="full">
                        <StatsQuestions register={ register } errors={ errors } />
                    </HStack>
                    <Box width="full">
                        <FormLabel>APs (include score)</FormLabel>
                        <Textarea
                            id="apScores"
                            focusBorderColor="teal.400"
                            {...register("apScores")}
                        />
                    </Box>
                    <Box width="full">
                        <FormLabel><Text as="span" color="red">*</Text>Extracurriculars</FormLabel>
                        <Textarea
                            id="extracurriculars"
                            focusBorderColor="teal.400"
                            {...register("extracurriculars", {
                                required: { value: true, message: "Please enter your extracurriculars" }
                            })}
                        />
                        {errors.extracurriculars && errors.extracurriculars.message && <FormError>{errors.extracurriculars.message}</FormError>}
                    </Box>
                    <Box width="full">

                        <FormLabel>Anything else?</FormLabel>
                        <Textarea
                            id="comment"
                            focusBorderColor="teal.400"
                            {...register("comment")}
                        />
                    </Box>


                   <Button colorScheme="teal" type="submit" isLoading={submitting} loadingText="Submitting">Submit for review</Button>
                </VStack>
            </form>
        </Container>
    )
}