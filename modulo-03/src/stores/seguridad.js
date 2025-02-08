import { defineStore } from "pinia";

export const useSeguridadStore = defineStore("seguridad", () => {
    const usuario =  ref({
        Usuario: "--",
        Código: "--:",
        Logged: false
    });
    // metalo de Login
    const Login = (Usuario, Código) => {
         usuario.Usuario = Usuario;
        usuario.Código = Código;
        usuario.Logged = true;
    };
//metodo de Logout    
    const Logout = () => {
        usuario.value.Usuario = "--";
        usuario.value.Código = "--";
        usuario.value.Logged = false;
    }
    const isLoggedIn = computed(() => usuario.value.Logged);

    return {
        usuario,
        Login,
        Logout,
        isLoggedIn,
    };
});

