import { Alert, AlertIcon } from "@chakra-ui/react"

const AlertTemplate = () => {
    return(
        <Alert status="success" variant="left-accent" m={"10px"}>
            <AlertIcon />
            Comentario guardado correctamente
        </Alert>
    )
}

export default AlertTemplate;