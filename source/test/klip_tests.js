const Klip = artifacts.require("Klip");
const truffleAssert = require("truffle-assertions");

contract("Klip", accounts => {
  it("Asignar las variables y desplegar los contratos", async () => {

    // JSON con las opciones de transaccion para cada usuario
    opAdminKlip = {from: accounts[0], gas: 500000};
    opOrganizacion = {from: accounts[1], gas: 500000};
    opUsuarioDIDI = {from: accounts[2], gas: 500000};

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
                evidences: [
                    {
                        name: "Foto del terreno despues de adecuacion",
                        description: "Limpieza y preparacion del terreno",
                    }
                ]
            },
        ]
    }
  });

  it("Numero inicial de organizaciones igual a 0", async () => {
    numeroOrganizaciones = await insKlip.organizationCounter(opOrganizacion);
    assert.equal(numeroOrganizaciones, 0);
  });

  it("Numero inicial de proyectos igual a 0", async () => {
    numeroProyectos = await insKlip.projectCounter(opOrganizacion);
    assert.equal(numeroProyectos, 0);
  });

  it("AdminKlip debería crear organizacion", async () => {
    await insKlip.createOrganization(dataOrganization.name, dataOrganization.description, opOrganizacion.from, opAdminKlip);
  });

  it("Numero de organizaciones igual a 1", async () => {
    numeroOrganizaciones = await insKlip.organizationCounter(opAdminKlip);
    assert.equal(numeroOrganizaciones, 1);
  });

  it("Comprobar nombre de la organizacion", async () => {
    organizacion = await insKlip.getOrganization(1, opAdminKlip);
    assert.equal(organizacion[0], dataOrganization.name);
  });

  it("Comprobar descripcion de la organizacion", async () => {
    assert.equal(organizacion[1], dataOrganization.description);
  });

  it("Organizacion debería crear proyecto", async () => {
    await insKlip.createProject(opUsuarioDIDI.from, dataProject.name, dataProject.description, opOrganizacion);
  });

  it("Numero de proyectos igual a 1", async () => {
    numeroProyectos = await insKlip.projectCounter(opOrganizacion);
    assert.equal(numeroProyectos, 1);
  });

  it("Comprobar nombre del proyecto", async () => {
    proyecto = await insKlip.getProject(1, opOrganizacion);
    assert.equal(proyecto[0], dataProject.name);
  });

  it("Comprobar descripcion del proyecto", async () => {
    assert.equal(proyecto[1], dataProject.description);
  });

  it("Debería crear fase", async () => {
    await insKlip.createPhase(1, dataProject.phases[0].name, dataProject.phases[0].description, opOrganizacion);
  });

  it("Numero de fases igual a 1", async () => {
    numeroOrganizaciones = await insKlip.phaseCounter(opOrganizacion);
    assert.equal(numeroOrganizaciones, 1);
 });

  it("Comprobar nombre de la fase", async () => {
    fase = await insKlip.getPhase(1, opOrganizacion);
    assert.equal(fase[0], dataProject.phases[0].name);
  });

  it("Comprobar descripcion de la fase", async () => {
    assert.equal(fase[1], dataProject.phases[0].description);
  });

  it("Debería crear evidencia", async () => {
    await insKlip.createEvidence(1, dataProject.phases[0].evidences[0].name, dataProject.phases[0].evidences[0].description, opOrganizacion);
  });

  it("Numero de evidencias igual a 1", async () => {
    numeroEvidencias = await insKlip.evidenceCounter(opOrganizacion);
    assert.equal(numeroEvidencias, 1);
 });

  it("Comprobar nombre de la evidencia", async () => {
    evidencia = await insKlip.getEvidence(1, opOrganizacion);
    assert.equal(evidencia[0], dataProject.phases[0].evidences[0].name);
  });

  it("Comprobar descripcion de la evidencia", async () => {
    assert.equal(evidencia[1], dataProject.phases[0].evidences[0].description);
  });

  it("Organizacion debería activar el proyecto", async () => {
    await insKlip.activateProject(1, opOrganizacion);
  });

  it("Usuario DIDI debería empezar el proyecto", async () => {
    await insKlip.startProject(1, opUsuarioDIDI);
  });

  it("Usuario DIDI debería empezar la fase", async () => {
    await insKlip.startPhase(1, opUsuarioDIDI);
  });

  it("Usuario DIDI debería cargar la evidencia", async () => {
    ipfsPath = "**** ipfsPath ****";
    await insKlip.loadEvidence(1, ipfsPath, opUsuarioDIDI);
  });

  it("Organizacion debería rechazar la evidencia", async () => {
    comentario = "Se necesita ver el estado del patio.";
    await insKlip.rejectEvidence(1, comentario, opOrganizacion);
  });

  it("Organizacion debería aprobar la evidencia", async () => {
    comentario = "Todo en orden, seguimos adelante.";
    await insKlip.approveEvidence(1, comentario, opOrganizacion);
  });

  it("Organizacion debería terminar la fase", async () => {
    await insKlip.finishPhase(1, opOrganizacion);
  });

  it("Organizacion debería terminar el proyecto", async () => {
    await insKlip.finishProject(1, opOrganizacion);
  });

  it("AdminKlip debería generar las credenciales verificables", async () => {
    await insKlip.createClaims(1, opAdminKlip);
  });

});
