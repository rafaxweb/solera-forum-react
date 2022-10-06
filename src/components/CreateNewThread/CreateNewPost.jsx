import React, { useState } from 'react'
import { createNewPostDB } from '../../services/Post/createNewPostDB'
// import './CreateNewPost.css'

export default function CreateNewPost(props) {

	const [category, setCategory] = useState("doubt")
	const [body, setBody] = useState("")
	const [image, setImage] = useState("")

	const onChangeBody = (e) => {
		setBody(e.target.value);
	}

	const onSelectCategory = (e) => {
		setCategory(e.target.value);
	}

	const onChangeImageUrl = (e) => {
		setImage(e.target.value);
	}

	const onSubmitForm = (e) => {
		e.preventDefault();

		let finalImage = "";

		if (image.length === 0) {
			switch (category) {
				case "doubt":
					finalImage = "https://img.icons8.com/office/344/ask-question.png"
					break;
				case "suggestion":
					finalImage = "https://img.icons8.com/color-glass/344/portable-speaker2.png"
					break;
				case "clarification":
					finalImage = "https://img.icons8.com/color/344/pencil-tip.png"
					break;
			
				default:
					finalImage = "prueba"
					break;
			}
		}

		console.log(category);
		console.log(finalImage);

		const newPost =     {
			"idPost": Math.max,
			"description": body,
			"category": category,
			"image": finalImage,
			"thread": {
					"idThread": props.idThreat
			},
			"public": true
		}

		createNewPostDB(newPost)
	}
  
	return (
		<form action="" onSubmit={onSubmitForm}>
			<div>
				<label className='' htmlFor="">Cuerpo</label>
				<textarea name="" id="" cols="30" rows="10" value={body} onChange={onChangeBody}></textarea>
			</div>
			<div>
				<label htmlFor="">Categoría</label>
				<select value={category} onChange={onSelectCategory}>
					<option value="doubt" >Duda</option>
					<option value="suggestion">Sugerencia</option>
					<option value="clarification">Clarification</option>
				</select>
			</div>
			<div>
				<label htmlFor="">Imagen (url)</label>
				<input type="text" value={image} onChange={onChangeImageUrl} />
			</div>
			<button>Enviar</button>
		</form>
	)
}
