import {
    Container,
    Flex,
    Box,
    Button,
    VStack,
    FormControl,
    FormLabel,
    Textarea,
    Select
  } from '@chakra-ui/react';
  import { Formik } from "formik";
import { useState } from 'react';
import * as Yup from "yup";
import useFirebase from '../../firebase/useFirebase';
import SectionComments from "./SectionComments";
  
  export default function FormComment() {

	let [comment, setComment] = useState("");
	let [calification, setCalification] = useState("");
	let [mailUser, setMailUser] = useState("erica.gerez@gmail.com") //TODO: obtener el mail del usuario logueado dinamicamente
	const { save, documents } = useFirebase("comentarios")

	const resetData = () => {
		setComment("");
		setCalification("");
	}

	const onSubmit = () => {
		let saveComment = {
			comment: comment,
			calification: calification,
			user: mailUser
		}
		save(saveComment).then(()=>{
			resetData();
		});	
	};
	  
	  const initialValues = {
		comentario: "",
	  };
	  const validationSchema = Yup.object({
		comentario: Yup.string().required(),
	  });

	const handleTextArea = (event: any) => {
		setComment(event.target.value);
	}

	const handleCalification = (event: any) => {
		setCalification(event.target.value);
	}
	   
    return (
			<Container maxW="full" mt={0} overflow="hidden">
				<Flex maxW="full">
					<Box
					bg="#be7adf"
					color="white"
					borderRadius="lg"
					m={{ sm: 4, md: 16, lg: 10 }}
					width={"100%"}
					>
						<Box bg="white" borderRadius="lg" m={8} color="#0B0E3F"  p={{ sm: 5, md: 5, lg: 8 }} >
							<Formik
								initialValues={initialValues}
								onSubmit={onSubmit}
								validationSchema={validationSchema}
							>
								{/* {({ handleSubmit, values, errors }) => ( */}
								<VStack spacing={5} as="form"
								/* onSubmit={handleSubmit as any} */>
									<FormControl id="puntuacion">
									<FormLabel>Puntuación</FormLabel>	
									<Select variant="flushed" placeholder="Seleccionar" onChange={handleCalification} value={calification}>
										<option value="1">★</option>
										<option value="2">★★</option>
										<option value="3">★★★</option>
										<option value="4">★★★★</option>
										<option value="4">★★★★★</option>
									</Select>
									</FormControl>
									<FormControl id="name">
									<FormLabel>Comentario</FormLabel>
									<Textarea
										borderColor="gray.300"
										_hover={{
										borderRadius: 'gray.300',
										}}
										placeholder="¿Es este tu superhéroe favorito?"
										name="comentario"
										value={comment}
										onChange={handleTextArea}
									/>
									</FormControl>
									<FormControl id="name" float="right">
									<Button
										variant="solid"
										bg="#e9d8fd"
										color="black"
										_hover={{}}
										onClick={onSubmit}>
										Enviar
									</Button>
									</FormControl>
								</VStack>{/*  )} */}
								</Formik>

								
							</Box>
							<Box bg="#be7adf" borderRadius="lg" m={8} color="#0B0E3F"  p={{ sm: 5, md: 5, lg: 8 }} >
								<SectionComments />
							</Box>
							
							{/* {console.log(documents)} */} 
							
						</Box>
				</Flex>
			</Container>
);}