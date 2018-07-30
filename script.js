let newObj = {}

const myInit = () => {
    database.ref(`/turbo/`).on(
        'value',
        (snapshot) => (
            getACParts(snapshot.val()),
            getBHParts(snapshot.val()),
            getBPParts(snapshot.val()),
            getCWParts(snapshot.val()),
            getGKParts(snapshot.val()),
            getHSParts(snapshot.val()),
            getKodeChraParts(snapshot.val()),
            getNZParts(snapshot.val()),
            getRKParts(snapshot.val()),
            getTWParts(snapshot.val())
        )
    )
}
myInit()

const getACParts = (turbo) => {
    let anotherArr = []
    for (var part in turbo) {
        let singlePart = turbo[part].actuator
        if (singlePart) {
            singlePart.map(el => {
                if (anotherArr.indexOf(el) === -1) {
                    anotherArr.push(el)
                }
                return anotherArr
            })
        }
    }
    const objToAssignRKPart = {
        ...newObj,
        actuator: anotherArr.map((o, key) => Object.assign({part: o, amount: 0, group: "actuator"}), {})
    }
    console.log(objToAssignRKPart.actuator.length)
    // objToAssignRKPart.actuator.forEach(async (turbo) =>
    //     await fetch(`https://turbo-direct-project.firebaseio.com/parts.json`,
    //         {
    //             method: `POST`,
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(turbo)
    //         })
    // )

}
const getBHParts = (turbo) => {
    let anotherArr = []
    for (var part in turbo) {
        let singlePart = turbo[part].bearing_housing
        if (singlePart) {
            singlePart.map(el => {
                if (anotherArr.indexOf(el) === -1) {
                    anotherArr.push(el)
                }
                return anotherArr
            })
        }
    }
    const objToAssignRKPart = {
        ...newObj,
        bearing_housing: anotherArr.map((o, key) => Object.assign({part: o, amount: 0, group: "bearing_housing"}), {})
    }
    console.log(objToAssignRKPart.bearing_housing.length)

    // objToAssignRKPart.bearing_housing.forEach(async (turbo) =>
    //     await fetch(`https://turbo-direct-project.firebaseio.com/parts.json`,
    //         {
    //             method: `POST`,
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(turbo)
    //         })
    // )
}

const getBPParts = (turbo) => {
    let anotherArr = []
    for (var part in turbo) {
        let singlePart = turbo[part].back_plate
        if (singlePart) {
            singlePart.map(el => {
                if (anotherArr.indexOf(el) === -1) {
                    anotherArr.push(el)
                }
                return anotherArr
            })
        }
    }
    const objToAssignRKPart = {
        ...newObj,
        back_plate: anotherArr.map((o, key) => Object.assign({part: o, amount: 0, group: "back_plate"}), {})
    }
    console.log(objToAssignRKPart.back_plate.length)

    // objToAssignRKPart.back_plate.forEach(async (turbo) =>
    //     await fetch(`https://turbo-direct-project.firebaseio.com/parts.json`,
    //         {
    //             method: `POST`,
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(turbo)
    //         })
    // )
}

const getCWParts = (turbo) => {
    let anotherArr = []
    for (var part in turbo) {
        let singlePart = turbo[part].compressor_wheel
        if (singlePart) {
            singlePart.map(el => {
                if (anotherArr.indexOf(el) === -1) {
                    anotherArr.push(el)
                }
                return anotherArr
            })
        }
    }
    const objToAssignRKPart = {
        ...newObj,
        compressor_wheel: anotherArr.map((o, key) => Object.assign({part: o, amount: 0,  group: "compressor_wheel"}), {})
    }
    console.log(objToAssignRKPart.compressor_wheel.length)

    // objToAssignRKPart.compressor_wheel.forEach(async (turbo) =>
    //     await fetch(`https://turbo-direct-project.firebaseio.com/parts.json`,
    //         {
    //             method: `POST`,
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(turbo)
    //         })
    // )
}
const getGKParts = (turbo) => {
    let anotherArr = []
    for (var part in turbo) {
        let singlePart = turbo[part].gasket_kit
        if (singlePart) {
            singlePart.map(el => {
                if (anotherArr.indexOf(el) === -1) {
                    anotherArr.push(el)
                }
                return anotherArr
            })
        }
    }
    const objToAssignRKPart = {
        ...newObj,
        gasket_kit: anotherArr.map((o, key) => Object.assign({part: o, amount: 0,  group: "gasket_kit"}), {})
    }
    console.log(objToAssignRKPart.gasket_kit.length)
    //
    // objToAssignRKPart.gasket_kit.forEach(async (turbo) =>
    //     await fetch(`https://turbo-direct-project.firebaseio.com/parts.json`,
    //         {
    //             method: `POST`,
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(turbo)
    //         })
    // )
}

