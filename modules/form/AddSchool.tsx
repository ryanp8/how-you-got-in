import { Input, FormLabel, Textarea } from "@chakra-ui/react";
import { MainForm } from "./MainForm";

interface FormProps {

}

export const Form: React.FC<FormProps> = () => {

    return (
        <div>
            <FormLabel>Enter the name of the school:</FormLabel>
            <Input placeholder="Enter the name of the school" />
            <MainForm />
        </div>
    )

}