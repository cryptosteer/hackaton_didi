const Klip = artifacts.require("Klip");
const truffleAssert = require("truffle-assertions");

contract("Klip", accounts => {
  it("Asignar las variables y desplegar los contratos", async () => {

    // JSON con las opciones de transaccion para cada usuario
    opAdminKlip = {from: accounts[0], gas: 500000};
    opOrganizacion1 = {from: accounts[1], gas: 500000};
    opUsuarioDIDI1 = {from: accounts[2], gas: 500000};
    opUsuarioDIDI2 = {from: accounts[3], gas: 500000};

    // Instancia del contrato
    insKlip = await Klip.deployed();

    // Datos de prueba
    dataOrganization = {
        name: "Granitos de paz",
        description: "La Fundación Granitos de Paz creó un modelo innovador y repetible de recuperación integral de zonas vulnerables que busca brindar las herramientas necesarias para que cientos de familias de escasos recursos puedan salir de la pobreza y acceder a un nivel de vida digno y a un futuro prometedor. Su estrategia está basada en la sumatoria de esfuerzos de entidades públicas y privadas que comparten sus metas.",
    };

    dataProject = {
        name: "Patios productivos",
        description: "El programa de agricultura urbana o Patios Productivos, nació como una iniciativa de seguridad alimentaria para comunidades vulnerables. La conversión de los patios descuidados a huertas organizadas nos ha proporcionado un beneficio adicional para el medio ambiente.",
        phases: [
            {
                name: "Adecuacion del espacio",
                description: "Limpieza y preparacion del terreno",
                budget: 100, // USD
                evidences: [
                    {
                        name: "Foto del terreno despues de adecuacion",
                        description: "Limpieza y preparacion del terreno",
                        format: "jpg,jpeg,png",
                    }
                ]
            },
        ]
    }
  });

  it("Número inicial de organizaciones igual a 0", async () => {
    numeroOrganizaciones = await insKlip.organizationCounter(opOrganizacion1);
    assert.equal(numeroOrganizaciones, 0);
  });

  it("Número inicial de proyectos igual a 0", async () => {
    numeroProyectos = await insKlip.projectCounter(opOrganizacion1);
    assert.equal(numeroProyectos, 0);
  });

  it("AdminKlip debería crear organización", async () => {
    await insKlip.createOrganization(dataOrganization.name, dataOrganization.description, opOrganizacion1.from, opAdminKlip);
  });

  it("Comprobar que existe la organización", async () => {
    ExisteOrganizacion = await insKlip.organizationExists(1, opAdminKlip);
    assert.equal(ExisteOrganizacion, true);
  });

  it("Número de organizaciones igual a 1", async () => {
    numeroOrganizaciones = await insKlip.organizationCounter(opAdminKlip);
    assert.equal(numeroOrganizaciones, 1);
  });

  it("Comprobar nombre de la organización", async () => {
    organizacion = await insKlip.getOrganization(1, opAdminKlip);
    assert.equal(organizacion[0], dataOrganization.name);
  });

  it("Comprobar descripción de la organización", async () => {
    assert.equal(organizacion[1], dataOrganization.description);
  });

  it("Organización debería crear proyecto", async () => {
    await insKlip.createProject(opUsuarioDIDI2.from, dataProject.name, dataProject.description, opOrganizacion1);
  });

  it("Cambiar beneficiario del proyecto", async () => {
    esBeneficiario = await insKlip.isBeneficiaryOrOrganization(1, opUsuarioDIDI1);
    assert.equal(esBeneficiario, false);
    await insKlip.setProjectBeneficiaryAddress(1, opUsuarioDIDI1.from, opOrganizacion1);
    esBeneficiario = await insKlip.isBeneficiaryOrOrganization(1, opUsuarioDIDI1);
    assert.equal(esBeneficiario, true);
  });

  it("Comprobar que existe el proyecto", async () => {
    ExisteProyecto = await insKlip.projectExists(1, opOrganizacion1);
    assert.equal(ExisteProyecto, true);
  });

  it("Número de proyectos igual a 1", async () => {
    numeroProyectos = await insKlip.projectCounter(opOrganizacion1);
    assert.equal(numeroProyectos, 1);
  });

  it("Comprobar nombre del proyecto", async () => {
    proyecto = await insKlip.getProject(1, opOrganizacion1);
    assert.equal(proyecto[0], dataProject.name);
  });

  it("Comprobar descripción del proyecto", async () => {
    assert.equal(proyecto[1], dataProject.description);
  });

  it("Debería crear fase", async () => {
    await insKlip.createPhase(1, dataProject.phases[0].name, dataProject.phases[0].description, dataProject.phases[0].budget, opOrganizacion1);
  });

  it("Comprobar que existe la fase", async () => {
    ExisteFase = await insKlip.phaseExists(1, opOrganizacion1);
    assert.equal(ExisteFase, true);
  });

  it("Número de fases igual a 1", async () => {
    numeroOrganizaciones = await insKlip.phaseCounter(opOrganizacion1);
    assert.equal(numeroOrganizaciones, 1);
 });

  it("Comprobar nombre de la fase", async () => {
    fase = await insKlip.getPhase(1, opOrganizacion1);
    assert.equal(fase[0], dataProject.phases[0].name);
  });

  it("Comprobar descripción de la fase", async () => {
    assert.equal(fase[1], dataProject.phases[0].description);
  });

  it("Debería crear evidencia", async () => {
    await insKlip.createEvidence(1, dataProject.phases[0].evidences[0].name, dataProject.phases[0].evidences[0].description, dataProject.phases[0].evidences[0].format, opOrganizacion1);
  });

  it("Comprobar que existe la evidencia", async () => {
    ExisteEvidence = await insKlip.evidenceExists(1, opOrganizacion1);
    assert.equal(ExisteEvidence, true);
  });

  it("Número de evidencias igual a 1", async () => {
    numeroEvidencias = await insKlip.evidenceCounter(opOrganizacion1);
    assert.equal(numeroEvidencias, 1);
  });

  it("Comprobar nombre de la evidencia", async () => {
    evidencia = await insKlip.getEvidence(1, opOrganizacion1);
    assert.equal(evidencia[0], dataProject.phases[0].evidences[0].name);
  });

  it("Comprobar descripción de la evidencia", async () => {
    assert.equal(evidencia[1], dataProject.phases[0].evidences[0].description);
  });

  it("Organización debería activar el proyecto", async () => {
    await insKlip.activateProject(1, opOrganizacion1);
  });

  it("Usuario DIDI debería empezar el proyecto", async () => {
    await insKlip.startProject(1, opUsuarioDIDI1);
  });

  it("Usuario DIDI debería empezar la fase", async () => {
    await insKlip.startPhase(1, opUsuarioDIDI1);
  });

  it("Usuario DIDI debería cargar la evidencia", async () => {
    const IPFS = require('ipfs') 
    console.log('--- Prueba IPFS ---')
    const node = await IPFS.create({silent: true})
    const filesAdded = await node.add({
    content: Buffer.from('Esta es la evidencia #' + Math.round(Math.random()*10000))
    })
    console.log('Evidencia cargada:', filesAdded.cid)
    const stream = node.cat(filesAdded.path)
    data = '';
    for await (const chunk of stream) {
    data += chunk.toString();
    }
    console.log('Datos: ', data);
  });

  it("Organización debería rechazar la evidencia", async () => {
    comentario = "Se necesita ver el estado del patio.";
    await insKlip.rejectEvidence(1, comentario, opOrganizacion1);
  });

  it("Organización debería aprobar la evidencia", async () => {
    comentario = "Todo en orden, seguimos adelante.";
    await insKlip.approveEvidence(1, comentario, opOrganizacion1);
  });

  it("Organización debería terminar la fase", async () => {
    await insKlip.finishPhase(1, opOrganizacion1);
  });

  it("Organización debería terminar el proyecto", async () => {
    await insKlip.finishProject(1, opOrganizacion1);
  });

  it("AdminKlip debería generar las credenciales verificables", async () => {
    await insKlip.createClaims(opAdminKlip);
  });

});
