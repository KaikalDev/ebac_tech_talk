AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timestampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timestampAtual = agora.getTime();

    const distanciaDoEvento = timestampDoEvento - timestampAtual;

    const diaEmMs = 1000*60*60*24;
    const horaEmMs = 1000*60*60;
    const minutosEmMs = 1000*60;

    const diasAteOEvento = Math.floor(distanciaDoEvento / diaEmMs);
    const horasAteOEvento = Math.floor(distanciaDoEvento % diaEmMs / horaEmMs);
    const minAteOEvento = Math.floor(distanciaDoEvento % horaEmMs / minutosEmMs);
    const segAteOEvento = Math.floor(distanciaDoEvento % minutosEmMs / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minAteOEvento}m ${segAteOEvento}s`
    if (diasAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
},1000)