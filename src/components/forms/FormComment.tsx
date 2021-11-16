import { Container, Flex, Box, Button, VStack, FormControl, FormLabel, Textarea, Select, ButtonGroup } from '@chakra-ui/react';
import { Formik, Form, Field  } from "formik";
import { useState } from 'react';
import * as Yup from "yup";
import useFirebase from '../../firebase/useFirebase';
import AlertTemplate from '../../components/modals/AlertTemplate';

import {
	SelectControl,
	SubmitButton,
	TextareaControl
  } from "formik-chakra-ui";
import { useSelector } from 'react-redux';
  
  export default function FormComment() {

	const { save } = useFirebase("comentarios")
	let {user} = useSelector((state: any) => state.loginReducer);
	let {openModal} = useSelector((state: any) => state.modalReducer);
	  
	   const initialValues = {
		comment: "",
		calification: "",
		user: user?.mail
	  };

	  const validationComment = Yup.object().shape({
		comment: Yup.string()
				.min(3, 'Comentario demasiado corto')
				.max(200, 'Comentario demasiado largo')
				.required('Este campo es requerido'),
		calification: Yup.string().required('Este campo es requerido'),
	  });
	   
    return (
		<Container maxW="full" mt={0} overflow="hidden">
			
			<Formik
				initialValues={initialValues}
				onSubmit={(values, actions) => {
					actions.resetForm();
					save(values);
					actions.setSubmitting(false);
				}}
				validationSchema={validationComment}
			>
			{({ handleSubmit }) => (
				<Box
					borderWidth="1px"
					rounded="lg"
					shadow="1px 1px 3px rgba(0,0,0,0.3)"
					maxWidth={800}
					p={6}
					m="10px auto"
					as="form"
					onSubmit={handleSubmit as any}
					bg="white"
				>	
					{openModal && <AlertTemplate />}
					<FormLabel>Puntuación</FormLabel>		
					<SelectControl
						name="calification"
						selectProps={{ placeholder: "Seleccionar" }}
					>
						<option value="1">★</option>
						<option value="2">★★</option>
						<option value="3">★★★</option>
						<option value="4">★★★★</option>
						<option value="4">★★★★★</option>
					</SelectControl>
					<TextareaControl name="comment" label="Comentario" m="30px auto" />
					<ButtonGroup>
						<SubmitButton bg="#be7adf" color="white" _hover={{}}>Enviar</SubmitButton>
					</ButtonGroup>
				</Box>
			)}
			</Formik>
				
		</Container>
);}