
let ac = []
let bh = []
let bp = []
let cw = []
let gk = []
let hs = []
let kc = []
let nz = []
let rk = []
let tw = []

const myInit = () => {
    database.ref(`/turbo/`).on(
        'value',
        (snapshot) => (
            console.log(snapshot.val()),
                getACParts(snapshot.val()),
                getBHParts(snapshot.val()),
                getBPParts(snapshot.val()),
                getCWParts(snapshot.val()),
                getGKParts(snapshot.val()),
                getHSParts(snapshot.val()),
                getKodeChraParts(snapshot.val()),
                getNZParts(snapshot.val()),
                getRKParts(snapshot.val()),
                getTWParts(snapshot.val()),
                thenSave(ac, bh, bp, cw, gk, hs, kc, nz, rk, tw)

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
    return ac = [...anotherArr]
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
    return bh = [...anotherArr]
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
    return bp = [...anotherArr]
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
    return cw = [...anotherArr]
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
    return gk = [...anotherArr]
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
    return nz = [...anotherArr]
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
    return hs = [...anotherArr]
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
    return kc = [...anotherArr]
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
    return rk = [...anotherArr]
}

const getTWParts = (turbo) => {
    let anotherArr = []
    for (var part in turbo) {
        let singlePart = turbo[part].turbine_wheel
        if (singlePart) {
            singlePart.map(el => {
                if (anotherArr.indexOf(el) === -1) {
                    anotherArr.push({part: el, amount: 0})
                }
                return anotherArr
            })
        }
    }
    return tw = [...anotherArr]
}
const thenSave = (ac, bh, bp, cw, gk, hs, kc, nz, rk, tw) => {
    database.ref(`/parts`)
        .set({ac: ac, bh: bh, bp: bp, cw: cw, gk: gk, hs: hs, kc: kc, nz: nz, rk: rk, tw})
}
