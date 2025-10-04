let energia = 80
let clima = "chovendo"


if (energia > 50 && clima === "ensolarado") {
    console.log("Estou com muita energia!")
    console.log("Vou sair para caminhar.")
} else if (energia > 20) {
    console.log("Estou com energia moderada.")
    console.log("Vou sair para correr.")
} else {
    console.log("Estou com pouca energia.")
    console.log("Vou ficar em casa descansando.")
}