const getNZParts = (turbo) => {
    let anotherArr = []
    for (var part in turbo) {
        let singlePart = turbo[part].nozzles
        if (singlePart) {
            singlePart.map(el => {
                if (anotherArr.indexOf(el) === -1) {
                    anotherArr.push(el)
                }
                return anotherArr
            })
        }
    }
    const objToAssignRKPart = {
        ...newObj,
        nozzles: anotherArr.map((o, key) => Object.assign({part: o, amount: 0,   group: "nozzles"}), {})
    }
    console.log(objToAssignRKPart.nozzles.length)

    // objToAssignRKPart.nozzles.forEach(async (turbo) =>
    //     await fetch(`https://turbo-direct-project.firebaseio.com/parts.json`,
    //         {
    //             method: `POST`,
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(turbo)
    //         })
    // )
}
const getHSParts = (turbo) => {
    let anotherArr = []
    for (var part in turbo) {
        let singlePart = turbo[part].heat_shield
        if (singlePart) {
            singlePart.map(el => {
                if (anotherArr.indexOf(el) === -1) {
                    anotherArr.push(el)
                }
                return anotherArr
            })
        }
    }
    const objToAssignRKPart = {
        ...newObj,
        heat_shield: anotherArr.map((o, key) => Object.assign({part: o, amount: 0,  group: "heat_shield"}), {})
    }
    console.log(objToAssignRKPart.heat_shield.length)
    //
    // objToAssignRKPart.heat_shield.forEach(async (turbo) =>
    //     await fetch(`https://turbo-direct-project.firebaseio.com/parts.json`,
    //         {
    //             method: `POST`,
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(turbo)
    //         })
    // )
}
const getKodeChraParts = (turbo) => {
    let anotherArr = []
    for (var part in turbo) {
        let singlePart = turbo[part].KODE_CHRA
        if (singlePart) {
            singlePart.map(el => {
                if (anotherArr.indexOf(el) === -1) {
                    anotherArr.push(el)
                }
                return anotherArr
            })
        }
    }
    const objToAssignRKPart = {
        ...newObj,
        KODE_CHRA: anotherArr.map((o, key) => Object.assign({part: o, amount: 0,  group: "KODE_CHRA"}), {})
    }
    console.log(objToAssignRKPart.KODE_CHRA.length)

    // objToAssignRKPart.KODE_CHRA.forEach(async (turbo) =>
    //     await fetch(`https://turbo-direct-project.firebaseio.com/parts.json`,
    //         {
    //             method: `POST`,
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(turbo)
    //         })
    // )
}
const getRKParts = (turbo) => {
    let anotherArr = []
    for (var part in turbo) {
        let singlePart = turbo[part].repair_kit
        if (singlePart) {
            singlePart.map(el => {
                if (anotherArr.indexOf(el) === -1) {
                    anotherArr.push(el)
                }
                return anotherArr
            })
        }
    }
    const objToAssignRKPart = {
        ...newObj,
        repair_kit: anotherArr.map((o, key) => Object.assign({part: o, amount: 0,  group: "repair_kit"}), {})
    }
    console.log(objToAssignRKPart.repair_kit.length)

    // objToAssignRKPart.repair_kit.forEach(async (turbo) =>
    //     await fetch(`https://turbo-direct-project.firebaseio.com/parts.json`,
    //         {
    //             method: `POST`,
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(turbo)
    //         })
    // )
}

const getTWParts = (turbo) => {
    let anotherArr = []
    for (var part in turbo) {
        let singlePart = turbo[part].turbine_wheel
        if (singlePart) {
            singlePart.map(el => {
                if (anotherArr.indexOf(el) === -1) {
                    anotherArr.push(el)
                }

            })
        }
    }
    const objToAssignTWPart = {
        ...newObj,
        turbine_wheel: anotherArr.map((o, key) => Object.assign({part: o, amount: 0, group: "turbine_wheel"}), {})
    }
    console.log(objToAssignTWPart.turbine_wheel.length)

    // objToAssignTWPart.turbine_wheel.forEach(async (turbo) =>
    //     await fetch(`https://turbo-direct-project.firebaseio.com/parts.json`,
    //         {
    //             method: `POST`,
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(turbo)
    //         })
    // )
}

