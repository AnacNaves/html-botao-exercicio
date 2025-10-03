let clientWeb = null;

const clientId = 'ESP8266' + Math.floor(Math.random() * 900) + 100;

clientWeb = new Paho.MQTT.Client("broker.emqx.io", 8084, clientId);

clientWeb.connect({
    useSSl: true,
    timeout: 5,
    onSuccess: function(){
        alert(`Conectado com sucesso!!`)
    },
    onFailure: function (){
        alert(`A conexão falhou.`)
    }
})

function ligarAmerelo(){
    document.getElementById("amarelo").classList.add("amar");

    const msgAmar = new Paho.MQTT.Message("");
    msgAmar.destinationName = "anac007/led/on"
    clientWeb.send(msgAmar);
}

function desligar(){
    document.getElementById("amarelo").classList.remove("amar");

    let msg = new Paho.MQTT.Message(``);
    msg.destinationName = "anac007/led/off"
    clientWeb.send(msg);
}