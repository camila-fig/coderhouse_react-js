import { useState } from "react";
import { Button } from "../button/button";
import { FormInput } from "../form-input/form-input";
import { signInAuthUserWithEmailPassword, signInWithGooglePopup } from "../../utils/firebase";
import './sign-in.scss'

const defaultFormFields = {
    email: "",
    senha: ""
}

export function SignIn() {

    const [formFilds, setFormFilds] = useState(defaultFormFields)
    const { email, senha } = formFilds

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFilds({ ...formFilds, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const { user } = await signInAuthUserWithEmailPassword(email, senha)
            alert("Você entrou na sua conta.")
            // console.log(user)
        } catch (e) {
            alert('E-mail ou senha inválida.')
            console.log(e)
        }

        // console.log(formFilds)
        setFormFilds(defaultFormFields)
    }

    //Chamar a função do Firebase para logar com Google
    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
        alert("Você entrou na sua conta.")
    }

    return (
        <div className="sign-in-container">
            <p className="form-title">Você já possui conta?</p>
            <form className="form-container" onSubmit={handleSubmit}>
                <FormInput
                    label="E-mail"
                    type="email"
                    requeried
                    name="email"
                    placeholder="digite seu e-mail"
                    autocomplete="off"
                    onChange={handleChange}
                    value={email}
                />
                <FormInput
                    label="Senha"
                    type="password"
                    requeried
                    name="senha"
                    placeholder="digite sua senha"
                    onChange={handleChange}
                    value={senha}
                />
                <Button type="submit">
                    Entrar
                </Button>
                <Button type="button" typeButton="google" onClick={signInWithGoogle}>
                    Entrar com conta Google
                </Button>
            </form>
        </div>
    )
}